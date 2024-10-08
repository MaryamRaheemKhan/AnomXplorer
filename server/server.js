const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/User');
const Predictions = require('./models/Predictions');
const nodemailer = require('nodemailer');

const http = require('http');
const WebSocket = require('ws');
const mongoose = require('mongoose');

const PORT = 5000;

mongoose.connect('mongodb://mongo:xPZGwGwpmqwYFzTGlYGucfvWKJTSptMn@monorail.proxy.rlwy.net:55176', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'my_database'
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json()); // Parse JSON-encoded bodies
app.use(cors());

// Define a Mongoose model for users

// Define a route to fetch all users
app.get('/api/users', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find({});
    res.json(users); // Send users as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.get('/api/predictions', async (req, res) => {
  try {
    // Fetch all predictions from the database
    const predictions = await Predictions.find({});
    res.json(predictions); // Send predictions as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});





app.post('/api/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }


    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/Email', async (req, res) => {
  const { email, message } = req.body;

  try {
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host:'smtp-mail.outlook.com', // Your SMTP host
      //secureConnection: false,
      port: 587, // Your SMTP port
      secure: false, // Use TLS
      auth: {
        user: 'anomexplorer@outlook.com', // Your SMTP username
        pass: 'Fastnuces:)', // Your SMTP password
      },
      tls: {
        // Specify the minimum and maximum SSL/TLS protocol versions
        // Use 'TLSv1.2' as a secure protocol version
        minVersion: 'TLSv1.2',
        maxVersion: 'TLSv1.3', // You can adjust this as needed
      },
    });

    // Setup email data
    const mailOptions = {
      from: 'anomexplorer@outlook.com', // Your email address
      to: email,
      subject: 'Anomaly Detected',
      text: message,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});



const wss = new WebSocket.Server({ port: 5001 }); // WebSocket server port

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  // MongoDB change stream setup (assuming you're using Mongoose)
  const changeStream = Predictions.watch();

  // Listen for changes in the MongoDB collection
  changeStream.on('change', (change) => {
    // Send the updated record to the frontend
    ws.send(JSON.stringify(change));
    console.log('Change detected:', change);

  });


});



app.post('/api/login', async (req, res) => {
  try {
    // Extract username and password from request body
    const { username, password } = req.body;


    // Check if the username exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the password is correct
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // If username and password are correct, send a success response
    res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


