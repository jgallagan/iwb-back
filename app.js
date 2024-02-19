// Import required modules
const express = require('express');

// Create Express app
const app = express();

// Define routes (can be in a separate file)
const brandsRoutes = require('./routes/brands');

// Use defined routes
app.use('/api', brandsRoutes);

// Export the app object
module.exports = app;

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});