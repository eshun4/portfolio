import App from '../App';
import Education from "../View/Education";
import Ethics from "../View/Ethics";
import Projects from "../View/Projects";
// import Resume from "../View/Resume";
// import Tools from "../View/Tools";
import Admin from "../View/Admin";
import env from "../utilities/environments_configs";

import {
    createBrowserRouter,
  } from "react-router-dom";
import CustomError from '../View/Errorpage';
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:   <App />,
      errorElement:<CustomError error="Message"/>
    },
    {
      path: "/education",
      element:  <Education/> ,
      errorElement:<CustomError error="Message"/>
    },
    {
      path: "/ethics",
      element:  <Ethics/> ,
      errorElement:<CustomError error="Message"/>
    },
    {
      path: "/projects",
      element:   <Projects/>,
      errorElement:<CustomError error="Message"/>
    },
    // {
    //   path: "/resume",
    //   element:   <Resume/>,
    //   errorElement:<CustomError error="Message"/>
    // },
    // {
    //   path: "/tools",
    //   element:   <Tools/>,
    //   errorElement:<CustomError error="Message"/>
    // },
    {
      path: `${env.state.configurations.REACT_APP_BASE_VERSIONING}${env.state.configurations.REACT_APP_BASE_PATH}${env.state.configurations.REACT_APP_ADMIN_PANEL}`,
      element:   <Admin/>,
      errorElement:<CustomError error="Message"/>
    },
  ]);

  export default router;