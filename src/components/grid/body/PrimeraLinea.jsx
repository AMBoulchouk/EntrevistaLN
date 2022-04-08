import React from 'react';
import Banner from './banner/Banner'
import ContainerFocal from './containerFocal/ContainerFocal'

const PrimeraLinea = () => {
    
        return (
            <div className='primeraLinea'>
                <section>
                    <Banner />
                    <ContainerFocal />
                </section>
                <aside>
                    <Banner />
                </aside>
            </div>
        );
}

export default PrimeraLinea;