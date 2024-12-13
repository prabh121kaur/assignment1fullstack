const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/admin');
const apiRoutes = require('./routes/api');
const path = require('path');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use('/admin', adminRoutes);
app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
