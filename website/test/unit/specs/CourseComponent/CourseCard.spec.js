import Vue from 'vue'
import CourseCard from '@/components/CourseComponent/CourseCard'
import {shallowMount} from '@vue/test-utils'

const dummy_data = {
    Image_URL: "https://blogmedia.evbstatic.com/wp-content/uploads/bloguk/2018/01/15155312/iStock-667709450.jpg",
    CourseName: "course",
    TutionFee: 300,
    Period: "period",
    Day: 'Tuesday',
    Time: 'time',
    NumbersOfStudent: 300,
    Teacher: "teacher"

}

// Create a EventCard Vue Instance for checking
const wrapper = shallowMount(CourseCard, {
    propsData: {
        course: dummy_data
    }
})

describe('CourseCard', () => {


    it('Can read data to pass it in props', () => {

        /*
            Expected the data recieved in the props, should match the dummy data we send it to the Announcment
        */
        expect(wrapper.vm.course.Image_URL).to.equal(dummy_data.Image_URL)
        expect(wrapper.vm.course.CourseName).to.equal(dummy_data.CourseName)
        expect(wrapper.vm.course.TutionFee).to.equal(dummy_data.TutionFee)
        expect(wrapper.vm.course.Period).to.equal(dummy_data.Period)
        expect(wrapper.vm.course.Day).to.equal(dummy_data.Day)
        expect(wrapper.vm.course.Time).to.equal(dummy_data.Time)
        expect(wrapper.vm.course.NumbersOfStudent).to.equal(dummy_data.NumbersOfStudent)
        expect(wrapper.vm.course.Teacher).to.equal(dummy_data.Teacher)


    }),
    it('Can shows the Course information on the card Component', () => {

        expect(wrapper.html()).to.contains(`${wrapper.vm.course.CourseName}`)
        expect(wrapper.html()).to.contains(`${wrapper.vm.course.TutionFee}`)
        expect(wrapper.html()).to.contains(`${wrapper.vm.course.Period}`)
        expect(wrapper.html()).to.contains(`${wrapper.vm.course.Day}`)
        expect(wrapper.html()).to.contains(`${wrapper.vm.course.Time}`)
        expect(wrapper.html()).to.contains(`${wrapper.vm.course.NumbersOfStudent}`)
        expect(wrapper.html()).to.contains(`${wrapper.vm.course.Day}`)
        expect(wrapper.html()).to.contains(`${wrapper.vm.course.Teacher}`)

    })

})
