const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const blogRoutes = require('./routes.js/blogRoutes');

const app = express();
const PORT = 8000;

mongoose.connect('mongodb+srv://hamtah112:MYfamily123.@cluster0.beufdgo.mongodb.net/api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use('/posts', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});