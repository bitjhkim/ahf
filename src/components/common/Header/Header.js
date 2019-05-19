import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink 
} from 'reactstrap';

// const Header = () => (
//   <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
//     <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Agens Hub</a>
//     <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
//     <ul className="navbar-nav px-3">
//         <li className="nav-item text-nowrap">
//         <a className="nav-link" href="#">Sign out</a>
//         </li>
//     </ul>
//   </nav>
// );

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Agens Hub</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">connection</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/schema/">schema</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/model/">model</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="https://github.com/bitnine-oss">GitHub</NavLink>
              </NavItem> */}
            </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;
