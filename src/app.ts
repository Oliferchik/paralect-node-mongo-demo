import executeProductOperations from './product';


const run = async () => {
  await executeProductOperations();
};


run()
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log('Success!');
    process.exit(0);
  });