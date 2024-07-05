import { Avatar, Dropdown, Navbar } from "flowbite-react";
const Nav = () => {
    
    return (
  
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img src="https://i.ibb.co/2Z4MkfJ/logoicon.png" className="mr-3 md:w-20 h-5 sm:h-9 rounded-xl" alt="Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://i.ibb.co/G35DTM4/Md-Sujon.png" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Sujonifty</span>
            <span className="block truncate text-sm font-medium">sujonifty@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link spy={true} smooth={true} href="home" active>
          Home
        </Navbar.Link>
        <Navbar.Link spy={true} smooth={true} href="about">About</Navbar.Link>
        <Navbar.Link spy={true} smooth={true} href="service">Services</Navbar.Link>
        <Navbar.Link spy={true} smooth={true} href="project">Projects</Navbar.Link>
        <Navbar.Link spy={true} smooth={true} href="contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

    );
};

export default Nav;