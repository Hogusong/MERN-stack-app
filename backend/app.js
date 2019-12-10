const express = require('express');
const bodyParser = require('body-parser');
const placeRoutes = require('./routes/place-routes');
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use('/api/places', placeRoutes);

// if a wrong route is provided, this error occur.
app.use((req, res, next) => {
  throw new HttpError(404, 'Could not find this route.')
});

// handling all ERRORS which are sent by 'throw error' or 'return next(error)'.
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message });
})

app.listen(5000);
