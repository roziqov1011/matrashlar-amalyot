import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Buyurtmalar from './components/buyurtmalar/buyurtmalar';
import Customers from './components/customers/customers';
import Mahsulotlar from './components/mahsulotlar/mahsulotlar';
import Manzil from './components/manzil/manzil';
import Texnologiyalar from './components/texnologiyalar/texnologiyalar';
import Toifalar from './components/toifalar/toifalar';
import logo from './assets/img/logo.svg'

function App() {
return (
<div className='wrapper'>
  <div className="header">
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <div className="input-wrap">
    <input className='form-control' type="text" />
    <i className="bi bi-search input-search"></i>
    </div>
    <div className="account">
        <i className="bi bi-person"></i>
        <p>John Doe</p>
    </div>
  </div>
  <div className="main">
   <div className="navbar-wrap">
   <div className="navbar">
      <Link to="/"><i className="bi bi-house-door-fill"></i>Buyurtmalar</Link>
      <Link to="customers"><i className="bi bi-person-fill"></i>Customers</Link>
      <Link to="toifalar"><i className="bi bi-bookmark-fill"></i>Toifalar</Link>
      <Link to="mahsulotlar"><i className="bi bi-cart-fill"></i>Mahsulotlar</Link>
      <Link to="texnologiyalar"><i className="bi bi-gear-fill"></i>Texnologiyalar</Link>
      <Link to="manzil"><i className="bi bi-geo-alt-fill"></i>Manzil</Link>
    </div>
   </div>
    <Switch>
      <Route path="/" component={Buyurtmalar} exact></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/mahsulotlar" component={Mahsulotlar}></Route>
      <Route path="/manzil" component={Manzil}></Route>
      <Route path="/texnologiyalar" component={Texnologiyalar}></Route>
      <Route path="/toifalar" component={Toifalar}></Route>
    </Switch>
  </div>
</div>
);
}

export default App;