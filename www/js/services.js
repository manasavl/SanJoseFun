angular.module('app.services', [])

.service('httpService', ['$q', '$http', function($q, $http){
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
            $http.get(getEvent+data).then(function(resp) {
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