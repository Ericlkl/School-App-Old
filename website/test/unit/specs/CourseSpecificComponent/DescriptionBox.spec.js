import Vue from 'vue'
import DescriptionBox from '@/components/CourseSpecificComponent/DescriptionBox'
import {shallowMount} from '@vue/test-utils'

// Create a CourseBox Vue Instance for checking

const wrapper = shallowMount(DescriptionBox)


describe('DescriptionBox', () => {
    it('should display Course Description information in the card Component', () => {
        expect(wrapper.html()).to.contains(`The course will intoduce you to the basics of violin, you will learn from the best teachers in the industry that perform on world stages around the globe`)
    })
})
