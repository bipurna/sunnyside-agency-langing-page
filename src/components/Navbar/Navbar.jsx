import logo from "../../images/logo.svg";
import mobileMenu from "../../images/icon-hamburger.svg";
import "./Navbar.css";

function Navbar() {    
    const openMenu=()=>{
        document.querySelector('.dropdown').classList.toggle('Active')

    }

  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu-bar">
        <img src={mobileMenu} alt="Mobile-Menu" className="ham" onClick={openMenu} />
        <div className="dropdown">
          <ul className="menu-dropdown">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
