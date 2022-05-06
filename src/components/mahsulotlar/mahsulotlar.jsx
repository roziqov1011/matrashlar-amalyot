import { useEffect, useState } from "react"
import "./mahsulotlar.css"

function Mahsulotlar() {
  const [data , setData] = useState([])
  const [editData , setEditData] = useState(1)
  
  useEffect(()=>{
  fetch('https://my-app-hyfob.ondigitalocean.app/products')
  .then(res=> res.json())
  .then(datas => setData(datas))
  },[editData])
  
  const filData = data.filter((e)=> e.isDelete == false)
  const deletLi = (e)=>{
      let id  = e.currentTarget.id
  setData(data.filter(i=> i.id != e.currentTarget.id))
  
  fetch('https://my-app-hyfob.ondigitalocean.app/products',{
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

  }
  return(
  <>
      <div className="table-wrap">
          <div className="table-header">
              <span>Mahsulot nomlari</span>
              <span>Toifalar</span>
              <span>Narxi</span>
              <span>Yuklama</span>
              <span>Razmeri</span>
              <span>Status</span>
              <span></span>
              <span></span>
          </div>
          {/* =============== */}
  
          <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
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
  
          {/* ============== */}
          <ul className="table-list">
              {filData && filData.map((e,i)=>(
              <li className="table-list-item" id={e.id} key={i}>
                  <span>{e.product_name}</span>
                  <span>{e.category_name}</span>
                  <span>{e.product_price} so'm</span>
                  <span>{e.product_weigth[0].value}</span>
                  <span>{e.product_size[0].value}</span>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  checked='false'/>
                </div>
                  <div>
                      <button type="button" className="edit-btn" onClick={editLi} id={e.id} data-bs-toggle="modal"
                          data-bs-target="#exampleModal"><i className="bi bi-pencil-fill"></i></button>
                      <button className="delete-btn" onClick={deletLi} id={e.id}><i
                              className="bi bi-trash-fill"></i></button>
                  </div>
              </li>
              ))}
  
          </ul>
      </div>
  </>
  )
}
export default Mahsulotlar;