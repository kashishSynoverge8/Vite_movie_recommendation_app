import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Loginpage() {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const[verifydetails,setVarifydetails]=useState([])
useEffect(()=>{
   setVarifydetails(JSON.parse(localStorage.getItem(`usersignUpDetails`)));
 },[`usersignUpDetails`])

  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("Logined details",JSON.stringify(data));
    verifydetails.map((items)=>{
    if((data.email === items.email)&& (data.Password === items.password)) {
      navigate(`/Locationpage`);
    } else {
      setErrorMessage("Invalid email or Password");
    }
})

  };

  return (
    <div className="LogInPage  ">
      <div
        className=" d-flex justify-content-center LogInPage  "
        // style={{ backgroundColor: "#cccccc" }}
      >
        <div className="p-3 rounded bg-success bg-opacity-25 mt-5 w-50 mb-5 " style={{boxShadow: "10px 10px #888888"}}>
          <br></br>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="App">Login yourself</h1>
            <br></br>
            <br></br>
            <div className="form-group">
              <label
                htmlFor="email"
                className="d-flex justify-content-center"
              ></label>
              <input
                type="email"
                className="form-control App"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name=" email"
                placeholder="Enter email"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <small id="small" className="form-text text-danger">
                  Please enter your mail address
                </small>
              )}
            </div>
            <br></br>
            <div className="form-group">
              <label
                htmlFor="password"
                className="d-flex justify-content-center"
              ></label>
              <input
                type="password"
                className="form-control App"
                id="exampleInputPassword1"
                placeholder="Password"
                {...register("Password", { required: true })}
              />
              {errors.email?.type === "required" && (
                <small id="small" className="form-text text-danger">
                  Enter Password
                </small>
              )}
            </div>
            <br></br>

            <div>
              <Link to="/Signuppage">
                <a
                  href="#!"
                  className="text-body d-flex justify-content-center w-105"
                >
                  Not a user, register yourself?
                </a>
              </Link>
            </div>
            <br></br>
            <div className="d-flex justify-content-center">
              <div>
                {/* <Link to="/Locationpage"> */}
                <button type="submit" className=" btn btn-primary">
                  Submit
                </button>
                <br></br>
                <br></br>
                <br></br>
                {errorMessage && <div className="p-3 mb-2 bg-info text-white"><b>{errorMessage}</b></div>}
                {/* </Link> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
