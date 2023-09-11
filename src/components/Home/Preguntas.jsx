import React, { useState } from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';

const Preguntas = () => {
    const customAccordionStyle = {
        header: {
            backgroundColor: '#f2f2f2', // Cambia el color de fondo del encabezado
            color: '#3a3', // Cambia el color del texto del encabezado
            fontSize: '18px', // Cambia el tamaño de fuente del encabezado
            fontWeight: 'bold', // Cambia el peso de la fuente del encabezado
            padding: '10px', // Agrega espaciado al encabezado
            cursor: 'pointer', // Cambia el cursor al pasar por encima
        },
    };
    return (
        <div className='w-screen min-h-screen flex flex-col justify-start items-center pt-20 px-20'>
            <h1 className='text-center text-[50px] text-gray500 mb-4'>Frequently Asked Questions.</h1>
            <Accordion className='w-full' style={customAccordionStyle}>
                <AccordionTab header="What is a token?" >
                    <p className="m-0">
                    A token is a digital representation of an asset or utility that can be stored, transferred, and verified on a blockchain. Tokens can have different functions, such as representing ownership of a physical asset (like real estate).
                    </p>
                </AccordionTab>
                <AccordionTab header="Which tokens can I invest in?" >
                    <p className="m-0">
                    The platform offers investment opportunities in various projects, such as construction, rent projects, and land subdivision.
                    </p>
                </AccordionTab>
                <AccordionTab header="How can I earn profits?" >
                    <p className="m-0">
                    Investors have the opportunity to earn profits in two main ways. Firstly, through property appreciation, where the project's evolution and real estate market's value increase can raise the value of owned tokens. Secondly, for rental properties, investors can receive periodic rental payments proportional to their token ownership. These two avenues offer potential income sources and the possibility of attractive returns on real estate investments.
                    </p>
                </AccordionTab>
                <AccordionTab header="What do I need to buy tokens?" >
                    <p className="m-0">
                    Investing on our platform is straightforward. Users only need to register and complete a brief account verification process. Once verified, they can access to our projects and start investing securely and conveniently. We've simplified the process so that users can quickly participate in the exciting world of tokenized real estate investments.
                    </p>
                </AccordionTab>
                <AccordionTab header="How are profit payments made?" >
                    <p className="m-0">
                    Dividend or profit payments are made according to the specific terms of each project. Depending on the project, payments may be made periodically or at the end of the project when generated profits are distributed.
                    </p>
                </AccordionTab>
                <AccordionTab header="How can I learn about the projects?" >
                    <p className="m-0">
                    Before investing, we provide detailed information about each project, including financial data, project description, location, profitability projections, and other relevant documents to help you make an informed decision.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}

export default Preguntas