import { render } from '@czechitas/render';
import { Header } from '../components/Header/Header';
import { Order } from '../components/Order/Order';
import { Footer } from '../components/Footer/Footer';
import '../global.css';
import './index.css';
import './order.css';

const response = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image');
const json = await response.json();
const items = json.data;

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={true} />

      <main className="order">
        <div className="container order__content">
          <h1>Vaše objedávnka</h1>
          <Order items={items} />
        </div>
      </main>

      <Footer />
    </div>
  </div>
);
