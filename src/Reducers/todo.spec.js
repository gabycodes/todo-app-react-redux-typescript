import reducer from './todo'

describe('Todo Reducer', () => {
    it('returns a state object', () => {
        const result = reducer(undefined, { type: 'ANYTHING' })
        expect(result).toBeDefined()
    })

    it('adds a todo', () => {
        const startingState = {
            todos: [
                { id: '1', name: 'Create Static UI', isComplete: true},
                { id: '2', name: 'Create Initial State', isComplete: true},
                { id: '3', name: 'Use State to Render UI', isComplete: false},
            ]
        }
        const expectedState = {
            todos: [
                { id: '1', name: 'Create Static UI', isComplete: true},
                { id: '2', name: 'Create Initial State', isComplete: true},
                { id: '3', name: 'Use State to Render UI', isComplete: false},
                { id: '4', name: 'New Todo', isComplete: false},
            ]
        }
        const action = {
            type: 'TODO_ADD',
            payload: { id: '4', name: 'New Todo', isComplete: false}
        }
        
        const result = reducer(startingState, action)
        expect(result).toEqual(expectedState)
    })
})