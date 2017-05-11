angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.viewEvents', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/viewEvents.html',
        controller: 'viewEventsCtrl'
      }
    }
  })

  .state('menu.selectLocation', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/selectLocation.html',
        controller: 'selectLocationCtrl'
      }
    }
  })

  .state('menu.myFavorites', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myFavorites.html',
        controller: 'myFavoritesCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.signup', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('menu.createAnEvent', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/createAnEvent.html',
        controller: 'createAnEventCtrl'
      }
    }
  })

  .state('menu.selectCategories', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/selectCategories.html',
        controller: 'selectCategoriesCtrl'
      }
    }
  })

  .state('map', {
    url: '/page8',
    templateUrl: 'templates/map.html',
    controller: 'mapCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page4')

  

});