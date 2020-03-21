const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ hi: 'there'});
});

// if an environmental var is establisghed by heroku use that port else local 5000
const PORT = process.env.PORT || 5000
app.listen(PORT);