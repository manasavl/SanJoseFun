angular.module('app.services', [])

.service('httpService', ['$q', '$http', function($q, $http){
    var geturl = 'http://localhost:3000/events';
    var posturl = 'http://localhost:3000/event';
    var getEvent = 'http://localhost:3000/event/';
    var getCategory = 'http://localhost:3000/category/';
    var login = 'http://localhost:3000/login';
    var signup = 'http://localhost:3000/signup';
    var rsvp = 'http://localhost:3000/rsvp';
    var rsvpEvents = 'http://localhost:3000/rsvp/';
    var getLocation = 'http://localhost:3000/location/';
    
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
        getLocationEvents: function(data) {
            var deferred = $q.defer();
            console.log("location: ", data);
            $http.get(getLocation+data).then(function(resp) {
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
        },
        rsvp: function(data) {
            var deferred = $q.defer();
            $http.post(rsvp, data).then(function(resp) {
                console.log(resp);
                deferred.resolve(resp.data);
            });
            return deferred.promise;
        },
        rsvpEvents: function(data) {
            var deferred = $q.defer();
            console.log("user: ", data);
            $http.get(rsvpEvents+data).then(function(resp) {
                console.log(resp);
                deferred.resolve(resp.data);
            })
            return deferred.promise;
        }
    }
    ret.all();
    return ret;
}])

.service('BlankService', [function(){

}]);