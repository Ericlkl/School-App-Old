import Vue from 'vue'
import Announcment from '@/components/Announc/Announcment'
import {shallowMount} from '@vue/test-utils'

const dummy_announcment_data = {
    img: "https://blogmedia.evbstatic.com/wp-content/uploads/bloguk/2018/01/15155312/iStock-667709450.jpg",
    title: "title",
    location: "location",
    time: 'Tuesday',
    entry: 300
}

// Create a EventCard Vue Instance for checking
const wrapper = shallowMount(Announcment, {
    propsData: {
        img: dummy_announcment_data.img,
        title: dummy_announcment_data.title,
        location: dummy_announcment_data.location,
        time: dummy_announcment_data.time,
        entry: dummy_announcment_data.entry
    }
})


describe('Announcment', () => {

    it('Can read data to pass it in props', () => {

        /*
            Expected the data recieved in the props, should match the dummy data we send it to the Announcment
        */
        expect(wrapper.vm.img).to.equal(dummy_announcment_data.img)
        expect(wrapper.vm.title).to.equal(dummy_announcment_data.title)
        expect(wrapper.vm.location).to.equal(dummy_announcment_data.location)
        expect(wrapper.vm.time).to.equal(dummy_announcment_data.time)
        expect(wrapper.vm.entry).to.equal(dummy_announcment_data.entry)


    }),
    it('Can shows the Announcment information on the card Component', () => {

        expect(wrapper.html()).to.contains(`${wrapper.vm.title}`)

        expect(wrapper.html()).to.contains(`${wrapper.vm.location}`)
        expect(wrapper.html()).to.contains(`${wrapper.vm.time}`)
        expect(wrapper.html()).to.contains(`${wrapper.vm.entry}`)

    })

})
