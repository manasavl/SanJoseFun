angular.module('app.services', [])

.factory('AuthenticationService',['$http', function($http) {
    debugger;
    var baseurl='http://localhost:3000';
    var service={
        baseurl:baseurl
    }
    service.Login=function Login(username, password) {
        console.log("hello from services,username"+username+",password"+password);
        $http.post(baseurl+'/login',{
            username:username,
            password:password
        })
        .success(function(response){
            callback(response);
        });
    };
return service;
}])

.service('httpService', ['$q', '$http', function($q, $http) {
    var geturl = 'http://localhost:3000/events';
    var posturl = 'http://localhost:3000/event';
    var getEvent = 'http://localhost:3000/getEvent/';

    var ret = {
        all: function() {
            var deferred = $q.defer();
            $http.get(geturl).then(function(resp) {
                console.log(resp);
                deferred.resolve(resp.data);
            })
            return deferred.promise;
        },
        add: function(data) {
            var deferred = $q.defer();
            $http.post(posturl, data).then(function(resp) {
                deferred.resolve(resp.data);
            });
            return deferred.promise;
        },
        getEvent: function(data) {
            var deferred = $q.defer();
            $http.get(getEvent + data).then(function(resp) {
                console.log(resp);
                deferred.resolve(resp.data);
            })
            return deferred.promise;
        }
    }
    ret.all();
    return ret;
}])

.service('BlankService', [function() {

}]);


