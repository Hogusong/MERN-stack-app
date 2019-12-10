const express = require('express');
const placeRoutes = require('./routes/place-routes');

const app = express();

app.use('/api/places', placeRoutes);

// handling all ERRORS which are sent by 'throw error' or 'return next(error)'.
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message });
})

app.listen(5000);
