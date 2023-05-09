const app = require('./app');
const connectToDatabase = require('./config/connectDatabase');

process.on('uncaughtException', err => {
    console.log(`ERROR: ${err}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1);
});

connectToDatabase()

const server = app.listen(8080, () => {
    console.log(`Server started on PORT: 8080 in ${process.env.NODE_ENV}`);
});

process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err}`);
    console.log('Shutting down the server due to unhandled Promise Rejection');
    server.close(() => process.exit(1));
});