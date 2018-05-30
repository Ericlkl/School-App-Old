import Vue from 'vue'
import TeacherCard from '@/components/TeacherComponent/TeacherCard'
import {shallowMount} from '@vue/test-utils'

const dummy_data = {
  FirstName: "fname",
  LastName: "lname",
  Image_URL: "https://blogmedia.evbstatic.com/wp-content/uploads/bloguk/2018/01/15155312/iStock-667709450.jpg",
  Good_at: "good at",
  Qualification: "qualification",
  Facebook_ID: "facebook id",
  Personal_Description: "personal description",
}

// Create a EventCard Vue Instance for checking
const wrapper = shallowMount(TeacherCard, {
    propsData: {
    tutor: dummy_data
    }
})

wrapper.setData({
    inBrowser: false
})

describe('TeacherCard', () => {
    it('goToTeacherProfile function should direct user to the teacherProfile page', () => {
        expect(wrapper.vm.goToTeacherProfile()).to.equal("In Teacher Profile Page")
    })
})
