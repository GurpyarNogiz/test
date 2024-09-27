const express = require('express');
const app = express();
const port = 3000;

// Middleware to simulate some processing
app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    setTimeout(next, 5000); // Simulate delay
});
///
app.get('/', (req, res) => {
    res.send('workingCurrent tioioiime : ' + new Date().toLocaleString());
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
