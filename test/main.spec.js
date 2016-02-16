var assert = chai.assert;
var expect = chai.expect;

describe("The Address Book App", function () {
  
  describe('Contact Service', function (){

    it("has a array of Contacts", function () {
      module('AddressBook')
      inject(function ($injector) {
        contactService = $injector.get('contactService');  
      });

      expect(contactService.contacts).to.be.an('array');

    })

  });

})