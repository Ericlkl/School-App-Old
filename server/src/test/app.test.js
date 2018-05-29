/* eslint-disable */



const request = require('supertest');

var app = require('../app.js').app;

    it('should retrun hello world', (done)=>{
        request(app)
            .get('/')
            .expect('Hello world')
            .end(done);
            
    })

