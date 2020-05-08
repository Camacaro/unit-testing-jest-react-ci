import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {

    test('Render del componente Product', () => {
        const product = shallow(
            <ProviderMock>
                <Product />
            </ProviderMock>
        );

        expect( product.length ).toEqual(1);
    });

    test('Comprobar el boton de comprar', () => {
        // esta fuincion de jest que nos provee es para simular la 
        // ejecucion de handleAddToCart sin llamar a la real
        // es una funcion de simulacion  s
        const handleAddToCart = jest.fn() ;

        const wrapper = mount(
            <ProviderMock>
                <Product product={ProductMock} handleAddToCart={handleAddToCart} />
            </ProviderMock>
        );

        wrapper.find('button').simulate('click');

        // con esto comprobanmos que al simular el click se ejecute
        // esta funcion y que solo sea clickeada una vez
        expect( handleAddToCart ).toHaveBeenCalledTimes(1);
    })
});