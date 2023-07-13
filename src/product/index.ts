import productService from './product.service';


const createProducts = async () => {
  const product = await productService.insertOne({
    name: 'Лонгслив Startup Summer 2021',
    type: 'лонгслив',
    color: 'белый',
    number: 8,
  });

  console.log('Create product: \n', product);

  return product;
};

const updateProductById = async (productId: string) => {
  const updatedProduct = await productService.updateOne(
    { _id: productId },
    (old) => ({ ...old, color: 'бежевый' }),
  );

  console.log('Update product: \n', updatedProduct);
};

const getAllProducts = async () => {
  const { results } = await productService.find({});

  console.log('Product list: \n', results);

  return results;
};

const getProductById = async (productId: string) => {
  const product = await productService.findOne({ _id: productId });
    
  console.log('Get product: \n', product);

  return product;
};

const removeProductById = async (productId: string) => {
  const product = await productService.deleteOne({
    _id: productId,
  });
    
  console.log('Remove product: \n', product);
};

const aggregateProducts = async () => {
  const aggregationPipeline = [
    { $match: { number: { $gt: 0 } } },
    { $group: { _id: '$type', num: { $sum: '$number' } } },
    { $project: { _id: 0, type: '$_id', price: { $multiply: ['$num', 10] } } },
  ];

  const aggregationResult = await productService.aggregate(aggregationPipeline);

  console.log('Aggregation: \n', aggregationResult);

  return aggregationResult;
};

const executeProductOperations = async () => {
  const product = await createProducts();
  
  await updateProductById(product._id);

  await getAllProducts();

  await getProductById(product._id);

  await removeProductById(product._id);

  await aggregateProducts();
};

export default executeProductOperations;