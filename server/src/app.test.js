/* eslint-disable */



const request = require('supertest');

var app = require('./app.js').app;

it('should retrun hello world', (done)=>{
        request(app)
            .get('/')
            .expect('Hello world')
            .end(done);
            
})

it('This should return an object for tutors', (done)=>{
            request(app)
                .get('/show_tutors')
                .expect(200)
                .expect((res)=>{
                    expect(res.body).toInclude({
                        FirstName: 'Glennys'
                    });
                })
                .end(done);
                
})



