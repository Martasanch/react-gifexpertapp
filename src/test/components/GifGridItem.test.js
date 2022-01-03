import react from "react"
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"



describe('Pruebas en GifGridItem', () => {
    const title = 'Título de prueba'
    const url = 'http://localhost/prueba.jpg'

    test('Debe de mostar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem title={title} url={url} />)
        expect( wrapper).toMatchSnapshot()
    })
})



