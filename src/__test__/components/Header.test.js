import React from 'react';
// shallow, nos permite traer un elemnto para extraerlo
// permite probar el componente aislado del resto de la aplicacion
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header';
import { create } from 'react-test-renderer';


describe('<Header />', () => {

    test('Render del componente', () => {

        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );

        // con el Equal solo veo si esta montado el componente
        expect( header.length ).toEqual(1);
    });

    test('Render del titulo', ( ) => {
        // con mount traigo todo el contenido del componente con la relacion a mi app
        const header = mount(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );

        expect( header.find(".Header-title").text() ).toEqual('Platzi Store');
    }); 
});

describe('Header SnapShot', () => {

    test('Comprobar el Snapshot de Header', () => {

        const header = create(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );

        expect( header.toJSON() ).toMatchSnapshot();
    });  
})