// Import Module for testing
import Vue from 'vue'
import Contact from '@/components/pages/Contact'
import {shallowMount} from '@vue/test-utils'

// Create a Contact us Vue Instance for checking
const wrapper = shallowMount(Contact)

// Describe which Module are we testing
describe('Contact', () => {
// Descibe what is this function testing for
    it('shows Pineland Music School Contact information successfully', () => {
        expect(wrapper.html()).to.contains(`Head Office`)
        // It should shows the event image on the card 
        expect(wrapper.html()).to.contains(`Address: 62 Pinelands Rd, Sunnybank Hills QLD 4109`)
        // It should shows the event Name on the card Successfully
        expect(wrapper.html()).to.contains(`Phone Number :  (07) 3344 1880`)
        // It should shows the Description on the card
        expect(wrapper.html()).to.contains(`Email Address: Pineland_music@gmail.com`)
    })

})
