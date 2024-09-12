const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const spamRoutes = require('./routes/spamRoutes');
const searchRoutes = require('./routes/searchRoutes');

dotenv.config();
const app = express();


app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/spam', spamRoutes);
app.use('/api/search', searchRoutes);


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
