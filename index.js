const express = require('express');
const app = express();
const port = 3000;



// Middleware to simulate some processing
console.log("runninga aoooooooooooooooooooooooooooooooooo")

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
