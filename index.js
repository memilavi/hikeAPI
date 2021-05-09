const express = require('express');
const app = express();

app.get('/api/hike/:name', (req, res) => {
    var hike = '';

    switch (req.params.name) {
        case 'Yosemite':
            hike = "{length: 'Full day', difficulty: 'Moderate', elevation: '450m', loop: 'no', Seasons: 'All'}";
            break;
        case 'Rainier':
            hike = "{length: 'Full day', Difficulty: 'Easy', Elevation: '1200', loop: 'yes', Seasons: 'Spring, Summer'}";
            break;
        case 'Monterosso':
            hike = "{length: '2 Hours', Difficulty: 'Easy', Elevation: '50', loop: 'no', Seasons: 'Spring'}";
            break;
        case 'CaresRiver':
            hike = "{length: '8 Hours', Difficulty: 'Moderate', Elevation: '80', loop: 'no', Seasons: 'Spring, Summer'}";
            break;
    }

    console.log("Hike: " + hike);
    res.set("content-type", "application/json");
    res.send(JSON.stringify(hike));
});

app.get('/api/hike/:name/guideCost', (req, res) => {
    var cost;

    switch (req.params.name) {
        case 'Yosemite':
            cost=250;
            break;
        case 'Rainier':
            cost=180;
            break;
        case 'Monterosso':
            cost=130;
            break;
        case 'CaresRiver':
            cost=150;
            break;
    }

    console.log("cost: " + cost);
    res.set("content-type", "application/json");
    res.send(JSON.stringify("{cost: '" + cost + "'}"));
});

app.listen(80, () => console.log('Listening on port 80'));