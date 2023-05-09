const Connection = require('tedious').Connection;

const config = {
  server: "localhost",
  options: { trustServerCertificate: true},
  database: "",
  authentication: {
    type: "default",
    options: {  
      userName: "root",
      password: "",
    }
  }
};

const connectToDatabase = () => {
    const connection = new Connection(config);
    connection.on('connect', (err) => err ? console.log('Error: ', err) : console.log('Connected to the Database') );
    connection.connect();
}

module.exports = connectToDatabase;
