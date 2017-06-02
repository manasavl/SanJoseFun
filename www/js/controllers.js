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
   
.controller('registeredEventsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', 'httpService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, httpService) {
    
}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$state', 'httpService', '$cordovaOauth', '$localStorage', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, httpService, $cordovaOauth, $localStorage, $location) {
    $scope.data = {
        email: '',
        password: ''
    }
    $scope.error = '';
    
    $scope.fblogin = function() {
        $scope.error = '';
        $cordovaOauth.facebook("447905615555815", ["email", "user_website", "user_location", "user_relationships"]).then(function(result) {
            console.log(result.access_token);
            $localStorage.accessToken = result.access_token;
            $location.path("/profile");
            $state.go('menu.viewEvents');
        }, function(error) {
            alert("There was a problem signing in!  See the console for logs");
            console.log(error);
        });
    };
    
    $scope.login = function() {
        $scope.error = '';
        var useremail = $scope.data.email;
        var password = $scope.data.password;
        if (useremail && password) {
            httpService.login($scope.data).then(function(res) {
                console.log(res);
                if (res.length === 0) {
                    alert("Looks like you have not signup!");
                    $state.go('signup');
                } else {
                    if (res[0].password === password) {
                        $state.go('menu.viewEvents');
                    } else {
                        var conf = confirm("looks like you forgot password! want help?");
                        if (conf) {
                            alert("Your password is:" + res[0].password);
                        }
                    }
                }
            }, function(err) {
                $scope.error = 'Please check your credentials';
            })
        } else {
            $scope.error = 'Sorry Please enter all the values';
        }
    };
}])
   
.controller('signupCtrl', ['$scope', '$stateParams', 'httpService', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, httpService, $state) {
    
    $scope.data = {
        'name': '',
        'email': '',
        'password': '',
        'confirmpassword': '',
        'mobile': ''
    }
    
    $scope.error='';

    $scope.signup = function(){
        $scope.error = '';
        if ($scope.data.password !== $scope.data.confirmpassword) {
            alert("The password and Confirm Password are mismatch");
        }
        if ($scope.data.password === $scope.data.confirmpassword) {
            signupdata = {
                username: $scope.data.name,
                email: $scope.data.email,
                password: $scope.data.password,
                mobile: $scope.data.mobile
            }
            httpService.signup(signupdata).then(function() {
                $state.go('menu.viewEvents');
            },function(err) {
                $scope.error = 'Username and password did not match';
            });
        }
    };
}])
   
.controller('createAnEventCtrl', ['$scope', '$stateParams', 'httpService', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, httpService, $ionicPopup) {
    $scope.data = {
        eventName: '',
        location: '',
        description: '',
        date: '',
        time: '',
        address: '',
        category: '',
    }
    
    $scope.submitting = false;
    
    $scope.submit = function() {
        $scope.submitting = true;
        httpService.add($scope.data).then(function() {
            $scope.data = {
                eventName: '',
                location: '',
                description: '',
                date: '',
                time: '',
                address: '',
                category: ''
            }
            $scope.submitting = false;
            $ionicPopup.alert({
                title: 'Thank you',
                template: 'Your event is registered'
            })
            $state.go('menu.viewEvents');
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
   
.controller('categoryEventsCtrl', ['$scope', '$stateParams', 'httpService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, httpService) {
    $scope.category = $stateParams.category
    $scope.events = [];
    $scope.loadData = function() {
        httpService.getCategoryEvents($stateParams.category).then(function(res) {
            $scope.events = res;
        })
    }
    $scope.loadData();
}])
 