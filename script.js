angular.module('Register', [])
.controller('RegController', ['$scope', function($scope) {
  $scope.business = {};

  $scope.update = function(bus) {
    $scope.business = angular.copy(bus);
    console.log($scope.business);
  };

  $scope.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.bus = angular.copy($scope.business);
  };

  $scope.reset();
}])
.directive("passwordStrength", function(){
  return{
    restrict:"A",
    link:function(scope,element,attrs){
      scope.$watch(attrs.passwordStrength, function(value){
        console.log(value);
        if(angular.isDefined(value)){
          if(value.length>8){
            scope.strength = 'strong';
          }else if(value.length>3 && value.length<=8){
            scope.strength = 'medium';
          }else{
            scope.strength = 'weak';
          }
        }
      });
    }
  };
});