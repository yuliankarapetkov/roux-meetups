// Imports
const express = require('express'),
    app = express(),
    dataFile = require('./data/data.json');

// Constants
const port = process.env.PORT || 3000;

app.set('appData', dataFile);

// Routes
const indexRoute = require('./routes/index'),
    speakerRoutes = require('./routes/speakers');

// Routes Config
app.use('/', indexRoute);
app.use('/speakers', speakerRoutes);

app.use('/', (req, res) => {
   res.send('<h1>Roux Meetups</h1>');
});

app.listen(port, () => {
   console.log(`Server listening on port ${port}`);
});