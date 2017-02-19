angular.module('CoursesCtrl', []).
    controller('CoursesController', function($scope, $http) {
        
        $scope.courseList = { };//Udacity courses
    
        //loads all courses when page is being loaded
        // TODO: good idea to probably cache this too and only retrieve when an update is detected
        $http.get('api/courses').then(successCallback, errorCallback);

        function successCallback(response){
            //success code
            $scope.myCourses = response;
            loadKeywordChips();
            console.log('Keywords in the array: ' + $scope.keywordChips);
            //console.log('Courses loaded through angular http.get: ' + JSON.stringify(response, null, 2));
            console.log('Courses from MongoDB database loaded successfully')
        }
        function errorCallback(error){
            //error code
            console.log('GET Error message from loading courses from MongoDB database: ' + error);
        }
    
        
        //TODO: this needs to be done from search bar
        $scope.createCourse = function() {
            $http.post('api/courses', $scope.COURSEINFORMATION)
                .success(function(data) {
                    $scope.myCourses = data;
                    $scope.COURSEINFORMATION = {};// multiple fields
                    console.log('New course added: ' + data);
                })
                .error(function(data) {
                    console.log('POST Error message from angular: ' + data);
                });
        };
        
        // Gets courses list through AngularJS http request
        // TODO: Use routes API later to cache results and repeat GET request once a week
//        if( angular.equals({}, $scope.courseList) ) {
//            
//            $http({
//                method: 'GET',
//                url: 'http://www.udacity.com/public-api/v0/courses'
//            }).then(function successCallback(response) {
//                // this callback will be called asynchronously
//                // when the response is available
//                $scope.courseList = response.data;// assign global variable
//                    console.log("AngularJS Udacity Courses call success!");
//                }, 
//                function errorCallback(response) {
//                    // called asynchronously if an error occurs
//                    // or server returns response with an error status.
//                    console.log("AngularJS Udacity Courses call error: " + JSON.stringify(response, null, 2));
//            });
//        }
        
        /** Card Logic **/
        
        $scope.keywordChips = [];

        // Eliminates duplicates from list
        var loadKeywordChips = function() {
            
            var duplicates = {};
            var word = '';
            for(course in $scope.myCourses.data) {
                for(keyword in $scope.myCourses.data[course].keywords) {
                    word = $scope.myCourses.data[course].keywords[keyword]; // keyword to be added to list
                    // if keyword has been seen before, skip this block of code
                    if(duplicates[word] !== 1) {
                        duplicates[word] = 1;
                        $scope.keywordChips.push(word);
                    }
                    
                }
            }  
        };
        
        $scope.getLevel = function(levelString) {
            if(levelString === "beginner") {
                return new Array(1);
            } else if(levelString === "intermediate") {
                return new Array(2);
            } else {
                return new Array(3);
            }
        };
    
    
        $scope.getMatches = function(searchQuery) {
            return searchQuery;
        }
        
        /** End of Card Logic **/
    
    });