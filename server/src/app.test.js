/* eslint-disable */



const request = require('supertest');
var expect = require('chai').expect
var app = require('./app.js').app;
const {Teacher} = require('./models')
const {Question} = require('./models')

it('should retrun hello world', (done)=>{
        request(app)
            .get('/')
            .expect('Hello world')
            .end(done);    
})







describe('Checking teachers....', ()=>{
    it('This should check the length of teachers array', (done)=>{
                request(app)
                    .get('/show_tutors')
                    .expect((res)=>{
                        expect(res.body).to.have.with.lengthOf(8);
                    })
                    .end(done);
                    
    })
    it('This should check teachers properties and values for names, lastname etc.', (done)=>{
                request(app)
                    .get('/show_tutors')
                    .expect((res)=>{
                        expect(res.body[0]).to.have.property(
                            "id", 1,
                            "FirstName", "Glennys",
                            "LastName", "Looker",
                            "Gender", "Male",
                            "Address", "125 Melbourne street",
                            "PhoneNumber", "1234567890",
                            "Email", "abc123@gmail.com",
                            "Facebook_ID", "GlennysFB",
                            "Quasification", "Master",
                            "Good_at", "Piano",
                            "Personal_Description", "I am a pianist and composer who has taught people of all ages and levels, including absolute beginners, adult students, and taking students through AMEB or VCE exams. ",
                            "Teachering_Experience", " 7 Years Teaching Experience",
                            "Music_skill", "Piano",
                            "Language_skill", "English,Japanese",
                            "Image_URL", "https://segundadivisionweb.files.wordpress.com/2017/04/profesor-de-musica.jpg");
                    })
                    .end(done);
                    
    })

    it('Should insert teacher into the database', (done)=>{
                var newTeacher = {
                        FirstName: 'Gregstam',
                        LastName: 'Crooker',
                        PhoneNumber: "3123123123",
                        Address: "welcome street",
                        Email: 'welcomse@hotmail.com',
                        Qualification: "Diploma",
                        Good_at: "Violin",
                        Personal_Description: "Warm guy",
                        Teachering_Experience: "7 years",
                        Music_skill: "good",
                        Language_skill: "English",
                        Image_URL: "www.google.com.au",
                        Gender: 'Male'
                }
                request(app)
                        .post('/insert_teacher')
                        .send(newTeacher)
                        .expect((res)=>{ 
                            console.log("Submitted succsesfully");
                        })
                        .end(done)
                    
    })
})
describe("Checking contact form", ()=>{
    it('Should submit the form to database',(done)=>{
        var message = {
            FullName: 'MisterX',
            Email: 'misterx@hotmail.com',
            PhoneNumber: 12312312,
            Message: 'Mister x came here',
        }
        request(app)
            .post('/contact')
            .send(message)
            .expect((res)=>{
                console.log("Submitted succsesfully");
            })
            .end(done);
    })
})
