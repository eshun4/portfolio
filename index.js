const express = require("express");
const app = express();
const routes = require("./routes/index");
const env = require("./utilities/environments_configs");
const configure =env.state.configurations
const PORT = configure.PORT;

app.use(routes);
app.listen(PORT, ()=>{
    console.log(`This server is running on http://localhost:${PORT}` )}
);
