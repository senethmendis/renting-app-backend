const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/users');
const itemsRoutes = require('./routes/items');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

app.use('/user', userRoutes);
app.use('/items', itemsRoutes);

app.get('/', (req, res) => {
   res.send('<h1>Hello, Express.js Server!</h1>');
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});