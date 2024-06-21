const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');  
const bodyParser = require('body-parser');
const dbConfig = require('./config/db.config');
const productRoutes = require('./routes/product.routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to the database");
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });

app.get('/', (req, res) => {
  res.json({ message: "Welcome to DressStore application." });
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
