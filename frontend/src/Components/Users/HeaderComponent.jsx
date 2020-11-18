import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';

export default function HeaderComponent() {
    return (
        <div>
            <Navbar color="dark" dark expand="md">
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  About us
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem href="#">
                    Newletters
                  </DropdownItem>
                  <DropdownItem href="#">
                    Finanicals
                  </DropdownItem>
                  <DropdownItem href="#">
                    Branches
                  </DropdownItem>
                  <DropdownItem href="#">
                    Press Reviews
                  </DropdownItem>
                  <DropdownItem href="#">
                    History
                  </DropdownItem>
                  <DropdownItem href="#">
                    Vision
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Campaigns
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="#">
                    Branch 1
                  </DropdownItem>
                  <DropdownItem href="#">
                    Branch 2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Events
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="#">
                    Upcoming Events
                  </DropdownItem>
                  <DropdownItem href="#">
                    Past Events
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Contribute
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="#">
                    Donate
                  </DropdownItem>
                  <DropdownItem href="#">
                    Volunteer
                  </DropdownItem>
                  <DropdownItem href="#">
                    Hand In Donations
                  </DropdownItem>
                  <DropdownItem href="#">
                    Ask For Help
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Log In</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        </div>
    )
}
