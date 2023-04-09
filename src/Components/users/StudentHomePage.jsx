import React, { useEffect, useState } from "react";
import "../general.css";
import logo from "../assets/logo.png";
import Loading from "../Pages/Loading";
// import { useNavigate } from "react-router-dom";
import navigation from "../Auth/Navigation";

const StudentHomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const navigation = useNavigate();

  const year = () => {
    let VarDate = new Date().getFullYear();
    return VarDate;
  };

  useEffect(() => {
    if (sessionStorage.getItem("Username") === null) {
      navigation("/");
    } else {
      sessionStorage.setItem("MainHome",sessionStorage.getItem("MainHome"));
    }
  }, []);

  const Student_Name = () => {
    return sessionStorage.getItem("Username");
  };

  const Logout = () => {
    setIsLoading(true);

    sessionStorage.clear();
    localStorage.clear();
    navigation("/");

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const make_a_request = () => {
    setIsLoading(true);

    navigation("/Student-Home/MakeRequest");

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const Get_Status = (StatusType) => {
    sessionStorage.setItem("StatusType", StatusType);
    sessionStorage.setItem("MainHome", "Student-Home");
    navigation("/StatusRequest");
  };

  return (
    <div className="main">
      {isLoading && <Loading />}
      <div className="Background">
        <div className="Header">
          <img src={logo} alt="University Logo" className="Logo" />
          <div className="title">
            Welcome to Student Document Approval System{" "}
          </div>
        </div>
        <div className="Main-Background">
          <div className="Content-Background">
            <div className="welcome-with-Logout-button">
              <div className="Welcome-Name"> Welcome {Student_Name()}</div>

              <button className="btn btn-danger" onClick={Logout}>
                Logout
              </button>
            </div>

            <div className="buttons-sets-home">
              <button onClick={make_a_request} className="buttons-hover">
                Make a Request
              </button>

              <button
                className="buttons-hover"
                onClick={() => Get_Status("Ongoing Requests")}
              >
                Ongoing Requests <i className="Status Color-Green"></i>
              </button>

              <button
                className="buttons-hover"
                onClick={() => Get_Status("Approved Requests")}
              >
                Approved Requests<i className="Status Color-Blue"></i>
              </button>

              <button
                className="buttons-hover"
                onClick={() => Get_Status("Rejected Requests")}
              >
                Rejected Requests<i className="Status Color-Red"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="Footer">© Copyright {year()} University of Jaffna.</div>
      </div>
    </div>
  );
};

export default StudentHomePage;
