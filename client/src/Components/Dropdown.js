import React from "react";


const DropDown = ({onChange})=>{
    return <select name="endpoints" id="endpoints" onChange={onChange}>
                <option value="education"> Education</option>
                <option value="experience">Experience</option>
                <option value="projects">Projects</option>
                <option value="tools_and_ethics">Tools and Ethics</option>
                <option value="resume_cv">Resume/CV</option>
        </select>
}

export default DropDown;