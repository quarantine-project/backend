const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app); 

// if an environmental var is establisghed by heroku use that port else local 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);