const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const PORT = 8080;

const app = express();

app.use(cors({
  credentials: true,
  origin: true
}));

app.options('*', cors());

app.use(express.json());
app.use(routes)
app.listen(process.env.PORT || 4000, () => {
  console.log(`API education is on ${PORT}`);
})
