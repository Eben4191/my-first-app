import {useEffect, useState} from "react"
import {Promo, Card, Middle} from "./Test"
function Home (){
    const [post, setPost] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((data)=> setPost(data))
        .catch((error)=> console.log(error))
    },[])
    
    return(
        <div>
            {post.map(post =>
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )}
            <Promo/>
            <Card/>
            <Middle/>
        </div>
    );
}
export default Home;