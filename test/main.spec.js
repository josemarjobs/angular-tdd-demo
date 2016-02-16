var assert = chai.assert;
var expect = chai.expect;

describe("The Address Book App", function () {
  
  describe('Contact Service', function () {
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

  describe("Contact Controller", function () {
    
    beforeEach(function () {
      module("AddressBook");
      inject(function ($injector, $rootScope) {
        $scope = $rootScope.$new();
        contactService = $injector.get('contactService');
        $httpBackend = $injector.get('$httpBackend')
        $controller = $injector.get('$controller');
      });
    });

    it("stores an array of contacts in scope", function () {
      $controller('ContactController', {
        contactService: contactService,
        $scope: $scope
      });

      assert.isArray($scope.contacts);
    })

  });

  describe("Proper Filter", function () {
    beforeEach(function () {
      module('AddressBook');
      inject(function ($injector) {
        proper = $injector.get('$filter')('proper');
      })
    })

    it ("proper cases a string", function () {
      expect(proper("ned stark")).to.equal('Ned Stark');
      expect(proper("peter Griffin")).to.equal('Peter Griffin');
      expect(proper("Lois Griffin")).to.equal('Lois Griffin');
    });

    it ("takes a number and return as a string", function () {
      expect(proper(42)).to.equal('42');
    });

    it ("throws an error on an incompatible type", function () {
      assert.throws(function () {
        proper([1, 2, 3]);
      })
    });

  })

  describe("Avatar Directive", function () {
    beforeEach(function () {
      module('AddressBook')
    })

    it ("displays the first letter of the name capitalized", function () {
      inject(function ($rootScope, $compile) {
        $rootScope.contact = {name: "peter"};
        var element = $compile('<avatar name=contact.name/>')($rootScope);
        $rootScope.$digest();
        var directiveText = element.text();
        expect(directiveText).to.equal("P");
      });

    });

  })
})












