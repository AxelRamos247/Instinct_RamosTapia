
import './NavBar.css'   
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
    <>
        <nav className="Navbar">
            <div className="NavbarContainer"> 
            <h2 className="NavbarLogo"> Instinct <span className="SpanLogo">Tienda</span> </h2>
            <div className='NavbarPages'>
                <a  href="/"> Home</a>
                <a  href="/"> Productos</a>
                <a  href="/"> Contacto</a>
                <a  href="/"> Preguntas frecuentes</a>
            </div>
            <div>
            <CartWidget/>
            </div>
            </div>
            
        </nav>
    </>
    )
}





export default NavBar 