import React, { useEffect, useState } from "react";
import JsonData from "../movie.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Theatreselection from "./Theatreselection";
import { FaSearch } from "react-icons/fa";

function Dashboardpage() {
  let { selectedCity } = useParams();
  const [movie, setMovie] = useState("");
  const [data, setData] = useState([]);
  const [sm, setSm] = useState({});

  const [showResults, setShowResults] = useState(false);
  function onClick(movieName,releaseDate,theatre,selectedCity,poster) {
    showResults ? setShowResults(false) : setShowResults(true);
    setSm((prevVal) => ({
      ...prevVal,
       moviename: movieName,
        Released_Date:releaseDate,
        theatre:theatre,
        selectedCity:selectedCity,
        poster:poster,
    }));
  }
  useEffect(() => {
    setData(JsonData.filter((movie) => movie.City.includes(selectedCity)));
  }, []);

  useEffect(() => {
    if (movie.length > 0) {
      setData(
        JsonData.filter(
          (movieObj) =>
            movieObj.City.includes(selectedCity) &&
            movieObj.title.toLowerCase().includes(movie)
        )
      );
    } else {
      setData(
        JsonData.filter((movieObj) => movieObj.City.includes(selectedCity))
      );
    }
  }, [movie]);

  return (
    <>
   
    <div>
      
      {showResults ? <Theatreselection movietitle={sm} setShowResults={setShowResults}/> 
    : 
    
    <div className="bottle ">

    <br></br>
    <div className="d-flex ">
   <h3 className="me-auto"> <span>Filter or Search your movie here..</span></h3>
    <br></br>

    <input
      type="text"
      name="movie"
      id="movie"
      className="movie "
      placeholder="Filter Movie"
      style={{ fontSize: "18px", background: " #C0C0C0" ,position: "",top: "0",right: "0", }}
      onChange={(e) => setMovie(e.target.value)} />
      <button style={{ position: "",top: "0",right: "0", }}
        className=" btn btn-primary text align-centre searchMovie"
        onClick={() => {
          console.log("hello");
        } }
      >       <FaSearch/>

        {/* filter movie */}
      </button>
      </div>
    <br></br>
   
    <br></br>
    <div>
      <table border={1} className="container-fluid">
        <thead>
          <tr>
            <th>Movie name</th>
            <th>Released date</th>
            <th>Actors</th>
            <th style={{ padding: "1px", width: "30%" }}> Movie Poster</th>
            <th> Book Now</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.title}</td>
                <td>{item.releaseDate}</td>
                <td>{item.actors}</td>
                <td>
                  <img src={item.poster} style={{ width: "15%" }} />
                </td>
                <td>
                  <div>
                    <button
                      className="btn btn-primary"
                      onClick={() => onClick(item.title, item.releaseDate, item.theatre, selectedCity,item.poster)}
                    >
                      Book Now
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
    }
    </div>
    
    </> 
  );
}

export default Dashboardpage;
