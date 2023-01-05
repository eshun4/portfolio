import React from 'react';
import Nav from "../Components/NavBar";
import SearchHeader from '../Components/SearchHeader';
import "../CSS/Small/small.css";
import axios from 'axios';
import env from "../utilities/environments_configs";
const configuration = env.state.configurations;

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            homeText:[]
        }
    }

    

    render(){
        return(
            <div >
            <header className="App-header">
            <Nav/>                    
            </header>
            <SearchHeader/>
            <div className="belowNav"></div>
            <div className="homeBody">     
            {this.state.homeText.length > 0 
                && this.state.homeText.map((item,index)=>{
                    return(
                        <div key={index} className="home_section_background">
                        <section className="home_section_one"> 
                        <div className="home_section_one_div1">
                        <h4>{item.title}</h4>
                        <h5>{item.description}</h5>
                        <p>{item.introduction}</p>
                        </div>
                        </section>  
                        <section className="home_section_three">
                            <div className="box_1">
                             <h3> {item.box_1_title}</h3>
                             <p>{item.box_1_text}</p>
                            </div>
                            <div className="box_2">
                            <h3>{item.box_2_title}</h3>
                             <p>{item.box_2_text}</p>
                            </div>
                        </section>
                        <section className="home_section_two">
                        <h4>{item.who_question}</h4>
                        <p>{item.who_answer} </p>
                        </section>
                        </div>
                        )
                })} 
            </div>
            <div className="belowNav_2"></div>
          </div>)
    }

    componentDidMount(){
        axios.get(`${configuration.REACT_APP_BASE_URL}`)
        .then(response => this.setState({homeText:[...response.data]}))
        .catch(error=>console.log(error));
    }
}



export default Home;
