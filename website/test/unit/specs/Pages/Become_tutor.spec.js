import Vue from 'vue'
import Become_tutor from '@/components/pages/Become_tutor'
import {shallowMount} from '@vue/test-utils'


const dummy_data = {
    date: new Date(),
    firstName: "doc",
    lastName: "who",
    gender: "Male",
    qualifications: "Bachelor",
    interested: "Violin",
    email: "abc@gmail.com"
}

// Create a EventCard Vue Instance for checking
const wrapper = shallowMount(Become_tutor)

wrapper.setData({
    data_package: dummy_data
})

describe('Become_tutor', () => {

    it('success function should return send data Success, if data is valid', () => {
        expect(wrapper.vm.success()).to.equal("Send Data Successfully")
    }),

    it('success function should return Data is not appropriate, if data is invalid', () => {
        wrapper.vm.data_package.email = "abc123"
        expect(wrapper.vm.success()).to.equal("Data is not appropriate")

    })

})
