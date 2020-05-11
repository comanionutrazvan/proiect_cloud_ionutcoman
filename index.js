const express = require('express');

const app = express();

app.use('/', express.static('frontend'))

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening on ${PORT}`));