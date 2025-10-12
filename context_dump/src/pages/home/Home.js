=== File: src/pages/home/Home.js ===
=== Content ===
import './Home.css';
import Community from '../../components/home/Community';
import Contact from '../../components/home/Contact';
import Intro from '../../components/home/Intro';
import Slideshow from '../../components/home/Slideshow';
import MenuAll from '../../components/menu/MenuAll';




export default function Home() {


  return (
    <>
      <Intro />
      <Slideshow />
      <MenuAll />
      <Community />
      <Contact />

    </>
  )
}
=== End of src/pages/home/Home.js ===

