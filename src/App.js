import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import Contact from "./kontakt/Contact";
import Footer from "./footer/Footer";
import Main from "./main/Main";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
