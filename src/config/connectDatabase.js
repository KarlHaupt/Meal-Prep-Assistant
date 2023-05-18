const Connection = require('tedious').Connection;

const config = {
  server: "localhost",
  options: { trustServerCertificate: true, database: "MealPlanDB", rowCollectionOnDone: true},
  database: "MealPlanDB",
  authentication: {
    type: "default",
    options: {  
      userName: "root",
      password: ""
    }
  }
};
const connection = new Connection(config);

const connectToDatabase = () => {   
    connection.on('connect', (err) => err ? console.log('Error: ', err) : console.log('Connected to the Database') );
    connection.connect();
}

module.exports = { connectToDatabase, connection };
