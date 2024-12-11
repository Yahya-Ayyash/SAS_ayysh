import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import ProductRoute from './router/ProductRouter.js';

const app = express();

// Koneksi ke MongoDB Atlas
const uri = "mongodb+srv://<ayyash>:<ayyase>@donation.ezj4y.mongodb.net/?retryWrites=true&w=majority&appName=Donation";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Router
app.use(ProductRoute);

// Server
const PORT = 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
