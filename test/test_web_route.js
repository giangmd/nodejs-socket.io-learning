"use strict"

// define package
const mocha     = require('mocha')
const assert    = require('assert')
const describe  = mocha.describe
const it        = mocha.it
const supertest = require('supertest')
const should    = require('should')
const expect    = require('chai').expect

// define test variable
const port = 8080;
const server = supertest.agent("http://localhost:" + port)

describe('Runing Web Route', () => {

    it('1. should return home page', (done) => {

        console.log('obj 111111111111');

        server
            .get('/')
            .expect(200)
            .end(function (err, response) {
                assert.equal(response.header['content-type'], 'text/html; charset=UTF-8');
                done();
            });
    })
})