import ValidationController from '../../../checkValidation/ValidationController.js'

const contact_us_datapackage = {
    message: "Message",
    phonenumber: "123456789",
    email: "abc@gmail.com",
    fullname: "Eric LEE"
}


describe('checkValidation', () => {

  it('check Valid datapack pass to Contact US Form', () => {
      /*
          Expected the data recieved in the props, should match the dummy data we send it to the Announcment
      */
      expect(ValidationController.checkContactUsForm(contact_us_datapackage)).to.equal(null)

    })
})
