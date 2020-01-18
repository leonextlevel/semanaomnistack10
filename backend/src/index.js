const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

mongoose.connect('mongodb+srv://admin:admin@cluster0-clnag.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080);