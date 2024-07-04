import { Navbar } from "flowbite-react";
const Nav = () => {
    
    return (
        <Navbar fluid rounded className="bg-slate-900 ">
      <Navbar.Brand  href="https://i.ibb.co/1sdtL9j/Md-Sujon.png">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link  href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Projects</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    );
};

export default Nav;