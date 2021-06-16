const express = require('express');
const session = require('express-session');
const cors = require("cors");

const router = express.Router();
const app = express();


app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send("HOSTED");
})

app.get('/check', (req, res) => {
    res.send("CHECKING");
})

app.use('/', router);

app.listen(process.env.PORT || 9000, () => {
    console.log(`App Started on PORT ${process.env.PORT || 9000}`);
});
