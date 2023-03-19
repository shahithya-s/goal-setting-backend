const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const cors = require('cors')
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const corsOptions = require("./config/corsOptions");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors(corsOptions))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));



app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
