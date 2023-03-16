import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function Signuppage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signUpDetails, setSignUpDetails] = useState(() => {
    const savedDetails = localStorage.getItem("usersignUpDetails");
    return savedDetails ? JSON.parse(savedDetails) : [];
  });

  const formData = (data) => {
    // console.log(data);
    setSignUpDetails([...signUpDetails, data]);
    // console.log(signUpDetails)
  };
  useEffect(() => {
    try {
      localStorage.setItem("usersignUpDetails", JSON.stringify(signUpDetails));
    } catch (error) {
      console.error(error);
    }
  }, [signUpDetails]);

  return (
    <>
      <div className="">
        <div
          className=" d-flex justify-content-center   "
          style={{ backgroundColor: "#cccccc" }}
        >
          <div className="Signuppage p-3 rounded bg-success bg-opacity-25 mt-5 w-50 mb-5">
            <br></br>
            <form onSubmit={handleSubmit(formData)}>
              <h1 className="d-flex justify-content-center">Sign Up page</h1>
              <div className="form-group">
                <label htmlFor="name" className="d-flex justify-content right">
                  <b>First Name</b>
                </label>
                <input
                  type="name"
                  className="form-control App"
                  id="exampleInputname"
                  aria-describedby="nameHelp"
                  name=" name"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <small id="small" className="form-text text-danger">
                    Please enter First name
                  </small>
                )}
              </div>
              <div className="form-group">
                <label
                  htmlFor="surname"
                  className="d-flex justify-content right"
                >
                  <b>Last Name</b>
                </label>
                <input
                  type="surname"
                  className="form-control App"
                  id="exampleInputSurname"
                  aria-describedby="SurnameHelp"
                  name=" surname"
                  {...register("surname", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <small id="small" className="form-text text-danger">
                    Please enter your Last name
                  </small>
                )}
              </div>
              <div className="form-group">
                <label className="h6" htmlFor="phone">
                  <b>Phone Number </b>
                  <span className="text-warning">*</span>
                </label>
                <input
                  type="number"
                  className="form-control App"
                  id="phone"
                  {...register("phone", {
                    required: true,
                    // pattern: /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,
                    pattern:/^[0-9]{10}(?![^\W_]*[^\W_])$/,
                  })}
                />
                {errors.phone?.type === "required" && (
                  <small id="Small" className="form-text text-danger">
                    Please Enter Your Phone Number
                  </small>
                )}
                {errors.phone?.type === "pattern" && (
                  <small id="Small" className="form-text text-danger">
                    Please Enter Valid Phone Number
                  </small>
                )
            
                
                }{" "}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="d-flex justify-content-right">
                  {" "}
                  <b> Email</b>
                </label>
                <input
                  type="email"
                  className="form-control App"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name=" email"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <small id="small" className="form-text text-danger">
                    Please enter your mail address
                  </small>
                )}
              </div>
              <div className="form-group">
                {" "}
                <label className="h6" htmlFor="password">
                  <b>Password </b>
                  <span className="text-warning">*</span>
                </label>{" "}
                <input
                  type="password"
                  className="form-control mb-1 App"
                  id="password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                  })}
                />{" "}
                {errors.password?.type === "required" && (
                  <small id="Small" className="form-text text-danger">
                    Please Enter Your Password
                  </small>
                )}{" "}
                {errors.password?.type === "pattern" && (
                  <small id="Small" className="form-text text-danger">
                    Password should contain 1 lowercase, 1 uppercase, at least 1
                    number and 8 letters{" "}
                  </small>
                )}{" "}
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="d-flex justify-content-right"
                >
                  {" "}
                  <b>Gender</b>
                </label>
                <input type="radio" id="gender" name="gender" value="male" />{" "}
                <b>Male </b>
                <input type="radio" id="gender" name="gender" value="female" />
                <b> Female </b>
              </div>
              <div>
                <button type="submit" className=" btn btn-primary">
                  Submit
                </button>
              </div>
              <div className="col-md-15 text-right" style={{textAlign: "right"}}>
                <Link to="/">
                  <button className=" btn btn-primary">Login Now</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
