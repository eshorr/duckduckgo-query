const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Enable CORS for requests from frontend
app.use(cors());

// DuckDuckGo API route
app.get('/api/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    const response = await axios.get('https://api.duckduckgo.com/', {
      params: {
        q: query,
        format: 'json',
        no_redirect: 1,
        no_html: 1,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from DuckDuckGo' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});

