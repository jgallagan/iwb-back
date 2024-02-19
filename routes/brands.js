const express = require('express');
const router = express.Router();

// Define routes
router.get('/brands', (req, res) => {
  res.send('GET all brands');
});

router.get('/brands/:id', (req, res) => {
  res.send(`GET brand with ID ${req.params.id}`);
});

router.get('/brands/:id/votes', (req, res) => {
  res.send(`GET votes for brand with ID ${req.params.id}`);
});

module.exports = router;