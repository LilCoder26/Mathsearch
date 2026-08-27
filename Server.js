const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/search', (req, res) => {
    const query = req.query.query;
    const duckDuckGoUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
    res.redirect(duckDuckGoUrl);
});

app.listen(3000, () => {
    console.log('Lil\' Search server running on port 3000');
});
