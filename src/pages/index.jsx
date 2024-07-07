import { render } from '@czechitas/render';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';
import '../global.css';
import './index.css';

const response = await fetch("http://localhost:4000/api/drinks")
const json = await response.json()
const cafelora = json.data

console.log(cafelora)

/* OBJEDNÁVACÍ TLAČÍTKO */
const orderForms = document.querySelectorAll('.drink__controls');

orderForms.forEach(form => {
  const orderButton = form.querySelector('.order-btn');
  const drinkId = form.dataset.id;
    
  orderButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const drink = cafelora.find(d => d.id === drinkId);
    const currentOrderedState = drink.ordered;

    const data = [{ op: 'replace', path: '/ordered', value: !currentOrderedState }]

    const response2 = await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    
    const json2 = await response2.json()
    console.log(json2)

    window.location.reload()
  });
});



document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
    <main>
      <Banner />
      <Menu drinks={cafelora} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

const navBtn = document.querySelector(".nav-btn")
const rolloutNav = document.querySelector(".rollout-nav")
const navLinks = document.querySelectorAll(".rollout-nav a")

navBtn.addEventListener("click", () => {
  rolloutNav.classList.toggle("nav-closed")
})

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    rolloutNav.classList.add("nav-closed");
  });
});