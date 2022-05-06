import { useEffect, useState } from "react";
import "./customers.css"

function Customers() {
    const [data , setData] = useState([])

    useEffect(()=>{
        fetch('https://my-app-hyfob.ondigitalocean.app/customers')
        .then(res=> res.json())
        .then(datas => setData(datas))
    },[])

    const deletLi = (e)=>{
        setData(data.filter(i=> i.id != e.currentTarget.id))
    }
    return(
        <>
        <div className="table-wrap">
        <div className="table-header">
            <span>ID</span>
            <span>sana</span>
            <span>telefon raqami</span>
            <span>Qayta aloqa</span>
            <span></span>
        </div>
        <ul className="table-list">
            <li className="table-list-item">
                <span>1</span>
                <span>12:13-12.05.2021</span>
                <span>90 206 06 90</span>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  checked='false'/>
                </div>
                <button className="delete-btn" onClick={deletLi} id='1'><i className="bi bi-trash-fill"></i></button>
            </li>
            {data &&  data.map((e,i)=>(
                <li className="table-list-item" id={e.id} key={i}>
                <span>{e.id}</span>
                <span>12:13-12.05.2021</span>
                <span>{e.phone}</span>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  checked='false'/>
                </div>
                <button className="delete-btn" onClick={deletLi} id={e.id}><i className="bi bi-trash-fill"></i></button>
            </li>
            ))}

        </ul>
    </div></>
    )
}
export default Customers;