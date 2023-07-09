const productService = require('./resources/product/product.service');

const aggregationPipeline = [{
    $match: {
      number: {
        $gt: 0
      }
    }
  },
  {
    $group: {
      _id: "$type",
      num: {
        $sum: "$number"
      }
    }
  },
  {
    $project: {
      _id: 0,
      type: "$_id",
      price: {
        $multiply: ["$num", 10]
      }
    }
  }
]

const run = async () => {
  let product = await productService.create({
    name: "Лонгслив Startup Summer 2021",
    type: "лонгслив",
    color: "белый",
    number: 8,
  });

  console.log('Create product: \n', product);

  product = await productService.updateOne({
      _id: product._id
    },
    (old) => ({ ...old,
      color: "бежевый"
    }),
  );

  console.log('Update product: \n', product);

  const {
    results
  } = await productService.find({});

  console.log('Product list: \n', results);

  product = await productService.findOne({
    _id: product._id
  });

  console.log('Get product: \n', product);

  product = await productService.remove({
    _id: product._id
  });

  console.log('Remove product: \n', product);

  const aggregationResult = await productService.aggregate(aggregationPipeline);

  console.log('Aggregation: \n', aggregationResult);
}

run()
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log('Success!');
    process.exit(0);
  })