angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.viewEvents', {
    url: '/viewEvents',
    views: {
      'side-menu21': {
        templateUrl: 'templates/viewEvents.html',
        controller: 'viewEventsCtrl'
      }
    }
  })

  .state('menu.selectLocation', {
    url: '/selectLocation',
    views: {
      'side-menu21': {
        templateUrl: 'templates/selectLocation.html',
        controller: 'selectLocationCtrl'
      }
    }
  })

  .state('menu.registeredEvents', {
    url: '/registeredEvents',
    views: {
      'side-menu21': {
        templateUrl: 'templates/registeredEvents.html',
        controller: 'registeredEventsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
	params: {
		name: "",
		email: "",
		password: "",
		mobile: ""		
},
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.createAnEvent', {
    url: '/createAnEvent',
    views: {
      'side-menu21': {
        templateUrl: 'templates/createAnEvent.html',
        controller: 'createAnEventCtrl'
      }
    }
  })

  .state('menu.selectCategories', {
    url: '/selectCategories',
    views: {
      'side-menu21': {
        templateUrl: 'templates/selectCategories.html',
        controller: 'selectCategoriesCtrl'
      }
    }
  })

  .state('map', {
    url: '/map',
    templateUrl: 'templates/map.html',
    controller: 'mapCtrl'
  })

  .state('menu.eventDetails', {
    url: '/eventDetails',
	params: {
		eventName: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/eventDetails.html',
        controller: 'eventDetailsCtrl'
      }
    }
  })

  .state('menu.categoryEvents', {
    url: '/categoryEvents',
	params: {
		category: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/categoryEvents.html',
        controller: 'categoryEventsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')


});