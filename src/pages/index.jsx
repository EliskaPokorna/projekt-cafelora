import { render } from '@czechitas/render';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
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