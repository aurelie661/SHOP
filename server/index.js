require('../site/src/helpers/string.helpers');
const express = require("express");
const app = express();
const routers = require("./routers");
const cors = require("cors");

const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
var cookieParser = require('cookie-parser');
app.use(cookieParser());

const auth = require("./middlewares/auth.middleware");
for(const route in routers){
    const router = new routers[route]().router;
    app.use(`/${route}`, router , auth);
}

// app.use('*',(req,res) => {
//     res.send(req.body)
// });

const config = require("./config/app.config");
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}.`);
});