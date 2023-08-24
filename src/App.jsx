import Skills from "./components/Skills/Skills";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import css from "./styles/app.module.scss";
import Work from "./components/Work/Work";
import Project from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
const App = () => {
  return (
    <div div className={`bg-primary ${css.container} `}>
      <Header />
      <Profile />
      <Work />
      <Skills />
      <Education />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
