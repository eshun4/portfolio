import App from '../App';
import Education from "../View/Education";
import Ethics from "../View/Ethics";
import Projects from "../View/Projects";
import Resume from "../View/Resume";
import Tools from "../View/Tools";
import Admin from "../View/Admin";
import env from "../utilities/environments_configs";

import {
    createBrowserRouter,
  } from "react-router-dom";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:   <App />,
    },
    {
      path: "/education",
      element:  <Education/> ,
    },
    {
      path: "/ethics",
      element:  <Ethics/> ,
    },
    {
      path: "/projects",
      element:   <Projects/>,
    },
    {
      path: "/resume",
      element:   <Resume/>,
    },
    {
      path: "/tools",
      element:   <Tools/>,
    },
    {
      path: `${env.state.configurations.REACT_APP_BASE_VERSIONING}${env.state.configurations.REACT_APP_BASE_PATH}${env.state.configurations.REACT_APP_ADMIN_PANEL}`,
      element:   <Admin/>,
    },
  ]);

  export default router;