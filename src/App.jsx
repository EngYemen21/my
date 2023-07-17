import { ButtonFooter } from "./Components/ButtonFooter/ButtonFooter";
import { Contect } from "./Components/Contect/Contect";
import { Experties } from "./Components/Experties/Experties";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { Portfilo } from "./Components/Portfilo/Portfilo";
import { Skill } from "./Components/Skilles/Skill";
import { Work } from "./Components/Work/Work";

import css from "./styles/app.module.scss";
const App = () => {
  return (
    <div className={`bg-primary background`} style={{ color:"white" }}>
      <Header />
      <Hero />
      <Experties />
      {/* <Work/> */}
      <Skill/>
      <Portfilo/>
      {/* <Contect/> */}
      <Footer/>
      <ButtonFooter/>
    </div>
  );
};

export default App;
