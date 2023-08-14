import { ButtonFooter } from "./Components/ButtonFooter/ButtonFooter";

import { Experties } from "./Components/Experties/Experties";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { Portfilo } from "./Components/Portfilo/Portfilo";
import { Skill } from "./Components/Skilles/Skill";
import global from './styles/global.scss';
import css from "./styles/app.module.scss";

const App = () => {
  return (
    <div className={`bg-primary background ${css.back}`} style={{ color: "white" }}>
      <Header />
      <Hero />
      <Experties />

      <Skill />
      <Portfilo />

      <Footer />
      <ButtonFooter />
    </div>
  );
};

export default App;
