import React, {Component} from 'react';
// {} allow us to import and use something without having to use its namespace
import {
    collapse, //responsive navbar
    Navbar,
    NavbarToggler,
    NavBrand,
    Nav,
    NavItem,
    NavLink,
    Container, // bootstrap container to move everything to middle
    NavbarBrand,
    Collapse
} from 'reactstrap';


class AppNavBar extends Component{
  state = {
    isOpen: false
  }

  // Instead of binding 'this' for all our custom functions, we can use arrow function to  get the same thing done without the need to bind.
  toggle = () => {
    this.setState ({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        {/*dark navbar and  expand to trigger responsiveness on small screen, margin of 5 below navbar */}
        <Navbar color="dark" dark expand="sm" className="mb-5">
          {/* to have everything in middle */} 
          <Container>
            <NavbarBrand href="/">Exercise Tracker</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Exercises</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/create">Create Exercise Log</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/user">Create User</NavLink>
                </NavItem>
              </Nav>
            </Collapse>


          </Container>

        </Navbar>
      </div>
    )
  }


}

export default AppNavBar;

