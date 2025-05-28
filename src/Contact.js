import { useContext } from "react";
import { UserContext } from "./UserContext";
import   {useState} from "react";
function Contact (){
    const {username}=useContext(UserContext);
    const[value, setValue]=useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password:""
    })
    const handle = (e) => {
        const { id, value } = e.target;
        setValue((prevData) => ({
          ...prevData,
          [id]: value
        }));
      };

    const submit =(e)=>{
        e.preventDefault();
            console.log("submitted succesfully", value)
    }
    return(
        <div>
            <div className="contact-header"><h1>This is the contact me section</h1></div>
        <div className="contact-container">
            <div className="contact">
            <h2>welcome {username}</h2>
            <img src ={require("./Images/passport.jpg")}
            height={200}
            width = {200}
            alt="CEO" />
            <p>This is the CEO of Bukola international groups of company. She is currently in Aroje for the meantime.</p>
            </div>
            <div className="contact">
                <h2>fill the Form below to join us</h2>
                <form onSubmit={submit}>
                    <div className="form-field">
                    <label htmlFor ="FirstName" style={{display:"block", marginBottom:"4px"}}>
                     FirstName
                     </label>
                    <input
                    value={value.FirstName}
                    onChange={handle}
                    type="text"
                    id="FirstName"
                    placeholder="FirstName"
                    />
                    </div>
                    <div className="form-field">
                    <label htmlFor ="LastName" style={{display:"block", marginBottom:"4px"}} >
                     LastName
                     </label>
                    <input
                    value={value.LastName}
                    onChange={handle}
                    type="text"
                    id="LastName"
                    placeholder="LastName"
                    />
                    </div>
                    <div className="form-field">
                    <label htmlFor ="Email"  style={{ display: 'block', marginBottom: '4px' }}>
                       Email
                       </label>
                    <input
                    value={value.Email}
                    onChange={handle}
                    type="text"
                    id="Email"
                    placeholder="Email"
                    />
                    </div>
                    <div className="form-field">
                    <label htmlFor ="Password" style={{  marginBottom: '4px' }}>
                     Password
                     </label>
                    <input
                    value={value.Password}
                    onChange={handle}
                    type="password"
                    id="Password"
                    />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        </div>
    )
}
export default Contact;