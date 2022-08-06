import React from 'react'
import '../general.css';
import './CreateDocumentFlow.css';
import logo from '../assets/logo.png';


const MakeRequest = () => {
    const year = ()=>{
        let VarDate = new Date().getFullYear();

        return VarDate;
    }
    const Staff_Name = () =>{
        return "Staff";
    } 
    
    const Logout = ()=>{
        window.location.href='/'
    }

    const Back = ()=>{
        window.location.href='/StaffHome'
    }

    const Path = (setPathName)=>{
        window.location.href='/StaffHome/SetWorkFlow/Path'
        var pathName = setPathName;
        sessionStorage.setItem("PathName",pathName)

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
                        <div className="Welcome-Name"> Welcome {Staff_Name()}</div>
                        <button className="logout-button buttons-hover" onClick={Logout}>Logout</button>
                    </div>
                    <button className='Home-Button buttons-hover' onClick={Back}> Home</button>

                    <div className="Request-Background a"><span className='text'> Exam Reshedule</span> 
                        <button className='Update-Modify-Button A buttons-hover'>Update/Modify</button> 
                            <button onClick={()=>Path("Exam Reshedule")} className='Set-Button A buttons-hover'>Set</button>
                    
                    </div>
                    <div className="Request-Background b"><span className='text'> Exam Re-attempt</span> <button className='Update-Modify-Button A buttons-hover'>Update/Modify</button> <button className='Set-Button A buttons-hover'>Set</button></div>
                    <div className="Request-Background c"><span className='text'> Labratory Session Reshedule</span> <button className='Update-Modify-Button A buttons-hover'>Update/Modify</button> <button className='Set-Button A buttons-hover'>Set</button></div>
                    <div className="Request-Background d"><span className='text'> Requesting Studentship Confirmation Letter</span> <button className='Update-Modify-Button A buttons-hover'>Update/Modify</button> <button className='Set-Button A buttons-hover'>Set</button></div>
                    <div className="Request-Background e"><span className='text'> Requesting Progress Report</span> <button className='Update-Modify-Button A buttons-hover'>Update/Modify</button> <button className='Set-Button A buttons-hover'>Set</button></div>
                    <div className="Request-Background f"><span className='text'> Requesting for New Student Record Book</span> <button className='Update-Modify-Button A buttons-hover'>Update/Modify</button> <button className='Set-Button A buttons-hover'>Set</button></div>
                    <div className="Request-Background g"><span className='text'> Requesting for New Student ID card</span> <button className='Update-Modify-Button A buttons-hover'>Update/Modify</button> <button className='Set-Button A buttons-hover'>Set</button></div>
                    


                </div>
            </div>

            <div className='Footer'>© Copyright {year()} University of Jaffna.</div>
        </div>
        
    </div>
  )
}

export default MakeRequest
