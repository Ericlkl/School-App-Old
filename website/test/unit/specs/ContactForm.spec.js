import Vue from 'vue'
import ContactForm from '@/components/ContactForm'
import {shallowMount} from '@vue/test-utils'


const dummy_data = {
  fullname: "abcd",
  phonenumber: "123456789",
  email: "abc@gmail.com",
  message: "message"
}

// Create a EventCard Vue Instance for checking
const wrapper = shallowMount(ContactForm)
wrapper.setData({
    dataPackage: dummy_data
})

describe('ContactForm', () => {
    it('resetInputField function should reset all the data', () => {
        expect(wrapper.vm.resetInputField()).to.equal("resetSuccessfully")
        expect(wrapper.vm.dataPackage.fullname).to.equal("")
        expect(wrapper.vm.dataPackage.phonenumber).to.equal("")
        expect(wrapper.vm.dataPackage.email).to.equal("")
        expect(wrapper.vm.dataPackage.message).to.equal("")
    })

})
