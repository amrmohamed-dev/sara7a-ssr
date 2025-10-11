process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION, Shutting down...');
  process.exit(1);
});

const processHandler = (server) => {
  process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION, Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });
};

export default processHandler;
