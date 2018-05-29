import Vue from 'vue'
import Get_tutor from '@/components/pages/Get_tutor'

import {mount} from '@vue/test-utils'


// Create a EventCard Vue Instance for checking
const wrapper = mount(Get_tutor)


describe('Get_tutor', () => {

    it('should allowed to pass the data to component', () => {
        expect(wrapper.vm.num_of_tutors).to.equal(6)
    }),

    it('should connected to the Database Succeessfully', async () => {
        const result = await wrapper.vm.getInfo()
        expect(result).to.equal("Connection Success")
    })

})
