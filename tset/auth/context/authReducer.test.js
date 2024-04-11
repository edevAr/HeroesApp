import { authReducer } from "../../../src/auth"
import { typess } from "../../../src/auth/types/types"

describe('Pruebas en authReducer', () => { 
    test('debe de retornar el estado por defecto', () => { 
        const state = authReducer({logged: false}, {})
        expect(state).toBe(state)
     })

     test('debe de (login) llamar el login autenticar y establecer el user', () => { 
        const action = {
            type: typess.login,
            payload: {
                name: 'Juan',
                id: '123'
            }
        }
        const state = authReducer({logged: false}, action)
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })

     })

     test('debe de (logout) borrar el name del usuario y logged en false', () => { 
        const state ={
            logged: true,
            user:{
                id: '123',
                name: 'Juan'
            }
        }
        const action = {
            type: typess.logout
        }
        const newState = authReducer(state, action)
        expect(newState).toEqual({logged: false})
     })
 })