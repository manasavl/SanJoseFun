angular.module('app.controllers', [])
  
.controller('viewEventsCtrl', ['$scope', '$stateParams', 'httpService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, httpService) {
    $scope.events = [];
    $scope.loadData = function() {
        httpService.all().then(function(res) {
            $scope.events = res;
        })
    }
    $scope.loadData();
}])
   
.controller('selectLocationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('myFavoritesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('createAnEventCtrl', ['$scope', '$stateParams', 'httpService', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, httpService, $ionicPopup) {
    $scope.data = {
        eventName: '',
        location: '',
        description: '',
        time: '',
        category: 'Education',
    }
    
    $scope.submitting = false;
    
    $scope.submit = function() {
        $scope.submitting = true;
        httpService.add($scope.data).then(function() {
            $scope.data = {
                eventName: '',
                location: '',
                description: '',
                time: '',
                category: 'Education'
            }
            $scope.submitting = false;
            $ionicPopup.alert({
                title: 'Thank you',
                template: 'Your event is registered'
            })
        });
    }
}])
   
.controller('selectCategoriesCtrl', ['$scope', '$stateParams', 'httpService', 'categories', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, httpService, categories) {
   $scope.categories = categories.categories;
}])
   
.controller('mapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('eventDetailsCtrl', ['$scope', '$stateParams', 'httpService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, httpService) {
    $scope.eventName = $stateParams.eventName;
    $scope.eventDetails = [];
    $scope.loadData = function() {
        httpService.getEvent($stateParams.eventName).then(function(res) {
            $scope.eventDetails = res;
        })
    }
    $scope.loadData();
}])
   
.controller('categoryEventsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.category = $stateParams.category
}])
 