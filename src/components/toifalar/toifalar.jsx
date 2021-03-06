import { useEffect, useState } from "react"
import "./toifalar.css"

function Toifalar() {
const [data , setData] = useState([])
const [editData , setEditData] = useState(1)

useEffect(()=>{
fetch('https://my-app-hyfob.ondigitalocean.app/categories')
.then(res=> res.json())
.then(datas => setData(datas))
},[editData])

const filData = data.filter((e)=> e.isDelete == false)
const deletLi = (e)=>{
let id = e.currentTarget.id
setData(data.filter(i=> i.id != e.currentTarget.id))

fetch('https://my-app-hyfob.ondigitalocean.app/categories',{
method: 'DELETE',
headers: {
'Content-type': 'application/json',
'Accept': 'application/json',
'Access-Control-Allow-Origin': '*'
},
body: JSON.stringify({id, isDelete:'true'})
})
.then(res=> res.json())
.then(datas => console.log(datas))
}


let elInput = document.querySelector('.modal-input')
let elSaveBtn = document.querySelector('.edidt-save__btn')
const editLi = (e)=>{
let values = data.find(i=> i.id == e.currentTarget.id)
elInput.value = values.category_name
elSaveBtn.classList.add(e.currentTarget.id)

}
const editLiSubmit = (e)=>{
let id = e.target.classList[e.target.classList.length - 1]
let inputValue = elInput.value

console.log(id, inputValue);
fetch('https://my-app-hyfob.ondigitalocean.app/categories',{
method: 'PUT',
headers: {
'Content-type': 'application/json',
'Accept': 'application/json',
'Access-Control-Allow-Origin': '*'
},
body: JSON.stringify({id, category_name:inputValue})
})
.then(res=> res.json())
.then(datas => console.log(datas))
setEditData(editData + 1)
// console.log(e.target.classList);
// console.log(e.target.classList[e.target.classList.length - 1]);
// let values = data.find(i=> i.id == e.target.classList[e.target.classList.length - 1])
// values.category_name = elInput.value
// console.log(values.category_name);
}

let modal = document.querySelector('.my-modal')
let toifaInput = document.querySelector('.toifa-input')
const modalOpen =()=>{
  modal.classList.add('my-modal-block')
}
const modalClose =()=>{
  modal.classList.remove('my-modal-block')
}
const modalAdd =()=>{
  modal.classList.remove('my-modal-block')
  fetch('https://my-app-hyfob.ondigitalocean.app/categories',{
method: 'POST',
headers: {
'Content-type': 'application/json',
'Accept': 'application/json',
'Access-Control-Allow-Origin': '*'
},
body: JSON.stringify({category_name:toifaInput.value,isDelete:"false"})
})
.then(res=> res.json())
.then(datas => console.log(datas))

toifaInput.value = ''
}
return(
<div className="tiofalar">
  <div className="table-wrap">
    <div className="table-header">
      <span>Toifalar</span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <input type="text" className="form-control modal-input" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary edidt-save__btn" onClick={editLiSubmit}
              data-bs-dismiss="modal" aria-label="Close">Save
              changes</button>
          </div>
        </div>
      </div>
    </div>

    <ul className="table-list">
      {filData && filData.map((e,i)=>(
      <li className="table-list-item" id={e.id} key={i}>
        <span>{e.category_name}</span>

        <div>
          <button type="button" className="edit-btn" onClick={editLi} id={e.id} data-bs-toggle="modal"
            data-bs-target="#exampleModal"><i className="bi bi-pencil-fill"></i></button>
          <button className="delete-btn" onClick={deletLi} id={e.id}><i className="bi bi-trash-fill"></i></button>
        </div>
      </li>
      ))}

    </ul>
  </div>
  <div className="add">



    <button className="btn-qoshish" onClick={modalOpen}>
      Qo'shish
    </button>

    <div className="my-modal">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" onClick={modalClose} className="btn btn-danger" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <label htmlFor="qoshish">Kategoriya nomi</label>
      <input type="text" className="form-control toifa-input" />
      <div className="d-flex justify-content-between mt-3">
        <span>holat</span>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked='false' />
        </div>
      </div>

      <div className=" d-flex justify-content-between mt-5">
        <button type="button" onClick={modalClose} className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" onClick={modalAdd} className="btn btn-primary">Add</button>
      </div>
    </div>

  </div>

</div>
)
}
export default Toifalar;