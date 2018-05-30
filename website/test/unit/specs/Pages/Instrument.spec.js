import Vue from 'vue'
import Instrument from '@/components/pages/Instrument'


import {mount} from '@vue/test-utils'


// Create a EventCard Vue Instance for checking
const wrapper = mount(Instrument)



describe('Instrument', () => {

    it('should allowed to pass the data to component', () => {
        expect(wrapper.vm.num_of_instruments).to.equal(4)
    }),

    it('should connected to the Database Succeessfully', async () => {
        const result = await wrapper.vm.getInfo()
        expect(result).to.equal("Connection Success")
    })

})
