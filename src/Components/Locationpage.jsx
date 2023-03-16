import React, {useState} from "react";
// import '../Locationpagecss.css'
import "../App.css";
import { useNavigate } from "react-router-dom";
// import Dashboardpage from "../Components/Dashboardpage";
 

export default function Locationpage(props) {
  const [cursor, setCursor] = useState('pointer');
  const [kol,setKol]=useState("")

  function onchangeoption(event) {
    setKol(event.target.value);
   // document.getElementById("city").innerText =
   //   "Your selected city is : " + event.target.value;
 }

  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault()
    
    navigate(`/dashboard/${kol}`)
  }
  
  const options = ["Ahmedabad", "Vadodara", "Surat", "Rajkot"];
  
  const changeCursor = () => {
    setCursor(prevState => {
      if(prevState === 'pointer'){
        return 'pointer';
      }
      return 'pointer';
    });
  }
  return (
    <div className="App " style={{ width: "100%", height: "625px" }}>
      <br>
      </br>
      <h1
        style={{
          color: "black",
          textShadow: "4px 4px 4px gray",
          padding: "2px 4px",
          backgroundColor: "#89b6b5",
          display: "inline-block",
          border: "1px solid greay",
        }}
      >
        {" "}
       Movie booking app {" "}
      </h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <br></br>
        <select  name="cars" id="cars" onChange={(e)=>onchangeoption(e)} required>
          <option value='' style={{ background: "#89b6b5" }}>
            Choose a city of Gujarat
          </option>
          {options.map((option, index) => {
            return <option value={option} key={index}>{option}</option>;
          })}
          
        </select>
        <br></br>
        <br></br>
          {/* Your selected city is : {props.kol} */}
          <br></br>
          <br></br>
        
        <div>
            <button type="submit" value="Submit"  className="firstbutton" onClick={changeCursor}
      style={{ cursor: cursor }}>click me</button>
        </div>
      </form>
      {/* <Routes>
        <Route path='./Components/Dashboardpage' component={Dashboardpage}></Route>
        </Routes> */}
        {/* <Dashboardpage name ={kol}/> */}
    </div>
  );
}

