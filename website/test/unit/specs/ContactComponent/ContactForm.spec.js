// Import Module for testing
import Vue from 'vue'
import ContactForm from '@/components/ContactForm'
import {shallowMount} from '@vue/test-utils'

// Create a fake data for testing
const dummy_data = {
  fullname: "abcd",
  phonenumber: "123456789",
  email: "abc@gmail.com",
  message: "message"
}

// Create a ContactForm Vue Instance for checking
const wrapper = shallowMount(ContactForm)
wrapper.setData({
    dataPackage: dummy_data,
    inBrowser: false
})

// Describe which Module are we testing
describe('ContactForm', () => {

    // Write down the msg, what is this function testing
    it('should upload the data to Database Succeessfully, when the data is valid', async () => {
        // uploadQuestion function should return Connection Success if it is success
        const result = await wrapper.vm.uploadQuestion()
        expect(result).to.equal("Connection Success")
    }),

    // Write down the msg, what is this function testing
    it('should not upload the data to Database, when the data is inValid', async () => {
        // uploadQuestion function should return text is invalid if the data is invalid
        const result = await wrapper.vm.uploadQuestion()
        expect(result).to.equal("text is invalid")
    }),

    // Write down the msg, what is this function testing
    it('resetInputField function should reset all the data', () => {
        // resetInputField function should rest all the value and return resetSuccessfully
        expect(wrapper.vm.resetInputField()).to.equal("resetSuccessfully")
        expect(wrapper.vm.dataPackage.fullname).to.equal("")
        expect(wrapper.vm.dataPackage.phonenumber).to.equal("")
        expect(wrapper.vm.dataPackage.email).to.equal("")
        expect(wrapper.vm.dataPackage.message).to.equal("")
        expect(wrapper.vm.inBrowser).to.equal(false)
    })

})
