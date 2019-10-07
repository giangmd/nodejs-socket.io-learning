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

describe('Runing Rest API', () => {
    it('1. Get demo posts', (done) => {
        server
            .get("/typicode/posts")
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){

                res.status.should.equal(200)

                done()

                console.log('---data posts');
                console.log(res.body);
                console.log('------------------------');
            });
    })

    it('2. Get demo comments', (done) => {
        server
            .get("/typicode/comments")
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){

                res.status.should.equal(200)

                done()

                console.log('---data comments');
                console.log(res.body);
                console.log('------------------------');
            });
    })
})