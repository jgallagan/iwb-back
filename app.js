const express = require('express');
const app = express();
const router = express.Router();

// Sample static JSON data for brands
const brandsData = [
  { id: 1, name: 'Whattaburger' },
  { id: 2, name: 'In-N-Out' },
  { id: 3, name: 'Other' }
];

// Endpoint to get all brands
router.get('/brands', (req, res) => {
  res.json(brandsData);
});

// Endpoint to get a specific brand by ID
router.get('/brands/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const brand = brandsData.find(brand => brand.id === id);
  if (!brand) {
    res.status(404).json({ error: 'Brand not found' });
  } else {
    res.json(brand);
  }
});

// Endpoint to get votes for a specific brand by ID
router.get('/brands/:id/votes', (req, res) => {
  const id = parseInt(req.params.id);
  const brand = brandsData.find(brand => brand.id === id);
  if (!brand) {
    res.status(404).json({ error: 'Brand not found' });
  } else {
    // Sample static JSON data for votes (assuming each brand has votes)
    const votesData = {
      brandId: id,
      upvotes: 100,
      downvotes: 20
    };
    res.json(votesData);
  }
});

app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});