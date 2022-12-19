exports.Homepage = (req, res)=>{
    res.send("Welcome to the homepage");
}
exports.notfound = (req,res)=>{
    res.send("404 Page not found.")
}
exports.Dashboard = (req,res)=>{
    res.send("Welcome to the dashoard.");
}