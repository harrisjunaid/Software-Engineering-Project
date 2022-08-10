import React from 'react';
import '../general.css';
import './StudentHomePage.css';
import logo from '../assets/logo.png';


const StudentHomePage = () => {
 
    const year = ()=>{
        let VarDate = new Date().getFullYear();
        return VarDate;
    }

    const Student_Name = ()=>{
        return  sessionStorage.getItem("Username")    }

    const Logout = ()=>{
        window.location.href='/'
    }

    const make_a_request = ()=>{     
        window.location.href='/StudentHome/MakeRequest'
    }

    const Get_Status = (StatusType)=>{
        sessionStorage.setItem("StatusType",StatusType)
        sessionStorage.setItem("MainHome","StudentHome")
        window.location.href='/StatusRequest'
    }
    
  return (
    <div className='main'>
        <div className='Background'>
            <div className='Header'>
                <img  src={logo} alt="University Logo"  className='Logo'/>
                <div className='title'>Welcome to Student Document Approval System </div> 
            </div>
            <div className='Main-Background'>
                <div className="Content-Background">
                    <div className="welcome-with-Logout-button">
                        <div className="Welcome-Name"> Welcome {Student_Name()}</div>
                        <button className="logout-button buttons-hover" onClick={Logout}>Logout</button>
                    </div>

                    <button onClick={make_a_request} className="buttons-hover Buttons-Background Buttton-text Make-a-Request-Button">Make a Request</button>
                    <button className="buttons-hover Buttons-Background Buttton-text Ongoing-Request-Button" onClick={()=>Get_Status("Ongoing Requests")}>Ongoing Requests <i className='Status Color-Green'></i></button>
                    <button className="buttons-hover Buttons-Background Buttton-text Approved-Request-Button" onClick={()=>Get_Status("Approved Requests")}>Approved Requests<i className='Status Color-Blue'></i></button>
                    <button className="buttons-hover Buttons-Background Buttton-text Rejected-Request-Button" onClick={()=>Get_Status("Rejected Requests")}>Rejected Requests<i className='Status Color-Red'></i></button>
                    
                </div>
            </div>

            <div className='Footer'>© Copyright {year()} University of Jaffna.</div>
        </div>
        
    </div>
  )
}

export default StudentHomePage
