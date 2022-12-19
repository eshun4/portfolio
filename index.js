const express = require("express");
const app = express();
const routes = require("./routes/index");
const cors = require('cors');
app.use(cors());
const env = require("./utilities/environments_configs");
const PORT = env.state.configurations.PORT;

app.use(routes);
app.listen(PORT, ()=>{
    console.log(`This server is running on ${env.state.configurations.BASE_URL}${PORT}` )}
);
