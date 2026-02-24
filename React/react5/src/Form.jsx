 import {useState} from "react";

export default function Form() {
   let [formData, setFormData] = useState({
    fullName:"",
    userName:"",
    password:"",
   });
    
     
    let handleInputChange = (event) => {
       
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value};
        });
    };

         let handleSubmit = (event) => {
            event.preventDefault();
            console.log(formData);
            setFormData({
             fullName:"",
              userName:"",
              password:"",
            });
         };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlfor="fullname">Full name</label>
            <input placeholder="enter fullName" type="text" value={formData.fullName} id="fullname" 
            name="fullName" onChange={handleInputChange}/>
           
             <br></br>
             <br></br>
        
            <label htmlfor="username">User name</label>
            <input placeholder="enter username" type="text" value={formData.userName} id="username" 
            name="userName"  onChange={handleInputChange}/>
            
            <br></br>
            <br></br> 

            <label htmlfor="password">Password</label>
            <input placeholder="enter password" type="password" value={formData.password} id="password" 
            name="password"  onChange={handleInputChange}/>
            <button>Submit</button>
            
        </form>
    );
}