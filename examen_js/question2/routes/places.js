const express = require('express');
const {
    createOnePlace,
} = require('../models/places');

const router = express.Router();


// POST route to create a new vacation place
router.post('/', (req, res) => {
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;

  if (!name || !description) return res.sendStatus(400); // error code '400 Bad Request'

  const createdPlaceId = createOnePlace(name,description);
  // Return the new place's ID in the response
  return res.json(createdPlaceId);
});

module.exports = router;
