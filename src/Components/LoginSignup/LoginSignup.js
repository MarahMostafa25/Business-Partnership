const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');


const app = express();
const port = 3000;

const mongoURI = 'mongodb://localhost:27017';
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', async (req, res) => {
  const { companyName, ownerName, email, password, confirmPassword } = req.body;

  if (!companyName || !ownerName || !email || !password || password !== confirmPassword) {
    return res.status(400).send('Invalid signup data');
  }

  try {
    await client.connect();
    const database = client.db('PatnerShip_project');
    const collection = database.collection('Business');

    const existingCompany = await collection.findOne({ companyName });

    if (existingCompany) {
      return res.status(409).send('Company name already in use. Please choose another.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    const AddBusiness = {
      companyName,
      ownerName,
      email,
      password:hashedPassword,
    };

    const result = await collection.insertOne(AddBusiness);

    if (result.insertedCount === 1) {
      res.send('Signup successful! Business data stored in the database.');
    } else {
      res.status(500).send('Failed to store Business data in the database.');
    }
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
