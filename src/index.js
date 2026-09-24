const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
// app.use(cors(['http://localhost:4200','http://localhost:8100']));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/', (req, res) => {res.json(
    {message: 'La API está en /api/movies/v1'}
);});

// Iniciamos la API
app.listen(app.get('port'), () => {
    console.log('Listening on port: ' + app.get('port'));
});


