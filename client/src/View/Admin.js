import React, {useEffect, useState} from "react";
import Nav from "../Components/NavBar";
import '../Admin.css';
import Table from "../Components/Table";
import SearchHeader from "../Components/SearchHeader";
import DropDown from "../Components/Dropdown";
import GreetingsQuotesAndCalender from "../Components/GreetingsCalendarAndQuote";
import Label from "../Components/Label";
import Input from "../Components/Input";

const filterList = (id, version) => (item) =>  id !== item && version !== item ;
// class Admin extends Component{
//     constructor(props){
//         super(props);
//         this.state= {
            // result: [],
            // date:'Thu Dec 22 2022',
            // time:'10:08:32 PM', 
            // quotes:[{quote:" There is nothing stronger in the world than gentleness",
            //             author:"Han Suyin"}],
            // crud: ["UPDATE", "DELETE"],
            // endpoints:[{Education:'/education'}, {Experience:'/experience'},{ Projects:'/projects'}, {Resume:'/resume_cv'}, {"Tools and Ethics":'/tools_and_ethics'}],
            // point:"/education",
            // head:[]
//         }
//         this.onSetData = this.onSetData.bind(this);
//         this.setDate = this.setDate.bind(this);
//         this.setTime = this.setTime.bind(this);
//         this.onSetQuote = this.onSetQuote.bind(this);
//         this.setRoute = this.setRoute.bind(this);
//         this.fetchData = this.fetchData.bind(this);
//         this.fetchQuote = this.fetchQuote.bind(this);
//     }

//     componentDidMount(prevState){
//         this.fetchData();
//         this.fetchQuote();
//     }
    

    // fetchData = async()=>{
    //    await fetch(`http://localhost:5000/v1/portfolio/kofijnreshun/dev/admin_portfolio_panel/admin_kje/${this.state.point}`)
    //     .then((response) => response.json())
    //     .then((data) => this.onSetData(data)).catch((error)=> {console.log(error)});
    //     this.intervalID = setInterval(() =>this.setTime(new Date().toLocaleTimeString()), 1000);
    //     this.intervalID = setInterval(() =>this.setDate(new Date().toDateString()), 1000);
    // }

    



//     render(){
//         const {result, date, time, quotes, crud, endpoints, point,  head} = this.state;
        // return (<div> 
        //             <Nav/>
        //             <SearchHeader/>
        //             <div className="belowNav">
        //             </div>
        //             <div className="realBody">
        //                 <GreetingsQuotesAndCalender list={quotes} date={date} time={time}/>
        //             <div className="routes"> 
        //                 <h2>Select Route: {point}</h2>
        //                 <DropDown endpoint={endpoints} val={point} onChanged={this.setRoute}/>
        //             </div>
        //                 <Table operations={crud} list={result} secList={head.filter(filterList('_id', '__v'))}/>
        //             </div>
        //             <div className="form_div">
        //             <form className="form">
        //             {
        //                 head.filter(filterList('_id', '__v')).map((it)=><div>
        //                 <Label id="label" label_name={it.replace(/[^a-zA-Z ]/g, " ")}/>
        //                 <Input className="form_input" placeholder={it.replace(/[^a-zA-Z ]/g, " ")}/>
        //                 </div> )
        //             } 
        //             </form>
        //             </div>
                    
        //      </div>)
//     }
    
//     componentWillUnmount(){
//         clearInterval(this.intervalID)
//         console.log("Unmounted")
//     }
// }


const Admin = ()=>{

    const initState = {
        result: [],
        date:'Thu Dec 22 2022',
        time:'10:08:32 PM', 
        quotes:[{quote:" There is nothing stronger in the world than gentleness",
                        author:"Han Suyin"}],
        crud: ["UPDATE", "DELETE"],
        endpoints:[{Education:'/education'}, {Experience:'/experience'},{ Projects:'/projects'}, {Resume:'/resume_cv'}, {"Tools and Ethics":'/tools_and_ethics'}],
        point:"/education",
        head:[]
    }

    const [state, setState] = useState(initState);

     useEffect(()=>{
        // fetchData();
        fetch(`http://localhost:5000/v1/portfolio/kofijnreshun/dev/admin_portfolio_panel/admin_kje/education`)
        .then((response) => response.json())
        .then((data) => handleChange(data)).catch((error)=> {console.log(error)});
     },[] )
     console.log(state)
    //  const changeHandler = e => {
    //     setAllValues({...allValues, [e.target.name]: e.target.value})
    //  }

    // const fetchData = async()=>{
       
    //     // this.intervalID = setInterval(() =>this.setTime(new Date().toLocaleTimeString()), 1000);
    //     // this.intervalID = setInterval(() =>this.setDate(new Date().toDateString()), 1000);
    // }

    // const fetchQuote = async()=>{
    //     await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {method:'GET',headers: { 'X-Api-Key': 'MXDpgwM2IkDeQUB1VxebKg==Wg57rs0u3gO0U11a'},})
    //     .then((response) => response.json())
    //     .then((data) => this.setResult(data)).catch((error)=> {console.log(error)});
    // }

    // const onSetData = (data)=>{
    //     this.setState((prevState) => ({result: data}))
    //     // this.state.result.forEach(element => {
    //     //     this.setState({head: Object.keys(element)});
    //     // });
    // }

    // const onSetQuote = (da) => {
    //     this.setState({quotes:da});
    // }

    // const setDate = (date)=>{
    //     this.setState({date:date});
    // }
    // const setTime = (time)=>{
    //     this.setState({time:time})
    // }

    const handleChange = (data) => {                
        setState(prevState =>([{
            ...prevState.result, result:data
        }]));
    };

    // const setRoute =(event) =>{
    //     setAllValues({...allValues});
    // }

    return (
        <div> 
          <Nav/>
             <SearchHeader/>
                    <div className="belowNav">
                    </div>
                    {console.log(state.result)}
                    {/* <div className="realBody">
                        <GreetingsQuotesAndCalender list={allValues.quotes} date={allValues.date} time={allValues.time}/>
                    <div className="routes"> 
                        <h2>Select Route: {allValues.point}</h2>
                        <DropDown endpoint={allValues.endpoints} val={allValues.point} onChanged={handleChange}/>
                    </div>
                        <Table operations={allValues.crud} list={allValues.result} secList={allValues.head.filter(filterList('_id', '__v'))}/>
                    </div>
                    <div className="form_div">
                    <form className="form">
                    {
                        allValues.head.filter(filterList('_id', '__v')).map((it)=><div>
                        <Label id="label" label_name={it.replace(/[^a-zA-Z ]/g, " ")}/>
                        <Input className="form_input" placeholder={it.replace(/[^a-zA-Z ]/g, " ")}/>
                        </div> )
                    } 
                    </form>
                    </div> */}
             </div>
    );
}

export default Admin;