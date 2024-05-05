/* const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kzrdata:UchnbnVBASzXDcaV@medata.1aphd7s.mongodb.net/?retryWrites=true&w=majority&appName=Medata')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });

const dataSchema = new mongoose.Schema({
  name: String,
  age: Number,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now
  }
});

const Userdata = mongoose.model('Userdata', dataSchema);

const createDoc = async () => {
  const data = new Userdata({
    name: 'KZR',
    age: 53,
    active: true
  });
//  const result = await data.save();
 // console.log(result);
};

const getDoc = async () => {
  const result = await Userdata.find({age:{$gt: 13}});
  console.log(result);
};

(async () => {
  await createDoc();
  await getDoc();
  await mongoose.connection.close(); // Close the connection when done
})(); */

const express = require('express'); // Correct import of Express
const app = express(); // Initialize an Express app

// Define a route handler for the root route ('/')
app.get('/', (req, res) => {
  // Use 'sendFile' method to serve a static file, assuming '/home.html' is in the current directory
  res.sendFile(__dirname + '/home.html');
});

// Correct the 'listen' method and port number
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
