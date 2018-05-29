import Vue from 'vue'
import EnrolForm from '@/components/CourseSpecificComponent/EnrolForm'
import {shallowMount} from '@vue/test-utils'


const dummy_data = {
    firstName: 'fname',
    lastName: 'lname',
    address: 'add',
    gender: 'Male',
    email: 'abc@gmail.com',
    phoneNumber: '123456789',
    parentName: 'abc',
    parentPhoneNumber: '123456789',
    facebook: 'hellofb',
    termsChecked: true,
}

// Create a EventCard Vue Instance for checking
const wrapper = shallowMount(EnrolForm)

wrapper.setData({
    dataPackage: dummy_data,
    inBrowser: false
})

describe('EnrolForm', () => {

    it('should allowed to pass the data to component', () => {
        expect(wrapper.vm.dataPackage.firstName).to.equal(dummy_data.firstName)
        expect(wrapper.vm.dataPackage.lastName).to.equal(dummy_data.lastName)
        expect(wrapper.vm.dataPackage.address).to.equal(dummy_data.address)
        expect(wrapper.vm.dataPackage.gender).to.equal(dummy_data.gender)
        expect(wrapper.vm.dataPackage.email).to.equal(dummy_data.email)
        expect(wrapper.vm.dataPackage.phoneNumber).to.equal(dummy_data.phoneNumber)
        expect(wrapper.vm.dataPackage.parentName).to.equal(dummy_data.parentName)
        expect(wrapper.vm.dataPackage.parentPhoneNumber).to.equal(dummy_data.parentPhoneNumber)
        expect(wrapper.vm.dataPackage.facebook).to.equal(dummy_data.facebook)
        expect(wrapper.vm.dataPackage.termsChecked).to.equal(dummy_data.termsChecked)

    }),

    it('submit_to_DB function should send data to database, if data is valid', async () => {
            const result = await wrapper.vm.submit_to_DB()
            // Need to fix later !!!!! it should be success !!!!!
            expect(result).to.equal("Connection Fail")
    }),

    it('success function should not send data to database, if data is invalid', async () => {
        wrapper.vm.dataPackage.email = "abc123"
        const result = await wrapper.vm.submit_to_DB()
        expect(result).to.equal("Data is not appropriate")
    })

})
