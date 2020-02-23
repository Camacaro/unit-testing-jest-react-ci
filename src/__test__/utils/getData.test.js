import getData from "../../utils/getData";

describe('Fetch API', () => {

    beforeEach( () => {
        fetch.resetMocks();
    } );


    test('Llamar una API y retornar datos', () => {

        // Esto es para simular la respuesta de una peticion que hara 
        // mi funcion, le pase le parametro de google porque requiere
        // de un valor, pero esta simulacion hara una fetch que retornara 
        // el valor que coloque aqui 12345
        fetch.mockResponseOnce( JSON.stringify( { data: '12345'}) );

        getData('https://google.com')
            .then(response => {
                expect(response.data).toEqual('12345');
            });

        expect( fetch.mock.calls[0][0]  ).toEqual('https://google.com')
    });

} );