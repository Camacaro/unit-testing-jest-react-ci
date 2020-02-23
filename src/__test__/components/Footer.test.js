import React from 'react';
// Monta el DOM y puedo buscar el elemento que necesito
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';

describe('<Footer />', () => {
    
    const footer = mount( <Footer /> );

    test('Render del componente Footer', () => {
       
        expect(footer.length).toEqual(1);
    });

    test('Render del titulo', () => {

        // se coloca asi porque en el DOM tendra esa clase 
        // y quiero el valor que esta dentro de ello
        expect( footer.find(".Footer-title").text() ).toEqual('Platzi Store')
    })
});

// snapShot es para realizar un test donde el componente siempre 
// tendra un valor estaticos 
// Los test de snapshot son de gran utilidad cuando se quiere asegurar
// que la UI no cambia inesperadamente
// para esto debemos convertir el componente ne object json
describe('Footer Snapshot', () => {

    test('Comprobar la UI del Componente Footer', () => {
        
        const footer = create(<Footer/>);
        expect( footer.toJSON() ).toMatchSnapshot();
    });
});
