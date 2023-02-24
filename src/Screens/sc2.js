import axios from "axios";
import { useEffect, useState } from "react";

export default function Sc2() {
 
    useEffect(()=>{
        getAPIData();
    }, []);
    let api = "https://jsonplaceholder.typicode.com/photos";

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
            <h1>Second Page</h1>
            {
                data.map((val, i) => {
                    return <div key={i}>{val.title}</div>
                })
            }
        </>
    )
}