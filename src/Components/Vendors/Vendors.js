import React, { Component} from 'react';
import 'tachyons';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
 
export default function Vendors(props) {
    return (
        <div className='bg-white vendors'>
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       DELHI
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <p>
                            NAME: ABCD
                        </p>
                        <p>
                            CONTACT: 9999999999
                        </p>
                        <p>
                            ADDRESS: THERE COMES THE ADDRESS.
                        </p>
                    </div>
                    <div className='bg-light-gray pa2'>
                        <p>
                            NAME: ABCD
                        </p>
                        <p>
                            CONTACT: 9999999999
                        </p>
                        <p>
                            ADDRESS: THERE COMES THE ADDRESS.
                        </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
    );
}