'use strict'

const practiceJest = require('../practiceJest')

test('string return Hello word', () => {
    expect(practiceJest.helloWord()).toMatch('Hello word!')
})

const username = 'Peter'
test('string return Hello {username}', () => {
    expect(practiceJest.userName(username)).toMatch('Hello ' + username)
})
