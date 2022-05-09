import { useEffect, useState } from "react";
import "./buyurtmalar.css"

function Buyurtmalar() {
const [dates, setDates] = useState([])

useEffect(()=>{
fetch('https://my-app-hyfob.ondigitalocean.app/orders')
.then(res=> res.json())
.then(data => setDates(data))
})
return(
<>
    <div className="table-wrap">
        <div className="table-header">
            <span>ID</span>
            <span>ismi</span>
            <span>telefon raqami</span>
            <span>mahsulot nomlari</span>
            <span>miqdor</span>
            <span>Qayta aloqa</span>
        </div>
        <ul className="table-list">
            <li>
                <span>1</span>
                <span>Jenny Wilson</span>
                <span>+998 90 123 45 67</span>
                <span>Ortopedik Eko matras</span>
                <span>4</span>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked='false' />
                </div>
            </li>
            {dates && dates.map((e,i)=>(
            <li key={i}>
                <span>{e.id}</span>
                <span>{e.name}</span>
                <span>{e.phone_number}</span>
                <span>{e.product_name}</span>
                <span>{e.product_qountity}</span>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div>
            </li>
            ))}
        </ul>
    </div>
    
</>
)
}
export default Buyurtmalar;