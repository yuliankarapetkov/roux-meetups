const express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    let info = '';
    const dataFile = req.app.get('appData');
    dataFile.speakers.forEach(function(item) {
        info += `
    <li>
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
    </li>
    `;
    });
    res.send(`
      <h1>Roux Academy Meetups</h1>
      ${info}
  `);
});

router.get('/:speakerId', function(req, res) {
    const dataFile = req.app.get('appData'),
        speaker = dataFile.speakers[req.params.speakerId];
    res.send(`
      <h1>${speaker.title}</h1>
      <h2>with ${speaker.name}</h2>
      <p>${speaker.summary}</p>
  `);
});

module.exports = router;