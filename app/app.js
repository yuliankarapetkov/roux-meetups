// Imports
const express = require('express'),
    app = express(),
    dataFile = require('./data/data.json');

// Constants
const port = process.env.PORT || 3000;

app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Roux Meetups';

// Routes
const indexRoute = require('./routes/index'),
    speakerRoutes = require('./routes/speakers');

// Config
app.use(express.static('app/public'));

// Routes Config
app.use('/', indexRoute);
app.use('/speakers', speakerRoutes);

app.use('/', (req, res) => {
   res.send('<h1>Roux Meetups</h1>');
});

app.listen(port, () => {
   console.log(`Server listening on port ${port}`);
});