import Vue from 'vue'
import HireInstrumentForm from '@/components/InstrumentComponent/HireInstrumentForm'
import {shallowMount} from '@vue/test-utils'


const dummy_data = {
    studentID: '1234',
    studentName: 'abcd',
    startDate: '2018-05-23',
    endDate: '2018-05-30'
}

// Create a EventCard Vue Instance for checking
const wrapper = shallowMount(HireInstrumentForm)
wrapper.setData({
    dataPackage: dummy_data,
    inBrowser: false
})

describe('HireInstrumentForm', () => {
    
    it('success function should return Data is Valid, if data is valid', () => {
        expect(wrapper.vm.success()).to.equal("Data is Valid")
    }),

    it('success function should return Data is not appropriate, if data is invalid', () => {
        wrapper.vm.dataPackage.studentName = "abc123"
        expect(wrapper.vm.success()).to.equal("Data is not appropriate")
    }),
    
    it('resetValues function should reset all the data', () => {
        expect(wrapper.vm.resetValues()).to.equal("resetSuccessfully")
        expect(wrapper.vm.dataPackage.studentID).to.equal("")
        expect(wrapper.vm.dataPackage.studentName).to.equal("")
        expect(wrapper.vm.dataPackage.startDate).to.equal(null)
        expect(wrapper.vm.dataPackage.endDate).to.equal(null)
        expect(wrapper.vm.inBrowser).to.equal(false)
    })

})
