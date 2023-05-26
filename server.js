const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const router = require('./routes/Router');
const sequelize = require('./config/connectionTestDB');

try {
    sequelize.authenticate();
    console.log('Koneksi Database Jalan');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.listen(process.env.PORT | 5000, () => {
    console.log("server jalan");
});

app.use('/api', router);