import Vue from 'vue'
import Courses from '@/components/pages/Courses'
import {mount} from '@vue/test-utils'


// Create a EventCard Vue Instance for checking
const wrapper = mount(Courses)


describe('Courses', () => {
    it('EXpected mounted method should call when the component created', () => {
    wrapper.vm.$mount()
    expect(typeof wrapper.vm.$mount()).to.equal('object')
    }),


    it('should allowed to pass the data to component', () => {
        expect(wrapper.vm.num_of_Course).to.equal(4)
    }),

    it('should connected to the Database Succeessfully', async () => {
        const result = await wrapper.vm.getInfo()
        // Need to fix later !!!!! it should be success !!!!!
        expect(result).to.equal("Connection success")
    })

})
