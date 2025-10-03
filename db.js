const mongoose = require('mongoose');

const connectDB = async () => {
   try {
      // Replace with your MongoDB connection string
      // For local MongoDB: "mongodb://localhost:27017/yourDatabaseName"
      // For MongoDB Atlas: Use the connection string provided by Atlas, replacing <password> and <dbname>
      const mongoURI = "mongodb://localhost:27017/";

      await mongoose.connect(mongoURI);
      console.log('MongoDB connected successfully!');
   } catch (err) {
      console.error('MongoDB connection error:', err.message);
      process.exit(1); // Exit process with failure
   }
};

module.exports = connectDB;