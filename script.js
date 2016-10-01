/**
 * Created by fzoozai on 01/10/2016.
 */

(function () {

        var app = angular.module("githubViewer", []);

        var MainCtrl = function ($scope, $http) {
            var onUserComplete = function (response) {
                $scope.user = response.data;
            }
            var onError = function (reason) {
                $scope.error= "Could not fetch user! :("
            }

            $scope.search = function(username){
                $http.get("http://api.github.com/users/" + username)
                    .then(onUserComplete, onError);
            }

            $http.get("http://api.github.com/users/angular")
            .then(onUserComplete);


            $scope.username = "angular";
            $scope.message = "Github Viewer"


        };

        app.controller("MainCtrl", ["$scope", "$http", MainCtrl]);

}());
