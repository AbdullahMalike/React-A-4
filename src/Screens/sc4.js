import axios from "axios";
import { useEffect, useState } from "react";

export default function Sc4() {
 
    useEffect(()=>{
        getAPIData();
    }, []);
    let api = "https://jsonplaceholder.typicode.com/comments";

    const [data, setData] = useState([]);
    
   
    let getAPIData = () => {
        axios.get(api).then((res) => {
            console.log(res);
            setData([...res.data]);
        }).catch((err) => {
            console.log(err);
        });
    }

    
    return (
        <>
            <h1>Fourth Page</h1>
            {
                data.map((val, i) => {
                    return <div key={i}>{val.name}</div>
                })
            }
        </>
    )
}