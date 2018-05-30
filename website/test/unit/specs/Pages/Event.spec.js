import Vue from 'vue'
import Events from '@/components/pages/Events'

import {mount} from '@vue/test-utils'


// Create a EventCard Vue Instance for checking
const wrapper = mount(Events)

describe('Events', () => {

    it('should allowed to pass the data to component', () => {
        expect(wrapper.vm.num_of_Events).to.equal(4)
    }),

    it('should connected to the Database Succeessfully', async () => {
        const result = await wrapper.vm.getInfo()
        expect(result).to.equal("Connection Success")
    })

})
