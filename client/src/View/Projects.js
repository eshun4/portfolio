import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../Components/NavBar";
import ReadMoreReadLess from "../Components/ReadMoreReadLess";
import SearchHeader from "../Components/SearchHeader";
// import { FaBars, FaTimes } from "react-icons/fa";
const Projects = ()=>{
    const [riddle, setRiddle] = useState([]);
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetchProjects();
        getRiddles();
    }, [])
    
    const fetchProjects = async() => await axios.get('https://kofijunioreshun.onrender.com/v1/portfolio/kofijnreshun/dev/admin_portfolio_panel/admin_kje/projects')
    .then(response=>setProjects(response.data));

    const getRiddles = async()=>{
        axios.get(`https://api.api-ninjas.com/v1/riddles`, 
        {headers: { 'X-Api-Key': 'MXDpgwM2IkDeQUB1VxebKg==Wg57rs0u3gO0U11a'},
        contentType: 'application/json'})
        .then((response)=> setRiddle([...response.data]));
    }
    
    return (
        <div> 
        <Nav/>
        <SearchHeader/>
            <div className="realBody">
            <div className="belowNav"></div>
            <section className="proj_section_1">
            <div className="proj_section_1_overlays_holder"> 
                <div className="proj_section_1_overlay1"> 
                    <h4> Projects</h4>
                    <p> Excuse me to share with you some of the tasks I have worked on.
                        Many of these ideas were built from knowledge I gained from online 
                        bootcamps, college classes, and internships I completed. 
                        The tools I used to build each of 
                        these projects vary from project to project.</p>
                </div>
                <div className="proj_section_1_overlay2">
                    <h4>Riddle</h4>
                    {
                       riddle.length > 0 ? riddle.map((item, index) => {
                            return(<section key={index}>
                                    <p className="riddle_title"> Title: {item.title}</p>
                                    <p className="riddle_question"> {item.question}</p>
                                    <div className="riddle_answer"> <ReadMoreReadLess buttonText="Answer" limit={0}>{ item.answer}</ReadMoreReadLess> </div>
                                 </section>)
                        }):<p>Loading...</p>
                    }
                </div>
            </div>
             </section>
             {
                projects.length > 0 ? projects.map((project, index)=>
                     index % 2 === 0 ? <section className="proj_section_2" key={index}>
                                        <div className="proj_section_2_box1">
                                            <h4 className="proj_section_2_box1_school_name">
                                            {project.project_name}
                                            </h4>
                                            <p className="proj_section_2_box1_dates">
                                                {project.start_date} - {project.end_date}
                                            </p>
                                            <div className="proj_section_2_box1_requirements">
                                                <p className="proj_section_2_box1_requirements_title">Requirements</p>
                                                <p className="proj_section_2_box1_requirements_text">{project.requirements}</p>
                                                <div className="proj_section_2_box1_tools_used">
                                                    {
                                                Object.values([...project.tools_used.split(',')])
                                                .map((item, index)=><p className="proj_tools_1" key={index}> {item}</p>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="proj_section_2_box2">
                                        <div className="proj_section_2_box2_results">
                                            <p className="proj_section_2_box2_results_title">
                                                Results
                                            </p>
                                            <p className="proj_section_2_box2_results_text">
                                                {project.results}
                                            </p>
                                            <p className="proj_section_2_box2_accomplishments" ></p>
                                        </div>
                                        </div>
                                    </section> :<section className="proj_section_2" key={index}>
                                        <div className="proj_section_2_box1">
                                        <div className="proj_section_2_box1_results">
                                            <p className="proj_section_2_box1_results_title">
                                                Results
                                            </p>
                                            <p className="proj_section_2_box1_results_text">
                                                {project.results}
                                            </p>
                                            <p className="proj_section_2_box1_accomplishments" ></p>
                                        </div>
                                        </div>
                                        <div className="proj_section_2_box2"> 
                                        <h4 className="proj_section_2_box2_school_name">
                                            {project.project_name}
                                            </h4>
                                            <p className="proj_section_2_box2_dates">
                                                {project.start_date} - {project.end_date}
                                            </p>
                                            <div className="proj_section_2_box2_requirements">
                                                <p className="proj_section_2_box2_requirements_title">Requirements</p>
                                                <p className="proj_section_2_box2_requirements_text">{project.requirements}</p>
                                                <div className="proj_section_2_box2_tools_used">
                                                    {
                                                Object.values([...project.tools_used.split(',')])
                                                .map((item, index)=><p className="proj_tools_2" key={index}> {item}</p>)}
                                                </div>
                                            </div>
                                        </div>
                                    </section> 
                ) :<p> Loading...</p>
             }
            </div>
            <div className="belowNav"> </div>
         </div>)

    }

export default Projects;