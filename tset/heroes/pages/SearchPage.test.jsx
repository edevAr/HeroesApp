import { render, screen } from "@testing-library/react"
import {MemoryRouter} from 'react-router-dom'
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

describe('Pruebas en <SearchPage/>', () => { 
    test('debe de mostarse correctamente con valores por defecto', () => { 
        const {container} = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot();
     })

     test('debe de mostrar a Batman y el input con el valor del queryString', () => { 
        const {container} = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )
        //creen.debug()
        //expect(container).toMatchSnapshot();
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman')

        const img = screen.getByRole('img')
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg')
     })
 })