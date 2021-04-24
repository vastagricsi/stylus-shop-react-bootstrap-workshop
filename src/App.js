import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/styles/main.scss"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ItemDetailPage from "./components/Pages/Catalog/ItemDetailPage";
import ItemListPage from "./components/Pages/Catalog/ItemListPage";
import LoginPage from "./components/Pages/User/LoginPage";
import RegisterPage from "./components/Pages/User/RegisterPage";
import CheckOutPage from "./components/Pages/Order/CheckOutPage";
import PasswordResetPage from "./components/Pages/User/PasswordResetPage";
import Home from "./components/Pages/Home";

function App() {
    return (
        <BrowserRouter>
            <header>
                <Navbar/>
            </header>
            <section className="content">
                <div className="container">
                    <Switch>
                        <Route path="/categories/:category/:subcategory" component={ItemListPage}/>
                        <Route path="/categories/:category" component={ItemListPage}/>
                        <Route path="/product/:product" component={ItemDetailPage}/>
                        <Route path="/checkout" component={CheckOutPage}/>

                        <Route path="/login" component={LoginPage}/>
                        <Route path="/register" component={RegisterPage}/>
                        <Route path="/reset-password" component={PasswordResetPage}/>

                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
            </section>
            <footer>
                <Footer/>
            </footer>
        </BrowserRouter>
    );
}

export default App;
