angular.module('app.services', [])

.service('httpService', ['$q', '$http', function($q, $http){
    var geturl = 'http://127.0.0.1:3000/events';
    var posturl = 'http://127.0.0.1:3000/event';
    var getEvent = 'http://127.0.0.1:3000/event/';
    var getCategory = 'http://127.0.0.1:3000/category/';
    var login = 'http://127.0.0.1:3000/login';
    var signup = 'http://127.0.0.1:3000/signup';
    
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
            console.log("eventName: ", data);
            $http.get(getEvent+data).then(function(resp) {
                console.log(resp);
                deferred.resolve(resp.data);
            })
            return deferred.promise;
        },
        getCategoryEvents: function(data) {
            var deferred = $q.defer();
            console.log("categoryName: ", data);
            $http.get(getCategory+data).then(function(resp) {
                console.log(resp);
                deferred.resolve(resp.data);
            })
            return deferred.promise;
        },
        login: function(data) {
            var deferred = $q.defer();
            $http.post(login, data).then(function(resp) {
                deferred.resolve(resp.data);
            });
            return deferred.promise;
        },
        signup: function(data) {
            var deferred = $q.defer();
            $http.post(signup, data).then(function(resp) {
                console.log(resp);
                deferred.resolve(resp.data);
            });
            return deferred.promise;
        }
    }
    ret.all();
    return ret;
}])

.service('BlankService', [function(){

}]);