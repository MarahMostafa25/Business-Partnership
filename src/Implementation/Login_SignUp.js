const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Business = []; 

// Helper function to hash the password
const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

// Helper function to compare the hashed password with the provided password
const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const businessUser = Business.find((user) => user.email === email);

    if (businessUser && (await comparePassword(password, businessUser.password))) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Your other routes and server setup here...

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// // Signup endpoint
// app.post('/signup', (req, res) => {
//     const { companyName, ownerName, email, password, confirmPassword } = req.body;

//     // Implement your validation and user creation logic here
//     // Check if the user already exists, validate password, etc.

//     // Example: (Note: This is just a simple example and not secure for production)
//     const existingUser = users.find((user) => user.email === email);
//     if (existingUser) {
//         res.status(400).json({ success: false, message: 'User with this email already exists' });
//     } else if (password !== confirmPassword) {
//         res.status(400).json({ success: false, message: 'Passwords do not match' });
//     } else {
//         const newUser = { companyName, ownerName, email, password };
//         users.push(newUser);
//         res.json({ success: true, message: 'Signup successful' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
