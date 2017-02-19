angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        
        $routeProvider
        
            .when('/', {
                templateUrl: 'pages/myCourses.html',
                controller: 'CoursesController'
            })
            
            //TODO: optional, second route for landing page instead and allowing other users to create courses
            .when('/home', {
                templateUrl: 'pages/home.html'
            });
    }
]);