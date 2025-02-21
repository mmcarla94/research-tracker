const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.elsevier.com/content/article', {
      headers: { 'X-ELS-APIKey': process.env.ELSEVIER_API_KEY }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching publications:', error);
    res.status(500).json({ error: 'Error fetching publications' });
  }
});

module.exports = router;
