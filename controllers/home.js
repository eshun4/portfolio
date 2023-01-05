const homeText = [
    {
        title:"Kofi Junior Eshun",

        description:"Computer Science Major & Software Engineer.",

        introduction:`Hi there! I am a Computer Programmer, 
        Fullstack Software Engineer and Developer. 
        If you are looking for an analytical,
         detail-oriented, and creative
          mind then I am the right person for you.`,

        who_question:"Who is the guy ?",
        who_answer:`I am a Computer Programmer,
         Fullstack Software Engineer and Developer 
         from Ghana, West Africa. I really enjoy 
         solving problems as well as making things pretty easy to use. 
        I can't stop learning new things,
        and my passion to acquire new skills and tools is 
        what continues to push me to challenge
        myself to reach the highest limit. 
        I am passionate about building
        scalable systems, including MERN Stack Web and Mobile 
        Applications, on 
        both small and large-scale levels.`,
        box_1_title:`Programmer`,
        box_1_text:`For coding in general, 
        I usually work in Python and JavaScript, and
        have experience in working with other Languages 
        like JAVA and C++. I understand the 
        different design or coding patterns
        for both languages and 
        best practices employed in the industry.
         My passion for
         coding in these languages has
          boomed over the years even motivating me to 
          learn Dart, which I used to build 
          an Uber Clone. `,
        box_2_title:`Full-Stack`,
        box_2_text:`I have experience with a variety 
        of Frameworks and Libraries, that I have used to work
        on different seperate projects, however I mostly work with 
        NodeJS, ReactJS, GraphQL, ExpressJS, MongoDB, SwaggerJS, and the
        Flutter framework. In addition, I also have experience working with
        both relational and non-relational databases.
         You can find more about my skills and tools in the Tools Section.`
    }
]

exports.Homepage = (req, res)=>{
    res.send(req.oidc.isAuthenticated() ? res.redirect('/user/signin'): res.redirect('/dashboard'));
    console.log(req.oidc.user);
}

// exports.notfound = (req,res)=>{
//     res.send("404 Page not Found. It might be that a resource was deleted or has not been created yet.")
// }
exports.Dashboard = (req,res)=>{
    res.send(homeText);
}