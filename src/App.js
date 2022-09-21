import AdministrarReceta from './components/views/receta/AdministrarReceta';
import CrearReceta from './components/views/receta/CrearReceta';
import EditarReceta from './components/views/receta/EditarReceta';
import Home from './components/views/Home';
import Error from './components/views/Error';
import Detalle from './components/views/Detalle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/common/Navbar';
import Footer from './components/common/Footer';
import './app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/views/receta/Login'
function App() {
    return (
        <div className="body">
            <BrowserRouter>
                <Menu></Menu>
                <Routes>
                    <Route exact path="/" element={<Home></Home>}></Route>
                    <Route exact path="/login" element={<Login></Login>}>
                    </Route>
                    <Route
                        exact
                        path="/administrar"
                        element={<AdministrarReceta></AdministrarReceta>}
                    ></Route>
                    <Route
                        exact
                        path="/administrar/crear"
                        element={<CrearReceta></CrearReceta>}
                    ></Route>
                    <Route
                        exact
                        path="/administrar/editar/:id"
                        element={<EditarReceta></EditarReceta>}
                    ></Route>
                    <Route exact path="*" element={<Error></Error>}></Route>
                    <Route
                        exact
                        path="/detalle/:id"
                        element={<Detalle></Detalle>}
                    ></Route>
                    <Route
                    exact
                    path= '/error'
                    element={<Error></Error>}></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
