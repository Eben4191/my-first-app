import {useContext, useEffect} from "react";
import { UserContext } from "./UserContext";
const People = [
    {
    id:"1",
    Name:"Peace Gabriel",
    Age:20,
    Course: "Nursing",
    description: "my name is peace I am currently a LAUTECH PDS my goal is to become a Nurse in future",
},
{
    id:"2",
    Name:"Ebenezer",
    Age:21,
    Course:"Cyber security",
    description: "my name is Eben I am currently a LAUTECH student my goal is to become bless and obey God."
},
{
    id:"3",
    Name:"Omotayo",
    Age:21,
    Course:"Cyber security",
    description:"my name is Omotayo I am a frontend dev"
},
{
    id:"4",
    Name:"Dolapo",
    Age:20,
    Course:"Nursing",
    description:"my name is dolapo I am a nursing student"
}

];
function About(){
    const {username, setUsername} = useContext(UserContext);
    useEffect( ()=> {
        setUsername("Ebenezer" ``)}, [] );
    const cyber = People.filter(person=>
        person.Course=== "Nursing"
    )
    const item = cyber.map(person=>
        <li key={person.id}>
            <b>Name:</b> {person.Name}<br/>
          <b>Age:</b> {person.Age}<br/>
           <b>Course:</b> {person.Course}<br/>
          <b>description:</b> {person.description}
        </li>
    )
    return(
        <div>
            <h1>Welcome {username}</h1>
            <img src={require("./Images/background.jpg.jpg")}
            height={200}
            alt ="background" />
            <h2>This is data shows only student studying cyber security yes it Images</h2>
            <ul>{item}</ul>
        </div>
    )
}
export default About;