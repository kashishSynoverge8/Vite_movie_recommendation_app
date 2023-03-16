import "../App.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import JsonData from "../theatre.json";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import avenger from '../Assests/image/avengers.png'
import { TiArrowBack} from "react-icons/ti";


pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function Bookdangal(props) {
  let { selectedCity } = useParams();
  const row1 = ["A", "B","C" ,"D", "E", "F"];

function generatePDF() {
  const image = {
    image: props.movietitle.poster,
    fit: [100, 100],
    alignment: "right"
  };

  const docDefinition = {
    content: [
      { text: '*******Ticket Invoice********', style: 'header' },
      { text: '' },
      image,
      { text: 'Movie:-  ' + props.movietitle.moviename },
      
      { text: 'City :-  ' + selectedCity },
      { text: 'Email :-  ' + c.email },
      { text: 'Selected Seats :-  ' + bookArray },
      { text: 'Show time :-  ' + time },
      { text: 'Theatre :-  ' + theatre },
      { text: 'Total  :-  ' + count },
      { text: '---------Thank you---------- ' }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 20]
      }
    }
  };

  const pdfDocGenerator = pdfMake.createPdf(docDefinition);
  pdfDocGenerator.download(props.movietitle.moviename);
}

const[timearray,setTimearray]=useState(["04:45 PM","06:45 PM","08:45 PM","10:45 PM"])

// for theatre selection
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JsonData.filter((theatres) => theatres.city.includes(selectedCity)));
  }, []);


  const col1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let c = JSON.parse(localStorage.getItem("Logined details"));
  // const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [count, setCount] = useState(0);
  function handleShow() {
    setShow(true);
    setCount(bookArray.length * 250);
  }
  function onClick() {
    props.setShowResults(false);
  }
  
// selection of seats

  const [bookArray, setBookArray] = useState([]);
  function bookSeat(e) {
    if (e.target.checked) setBookArray([...bookArray, e.target.value]);
    else {
      setBookArray(
        bookArray.filter((item) => {
          return item !== e.target.value;
        })
      );
    }
  }
useEffect(() => {
  setCount(bookArray.length * 250);


}, [bookArray])
const[time, setTime ]=useState("")
const[theatre, setTheatre]=useState("")
const[showseat,setShowseat]=useState(false)

function buttondata(j,i){
    setTime(j);
    setTheatre(i);
    if(showseat)
    setShowseat(true)
    else
    setShowseat(true)
}
console.log(showseat)
  return (
    <>
      <div className="App ">
        <button  
          className="btn btn-primary position-absolute top-0 start-0"
          onClick={() => onClick()}
        > <TiArrowBack/>
          {/* Back  <span><strong>&#8592;</strong></span> */}
        </button>
        Please consider your booking for :- <b> {props.movietitle.moviename}</b>
        <br></br>
        <b>{props.movietitle.moviename}</b> is released on <b> :-</b>
        {props.movietitle.Released_Date}
        <div>
        <img src={props.movietitle.poster} alt={props.movietitle.title}  style={{ width: "10%", float:"right",marginRight:"0%" }}/>
     </div> </div>
      
         
{/* Theatres according to the City displayed here */}
 
      <table border={0} className="table table-borderless">
        <thead>
          <tr>
            <th className="text-center"> <b>Theatres</b></th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              item.theatres.map((i)=>{
                  return(
                    <tr>
                    <td>{i}, {selectedCity}</td>
                    <table className="table">
                      <tr>
                        {timearray.map((j)=>{
                          return(
                            <td>
                            <button className="btn btn-outline-success" onClick={()=> buttondata(j,i)}>{j}</button></td>
                          )
                        })}
                    
                      </tr>
                    </table>
                    
                    
                    </tr>
                  )
                })
            );
          })}
        
        </tbody>
      </table>
      
      
     {/* Table with movie name , theatre, Timings, and name displayed  */}
      
  {/* <div></div> <br></br>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Movie Name</th>
            <th scope="col">Theatre</th>
            <th scope="col">Timings</th>
            <th scope="col">Enter you name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td> {props.movietitle.moviename}</td>
            <td>
              {props.movietitle.theatre},{selectedCity}
            </td>
            <td>06:45 PM</td>
            <td>
              
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td> </td>
            <td> </td>
            <td>08:35 PM</td>
            <td>
              
              <div className="text-center">
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td> </td>
            <td>10:45 PM</td>
            <td>
              
              <div className="text-center">
              </div>
            </td>
          </tr>
        </tbody>
      </table> */}
  {showseat? <div> <div>
     <div className=" text-danger"> <b>Selected time :- {time} </b></div>
      <div className="text-center text-warning ">
        <b>
          Please select your seat <b>NOW!</b>
        </b>
      </div>
      <br></br>
      <div className="d-flex justify-content-center">
        <table className="  table  table-bordered  " style={{ width: "80%" }}>
          <tr className="screen  text-center">
            <td colspan="14">
              <div className=" d-flex justify-content-center">
                {/* <b>**All eyes this way</b> */}
                <img src={avenger} alt= 'screen'width ='500px'></img>
              </div>
            </td>
          </tr>
          <td className="seatVGap"></td>

          {row1.map((k) => {
            return (
              <tr>
                
                {k}
                {col1.map((l) => {
                  return (
                    <td>
                      
                      <input
                        type="checkbox"
                        value={`${k}${l},`}
                        className="seats"
                        onChange={(e) => bookSeat(e)}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </table>
      </div>
      </div></div> :null}
          
      <>
        <br></br>
        <div className="App">
        {count!==0?<Button variant="primary" onClick={handleShow}  >
         {`Pay : ${count}` }
      
            </Button>:null}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
              <img src={props.movietitle.poster} alt={props.movietitle.title}  style={{ width: "40%", float:"right",marginRight:"auto" }}/>
                <b>{props.movietitle.moviename}</b>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
              <b>City :-</b> {selectedCity}
              {/* <br></br>
              <b>Name:- </b>
              {name} */}
              <br></br>
              <b>Email:- </b>
              {c.email}
              <br></br>
              <b>Selected Seats:-</b>
              {bookArray}
              <br></br>
              <b>Total price:-</b> {count} 
              <br></br>
              <b> Show Time:-</b> {time} 
              <br></br>
              <b>Theatre:-</b> {theatre} 
              <br></br>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={generatePDF}>
                Confirm payment
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    </>
  );
}
