exports.Homepage = (req, res)=>{
    res.send(req.oidc.isAuthenticated() ? res.redirect('/user/signin'): res.send("Welcome to your homepage."));
    console.log(req.oidc.user);
}

// exports.notfound = (req,res)=>{
//     res.send("404 Page not found.")
// }
exports.Dashboard = (req,res)=>{
    res.send("Welcome to the dashoard.");
}