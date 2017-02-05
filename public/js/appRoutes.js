angular.module('appRoutes', []).config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider
        
            .when('/', {
                templateUrl: 'pages/myCourses.html',
                controller: 'CoursesController'
            });
            
            //TODO: optional, second route for landing page instead and allowing other users to create courses
            //.when()
    }
]);






// Taken from other previouse project
//
//angular.module('example').config(['$routeProvider',
//    function($routeProvider) {
//        $routeProvider. 
//        when('/', {
//            templateUrl: 'example/views/example.client.view.html'
//        }). 
//        otherwise({
//            redirectTo: '/'//if it's a dead link, send 
//                           //send them to previous page
//        });
//    }
//]);