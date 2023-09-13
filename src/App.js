import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
