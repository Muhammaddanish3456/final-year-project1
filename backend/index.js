const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/usersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
.catch(err => console.log('❌ MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Route to register user
app.post('/api/register', async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const newUser = new User({ fullName, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});


const propertyRoutes = require('./routes/propertyRoutes');
app.use('/api/properties', propertyRoutes);

app.use('/api/properties/all', propertyRoutes);
app.use('/api/properties/delete', propertyRoutes);


// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
