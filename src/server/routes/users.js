
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ d: 'd' });
});


module.exports = router;
