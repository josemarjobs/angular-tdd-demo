angular.module('AddressBook', [])
.service('contactService', ['$http', function($http){
  this.contacts = [];
  
  $http.get('http://localhost:9001/contacts', function (res) {
    console.log(res);
  });

}]);