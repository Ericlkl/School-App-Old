import Vue from 'vue'
import InstrumentCard from '@/components/InstrumentComponent/InstrumentCard'
import {shallowMount} from '@vue/test-utils'

// Create a EventCard Vue Instance for checking
const data = {
  Image_URL: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
  InstrumentName: "name",
  Status: "status",
  Cost: 300,
  InStock: 200
}

const wrapper = shallowMount(InstrumentCard, {
    propsData: {
        instrument: data
    }
})

wrapper.setData({
    inBrowser: false
})

describe('InstrumentCard', () => {
    it('goToHireInstrument function should direct to hire_instrument Page', () => {
        expect(wrapper.vm.goToHireInstrument()).to.equal("In hire instrument page")
    })
})
