const express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    const data = req.app.get('appData');
    let pagePhotos = [];

    data.speakers.forEach(function(item) {
        pagePhotos = pagePhotos.concat(item.artwork);
    });

    res.render('index', {
        pageTitle: 'Home',
        artwork: pagePhotos,
        pageID: 'home'
    });
});

module.exports = router;