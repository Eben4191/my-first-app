
    const People = [{
        id:"1",
        Name:"Peace Gabriel",
        Age:20,
        Course: "Nursing",
        discription: "my name is peace I am currently a LAUTECH PDS I goal is to become a Nurse in future",
    },
    {
        id:"2",
        Name:"Ebenezer",
        Age:21,
        Course:"Cyber security",
        discription: "my name is Eben I am currently a LAUTECH student my goal is to become bless and obey God."
    }
    ];
 export function List(){
    const item = People.map(person=>
        <li>{person}</li> )
    return(<ul>{item}</ul>);
}
