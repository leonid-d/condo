const { createTask, createWorker, taskQueue } = require('./tasks')

async function asyncAddTask (a, b) {
    return Promise.resolve(a + b)
}

afterAll(() => {
    taskQueue.close()
})

describe('tasks', () => {
    test('createTask result', () => {
        const task = createTask('asyncAddTask1', asyncAddTask)
        expect(task).toHaveProperty('delay')
        expect(task).toHaveProperty('applyAsync')
        expect(task._type).toEqual('TASK')
        expect(task).toThrowError(/This function is converted to a task/)
    })

    test('createTask().delay result', async () => {
        const task = createTask('asyncAddTask2', asyncAddTask)
        createWorker()
        const delayed = await task.delay(33, 44)
        expect(delayed).toHaveProperty('getState')
        expect(delayed).toHaveProperty('awaitResult')
    })

    test('awaitResult', async () => {
        const task = createTask('asyncAddTask3', asyncAddTask)
        createWorker()
        const delayed = await task.delay(44, 45)
        const result = await delayed.awaitResult()
        expect(result).toEqual(44 + 45)
    })

    test('getState', async () => {
        const task = createTask('asyncAddTask4', asyncAddTask)
        createWorker()
        const delayed = await task.delay(44, 45)
        const state1 = await delayed.getState()
        expect(state1).toEqual('waiting')
        await delayed.awaitResult()
        const state2 = await delayed.getState()
        expect(state2).toEqual('completed')
    })

    test('createTask().applyAsync result', async () => {
        const task = createTask('asyncAddTask5', asyncAddTask)
        createWorker()
        const delayed = await task.applyAsync([33, 44], { attempts: 2, backoff: true })
        expect(delayed).toHaveProperty('getState')
        expect(delayed).toHaveProperty('awaitResult')
    })
})
