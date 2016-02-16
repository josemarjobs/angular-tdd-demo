var assert = chai.assert;
var expect = chai.expect;

describe("The Address Book App", function () {
  
  describe('Contact Service', function (){
    beforeEach(function () {
      module('AddressBook')
      inject(function ($injector) {
        contactService = $injector.get('contactService');
        $httpBackend = $injector.get('$httpBackend');
      });
    });

    it("has a array of Contacts", function () {
      expect(contactService.contacts).to.be.an('array');
    });

    it("calls the /contacts route", function () {
      $httpBackend.expectGET('http://localhost:9001/contacts')
        .respond(200, []);
      $httpBackend.flush();
    });

  });

})