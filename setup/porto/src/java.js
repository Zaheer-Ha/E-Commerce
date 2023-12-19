
/// DATABASE TEST QUERY -  28/10/2023

const MongoClient = require('mongoose').MongoClient;

// Connection URL
const url = 'mongoose://localhost:3001';

// Database Name
const dbName = 'database-name';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB successfully');

  const db = client.db(dbName);

  // Perform database operations here

  client.close(); // Close the connection when you're done
});
