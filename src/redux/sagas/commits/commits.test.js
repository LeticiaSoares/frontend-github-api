import { put, call, takeLatest } from 'redux-saga/effects'
import { cloneableGenerator } from '@redux-saga/testing-utils'
import { githubActions } from '../../actions/github'
import {getRepoCommits} from '../../../services/github.api'
import {index,fetchCommits} from './index'

const expecteMock = { payload: {  user: 'LeticiaSoares'} }
describe('commits.saga', () => {
    describe('fetchCommits', () => {
        const generator = cloneableGenerator(fetchCommits)({ ...expecteMock })
        it('should dispatch effect call', () => {
            const gen = generator.clone()
            expect(gen.next(expecteMock).value)
                .toEqual(call(getRepoCommits, { ...expecteMock.payload }))
        })
        it('should dispatch success', () => {
            const gen = generator.clone()
            gen.next()
            expect(gen.next({}).value)
                .toEqual(put(githubActions.success({})))
        })
        it('should dispatch fail', () => {
            const gen = generator.clone()
            gen.next()
            expect(gen.throw('error').value)
                .toEqual(put(githubActions.fail('error')))
        })
    })
})
