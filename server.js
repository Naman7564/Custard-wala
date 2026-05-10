const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Basic API route
app.get('/api/status', (req, res) => {
    res.json({ status: 'active', message: 'Backend is running' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
