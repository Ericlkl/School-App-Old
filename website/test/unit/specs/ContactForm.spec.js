import Vue from 'vue'
import ContactForm from '@/components/ContactForm'
import {shallowMount} from '@vue/test-utils'


describe('ContactForm', () => {
    it('has a function called showAlertMsg', () => {
        expect(typeof ContactForm.methods.showAlertMsg).to.equal('function')
    })
})
