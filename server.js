const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const userRoutes = require('./routes/users');
const itemsRoutes = require('./routes/items');
const renterRoutes = require('./routes/renter');
const dashboardRoutes = require('./routes/dashboard');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

app.use('/api/user', userRoutes);
app.use('/api/items', itemsRoutes);
app.use('/api/renter', renterRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.get('/', (req, res) => {
   res.send('<h1>Hello, Express.js Server!</h1>');
});

app.use(errorHandler);

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});