import React, {Component } from 'react';
import 'tachyons';
import {Navbar,Nav,NavDropdown, Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { MyContext } from '../../context';



import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';


import '../../util/css/app.css';





class Headernav extends Component {
    render(){
        return(
            <MyContext.Consumer>
                {(context)=>(
                    <React.Fragment>
                        {(()=>{
                            if(context.state.language === 'hindi'){

                            }else if(context.state.language === 'punjabi'){

                            }else if(context.state.language === 'marathi'){

                            }else if(context.state.language === 'gujarati'){

                            }else{
                                return(
                                    <div>
                                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar'>
                                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                            <Navbar.Collapse id="responsive-navbar-nav">
                                                <Nav className="mr-auto navigation">
                                                    <Nav.Link href="/">{translationEN.header.nav.option1}</Nav.Link>
                                                    <NavDropdown title={translationEN.header.nav.option2} id="collasible-nav-dropdown">
                                                        <NavDropdown.Item href="/management" className="menuitem">{translationEN.header.nav.suboption1}</NavDropdown.Item>
                                                        <NavDropdown.Item href="/executives" className="menuitem" >{translationEN.header.nav.suboption2}</NavDropdown.Item>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationEN.header.nav.option3} id="collasible-nav-dropdown">
                                                        <NavDropdown.Item href="#action/3.1" className="menuitem">{translationEN.header.nav.suboption3}</NavDropdown.Item>
                                                        <NavDropdown.Item href="/lifemembers" className="menuitem" >{translationEN.header.nav.suboption4}</NavDropdown.Item>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationEN.header.nav.option4} id="collasible-nav-dropdown">
                                                        <NavDropdown.Item href="#action/3.1" className="menuitem">{translationEN.header.nav.suboption5} </NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.3" className="menuitem" >{translationEN.header.nav.suboption6}</NavDropdown.Item>
                                                    </NavDropdown>
                                                    <NavDropdown title={translationEN.header.nav.option5} id="collasible-nav-dropdown">
                                                        <NavDropdown.Item href="#action/3.1" className="menuitem">{translationEN.header.nav.suboption7} </NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.3" className="menuitem" >{translationEN.header.nav.suboption8}</NavDropdown.Item>
                                                    </NavDropdown> 
                                                    <Nav.Link href="/listofmeetings">{translationEN.header.nav.option6}</Nav.Link>
                                                    <Nav.Link href="/">{translationEN.header.nav.option7}</Nav.Link>
                                                    <Nav.Link href="/">{translationEN.header.nav.option8}</Nav.Link>
                                                </Nav>
                                            </Navbar.Collapse>
                                        </Navbar>
                                    </div>
                                );
                            }
                        })()}
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            

        )
    }
}


export default Headernav;