const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const colors = require('colors');

const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

const goalRoutes = require('./routes/goalRoutes');
const userRoutes = require('./routes/userRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false }))
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);  //overwrites the default error handler

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})