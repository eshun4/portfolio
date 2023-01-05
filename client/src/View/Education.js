import axios from "axios";
import React from "react";
import Nav from "../Components/NavBar";
import Quotes from "../Components/Quotes";
import ReadMoreReadLess from "../Components/ReadMoreReadLess";
import SearchHeader from "../Components/SearchHeader";
import TimeAndDate from "../Components/TimeAndDate";
// import { FaPenFancy} from "react-icons/fa";
class Education extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            results:[]
        }
        this.fetchEducation = this.fetchEducation.bind(this);
    }
    
     fetchEducation = async() => {
        await axios
        .get('https://kofijunioreshun.onrender.com/v1/portfolio/kofijnreshun/dev/admin_portfolio_panel/admin_kje/education')
        .then(response => this.setState({results:[ ...response.data]}))
        .catch(error=>console.log(error));
    }

    render(){
        const {results} = this.state;
        const loading = { textAlign:'center',
        fontSize:'1.2em'
      }
        return (
            <div>
            <Nav/>
                <SearchHeader/>
                <div className="belowNav"> </div>
            <div className="realBody"> 
            <section className="edu_section1">
                <div className="edu_section1_box1"><TimeAndDate className="time_date"/></div>
                <div className="edu_section1_box2"> <Quotes outerBoxClass="quote_section" quoteClass="quote_box" url_endpoint="education" authorClass="author_box"/></div>
            </section>
            {results.length > 0 ? results.map((item, index)=>
                index % 2 === 0 ?<section className="edu_section2" key={index}>
                                    <div className="edu_section2_even_box1">
                                     <p className="course_name_even">{item.course.toString() }  - {item.graduated===true?'Graduated':'Enrolled'}</p>
                                     <div className="course_description_even"><p className="description_title_even">Course Description</p> <ReadMoreReadLess buttonText="Read More" limit={50}>{item.course_description.toString()}</ReadMoreReadLess> </div>
                                     <div className="accomplishments_even"><p className="accomplishments_title_even">Accomplishments </p><ReadMoreReadLess buttonText="Read More" limit={20}>{item.accomplishments.toString()}</ReadMoreReadLess></div>
                                     {/* <div className="fav_subjects_even">
                                     {Object.values([...item.fav_subjects.split(',')]).map((item, index)=> <p key={index} className="fav_sub_item_even"> {item.toString()} </p> )}
                                     </div>
                                     <div className="fav_subjects_even">
                                     {Object.values([...item.talents.split(',')]).map((item, index)=> <p key={index} className="fav_sub_item_even"> {item.toString()} </p> )}
                                     </div>
                                     <div className="fav_subjects_even">
                                     {Object.values([...item.school_clubs.split(',')]).map((item, index)=> <p key={index} className="fav_sub_item_even"> {item} </p> )}
                                     </div> */}
                                     </div>
                                    <div className="edu_section2_even_box2">
                                    <p className="years"> {item.start_year.toString()} - {item.end_year.toString()}</p>
                                    <p className="school_even">{item.school_name.toString()}</p>
                                    </div>
                                </section>:
                                <section className="edu_section2" key={index}>
                                    <div className="edu_section2_odd_box1"> 
                                    <p className="years"> {item.start_year.toString()} - {item.end_year.toString()}</p>
                                    <p className="school_odd">{item.school_name.toString()} </p>
                                    </div>
                                    <div className="edu_section2_odd_box2"> 
                                    <p className="course_name_odd">{item.course.toString()} - {item.graduated===true?'Graduated':'Enrolled'}</p>
                                    <div className="course_description_odd"> <p className="description_title_odd">Course Description</p> <ReadMoreReadLess buttonText="Read More" limit={50}>{item.course_description.toString()}</ReadMoreReadLess></div>
                                    <div className="accomplishments_odd"> <p className="accomplishments_title_odd">Accomplishments </p><ReadMoreReadLess buttonText="Read More" limit={20}>{item.accomplishments.toString()}</ReadMoreReadLess></div>
                                    {/* <div className="fav_subjects_odd">
                                     {Object.values([...item.fav_subjects.split(',')]).map((item,index)=> <p key={index} className="fav_sub_item_odd"> {item.toString()}</p> )}
                                     </div>
                                     <div className="fav_subjects_odd">
                                     {Object.values([...item.talents.split(',')]).map((item,index) => <p key={index} className="fav_sub_item_odd"> {item.toString()}</p> )}
                                     </div>
                                     <div className="fav_subjects_odd">
                                     {Object.values([...item.school_clubs.split(',')]).map((item,index) => <p key={index} className="fav_sub_item_odd"> {item.toString()}</p> )}
                                     </div> */}
                                    </div>
                                </section>
             ):<p style={loading}> Loading...</p>}
                </div>
                <div className="belowNav"> </div>
                </div>)
             }

    componentDidMount = ()=>{
        this.fetchEducation();
    }
 }


export default Education;