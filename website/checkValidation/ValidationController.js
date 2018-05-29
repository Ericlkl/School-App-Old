// Regular Express for Email format
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// Regular Expression for only accept numbers
var numbersOnlyRegex = /^[0-9]*$/
// Regular Expression for only accept English letter and space
var letter_space_Regex = /^[a-zA-Z_ ]*$/

var letters_only_Regex = /^[a-zA-Z]*$/



export default {

    checkContactUsForm : function(dataPackage){

        /*
            Initialise the alertMsg variable, it is used to pass the text string to alret the user
            their information in incorrect
        */
        //  Testing for Message Box

        var alertMsg = (dataPackage.message.length === 0) ? "Please insert Your Message!" : null


        // Testing for phone number input field, only accept number and must be 9 digit long
        alertMsg = (!numbersOnlyRegex.test(dataPackage.phonenumber)) ? "Invalid phone number detected! Please correct it!" : alertMsg
        alertMsg = (dataPackage.phonenumber.length != 9) ? "There must be 9 digit for the phone number!" : alertMsg
        alertMsg = (dataPackage.phonenumber.length === 0) ? "Please Insert Your Phone Number !" : alertMsg

        // Testing for email input field, using Regular expression to check the email format
        alertMsg = (!emailRegex.test(dataPackage.email)) ? "Invalid emaill format detected! Please Correct it!" : alertMsg
        alertMsg = (dataPackage.email.length === 0) ? "Please insert Your Email Address!" : alertMsg

        // Testing for name input field, only accept english letter a-z, A-Z and space _ 
        alertMsg = (!letter_space_Regex.test(dataPackage.fullname)) ? "Invaild name detected! Only accept english letter!" : alertMsg
        alertMsg = (dataPackage.fullname.length === 0) ? "Please insert Your Name!" : alertMsg

        return alertMsg

    },
    checkHireInstrumentForm : function(dataPackage){

          // Create Date Object for comparing start and end date
          var start = new Date(dataPackage.startDate)
          var end = new Date(dataPackage.endDate)

            /*
                Initialise the alertMsg variable, it is used to pass the text string to alret the user
                their information in incorrect
            */

          // Testing for start date and end date
          // only accept start date < end date
          var alertMsg = (start.getTime() === end.getTime()) ? "Start Data and End date Cannot be same !" : null
          alertMsg = (start > end) ? "The Start Date cannot earlier than end date! " : alertMsg
          alertMsg = (dataPackage.endDate === null) ? "Please Select the end date !" : alertMsg
          alertMsg = (dataPackage.startDate === null) ? "Please Select the start date !" : alertMsg

          // Testing for student name input field, only accept english letter a-z, A-Z and space _ 
          alertMsg = (!letter_space_Regex.test(dataPackage.studentName)) ? "Invaild name detected! Only accept english letter!" : alertMsg
          alertMsg = (dataPackage.studentName.length === 0) ? "Please insert Your Name!" : alertMsg

          // Testing for student id input field, only accept numbers
          alertMsg = (!numbersOnlyRegex.test(dataPackage.studentID)) ? "Student Number is inValid! It onlt accept numbers!" : alertMsg
          alertMsg = (dataPackage.studentID.length === 0) ? "Please Insert Your Student Number !" : alertMsg

          return alertMsg

    },
    checkEnrolForm : function(dataPackage) {

      /*
          Initialise the alertMsg variable, it is used to pass the text string to alret the user
          their information in incorrect
      */
      // Check Terms and Condition box is ticked
      var alertMsg = (dataPackage.termsChecked === false) ? "Please checked the terms of Condition check box" : null

      // Check Parent Phone Number is valid
      alertMsg = (!numbersOnlyRegex.test(dataPackage.parentPhoneNumber)) ? "parent phone number is invalid! only accept numbers!" : alertMsg

      alertMsg = (dataPackage.parentPhoneNumber.length != 9) ? "There must be 9 digit for the parent phone number!" : alertMsg
      alertMsg = (dataPackage.parentPhoneNumber.length === 0) ? "Please Insert Your parent phone Number !" : alertMsg

      // Check parent Name is Valid
      alertMsg = (!letter_space_Regex.test(dataPackage.parentName)) ? "Invaild parent name detected! Only accept english letter!" : alertMsg

      alertMsg = (dataPackage.parentName.length === 0) ? "Please insert Your Parent full Name!" : alertMsg

      // Check student phone number is Valid
      alertMsg = (!numbersOnlyRegex.test(dataPackage.phoneNumber)) ? "phone number is invalid! only accept numbers!" : alertMsg
      alertMsg = (dataPackage.phoneNumber.length != 9) ? "There must be 9 digit for the phone number!" : alertMsg
      alertMsg = (dataPackage.phoneNumber.length === 0) ? "Please Insert Your Phone Number !" : alertMsg

      // Check student email is Valid
      alertMsg = (!emailRegex.test(dataPackage.email)) ? "Invalid emaill format detected! Please Correct it!" : alertMsg
      alertMsg = (dataPackage.email.length === 0) ? "Please insert Your Email Address!" : alertMsg

      // Check student email is Valid
      alertMsg = (dataPackage.gender === '') ? "Please Select your gender!" : alertMsg
      alertMsg = (dataPackage.address.length === 0) ? "Please insert Your Address!" : alertMsg

      // Check student firstname is Valid
      alertMsg = (!letters_only_Regex.test(dataPackage.firstName)) ? "Given name is invalid! Only accept english letter!" : alertMsg
      alertMsg = (dataPackage.firstName.length === 0) ? "Please insert Your Given Name!" : alertMsg

      // Check student lastname is Valid
      alertMsg = (!letters_only_Regex.test(dataPackage.lastName)) ? "Family name is invalid! Only accept english letter!" : alertMsg
      alertMsg = (dataPackage.lastName.length === 0) ? "Please insert Your Family Name!" : alertMsg

      return alertMsg
    },
}
