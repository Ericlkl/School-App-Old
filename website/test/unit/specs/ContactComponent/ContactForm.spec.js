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
    dataPackage: dummy_data,
    inBrowser: false
})

describe('ContactForm', () => {

    it('should upload the data to Database Succeessfully, when the data is valid', async () => {
        const result = await wrapper.vm.uploadQuestion()
        expect(result).to.equal("Connection Success")
    }),

    it('should not upload the data to Database, when the data is inValid', async () => {
        const result = await wrapper.vm.uploadQuestion()
        expect(result).to.equal("text is invalid")
    }),

    it('resetInputField function should reset all the data', () => {
        expect(wrapper.vm.resetInputField()).to.equal("resetSuccessfully")
        expect(wrapper.vm.dataPackage.fullname).to.equal("")
        expect(wrapper.vm.dataPackage.phonenumber).to.equal("")
        expect(wrapper.vm.dataPackage.email).to.equal("")
        expect(wrapper.vm.dataPackage.message).to.equal("")
        expect(wrapper.vm.inBrowser).to.equal(false)
    })

})
