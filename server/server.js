const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle form submissions or other API requests
app.get('/api/contact', (req, res) => {
  // Process form data
  res.send('Contact form submitted successfully');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});