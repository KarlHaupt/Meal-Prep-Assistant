const Connection = require('tedious').Connection;

const config = {
  server: "mssqldb.cd9qu0bdz0pl.af-south-1.rds.amazonaws.com",
  options: { trustServerCertificate: true, database: "MealPlanDB", rowCollectionOnDone: true},
  database: "MealPlanDB",
  authentication: {
    type: "default",
    options: {  
      userName: "root",
      password: "Group12MealPlanDB"
    }
  }
};
const connection = new Connection(config);

const connectToDatabase = () => {   
    connection.on('connect', (err) => err ? console.log('Error: ', err) : console.log('Connected to the Database') );
    connection.connect();
}

module.exports = { connectToDatabase, connection };
