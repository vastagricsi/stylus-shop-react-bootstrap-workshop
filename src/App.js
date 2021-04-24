import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/styles/main.scss"

function App() {
    return (
        <div className="App">
                <header>
                    <Navbar/>
                </header>
                <section className="content">
                    <p>content</p>
                </section>
                <footer>
                    <Footer/>
                </footer>
        </div>
    );
}

export default App;
