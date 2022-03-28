
import './NavBar.css'   

const NavBar = () => {
    return (
    <>
        <nav className="Navbar">
            <div className="NavbarContainer"> 
            <h1 className="NavbarLogo"> React <span className="SpanLogo">JS</span> </h1>
                <div>
                <a  href="/"> Home</a>
                <a  href="/"> Productos</a>
                <a  href="/"> Contacto</a>
                <a  href="/"> Preguntas frecuentes</a>
                </div>
            </div>
            
        </nav>
    </>
    )
}





export default NavBar 