import Vue from 'vue'
import CourseBox from '@/components/CourseSpecificComponent/CourseBox'
import {shallowMount} from '@vue/test-utils'

// Create a CourseBox Vue Instance for checking

const wrapper = shallowMount(CourseBox)

describe('CourseBox', () => {
    it('should display Course information in the card Component', () => {
        expect(wrapper.html()).to.contains(`Course Name :`)
        expect(wrapper.html()).to.contains(`Instrument  :`)
        expect(wrapper.html()).to.contains(`Teacher Name : `)
    })
})
