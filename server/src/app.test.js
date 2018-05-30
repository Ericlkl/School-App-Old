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
                        expect(res.body).to.have.with.lengthOf(6);
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


describe("Testing events routes", ()=>{
    it("This should show all events around", (done)=>{
        request(app)
            .get('/show_events')
            .expect((res)=>{
                 expect(res.body).to.have.with.lengthOf(4);
            })
            .end(done);
    })

    it("This should insert event into db", (done)=>{
        var event = {
            EventName: 'MisterX',
            Tag: 'mister',
            Company: 'misterXCorp',
            Description: 'Mister x came here',
            Instrument: 'Violin',
            Place: 'home',
            Time: '14-00',
            Date: '14/11/2018',
            Image_URL: 'www.google.com'
        }
        request(app)
            .post('/insert_event')
            .send(event)
            .end(done);
    })
})


describe("Testing Courses", ()=>{
    it("This should show all courses available", (done)=>{
        request(app)
            .get('/show_course')
            .expect((res)=>{
                 expect(res.body).to.have.with.lengthOf(4);
            })
            .end(done);
    })

    it("This should insert a new course into db", (done)=>{
        var courses = {
            CourseName: 'MisterX',
            Description: 'Mister x came here',
            Requirement: 'inter',
            TutionFee: 120,
            Period: '2 week',
            Time: '14-00',
            Day: '14/11/2018',
            NumberOfStudent: 10,
            Instrument: 'Violin',
            Teacher: "MisterX",
            Image_URL: 'www.google.com',
        }
        request(app)
            .post('/insert_course')
            .send(courses)
            .end(done);

    })
})




describe("Testing Instruments", ()=>{
    it("This should show all instruments available", (done)=>{
        request(app)
            .get('/show_instrument')
            .expect((res)=>{
                 expect(res.body).to.have.with.lengthOf(4);
            })
            .end(done);
    })

    it("This should insert a new course into db", (done)=>{
        var inst = {
            InstrumentName: 'MisterX',
            Status: 'New',
            Cost: 100,
            Description: 'nice one',
            InStock: 5,
            Image_URL: 'www.google.com',
        }
        request(app)
            .post('/insert_instrument')
            .send(inst)
            .end(done);

    })
})

describe("Testing students", ()=>{
    it("This should create a new student", (done)=>{
        var student = {
            FirstName: 'asdasd',
            LastName: 'Czxczxcr',
            Gender: "Male",
            Address: "weasdzxcreet",
            PhoneNumber: "3123123123",
            Email: 'welcoasdsd@hotmail.com',
            Facebook_ID: "hey",
            ParentName: "Mistasd",
            Parent_Phone_Number: 3123123,             
        }
        request(app)
            .post('/insert_Student')
            .send(student)
            .end(done);

    })
})

