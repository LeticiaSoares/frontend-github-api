import configureMockStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga'
import { put, } from 'redux-saga/effects';
import fetchUser from './index'
import {STORE_USER} from "../../actions";
import fetchMock from 'fetch-mock'

//const sagaMiddleware = createSagaMiddleware()
//const mockStore = configureMockStore([sagaMiddleware])

describe('repos saga', () => {
    it('fetcUser works rigth', () => {
        const payload  = { email : 'teste.com.br' }
        fetchMock.getOnce('/login', {
            body: { payload },
            headers: { 'content-type': 'application/json' }
        })

        const generator = fetchUser({ ...payload})
        generator.next()
        generator.next()
        expect(generator.next().value)
            .toEqual(put(
                {type: 'STORE_USER',  body: { payload }}
            ));
        //const store = mockStore({ repos: [] })
        // const expectedActions = [
        //     { type: STORE_USER },
        // ]

        //expect(store.getActions()).toEqual(expectedActions)
    })
})