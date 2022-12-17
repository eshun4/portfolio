const express = require("express");
const app = express();
const PORT = 3000;
const routes = require("./routes/index");
app.use(routes);


app.listen(PORT, ()=>{
    console.log(`This server is running on http://localhost:${PORT}` )}
);
