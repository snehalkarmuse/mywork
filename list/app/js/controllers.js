'use strict';
//myModule.controller("logInController",function($scope,$facebook){
//
//        $scope.isLoggedIn = false;
//        $scope.login = function() {
//            $facebook.login().then(function() {
//                refresh();
//            });
//        };
//        function refresh() {
//            $facebook.api("/me").then(
//                function(response) {
//                    $scope.welcomeMsg = "Welcome " + response.name;
//                    $scope.isLoggedIn = true;
//                },
//                function(err) {
//                    $scope.welcomeMsg = "Please log in";
//                });
//        }
//
//        refresh();
//    });




myModule.controller("showListController",['$scope','$routeParams','shoppingListService', function($scope,$routeParams,shoppingListService) {
    //$scope.shoppingLists=shoppingLists;// $stoarageService.getAllShoppingList()
    $scope.shoppingLists=shoppingListService.getAllShoppingList();
    $scope.addList = function () {
        var newList = {name:$scope.shoppingListName, items: [] };
        $scope.shoppingLists.push(newList);
        $scope.shoppingListName="";
        shoppingListService.saveAllShoppingList($scope.shoppingLists);

    };
}]);

myModule.controller("showListItemController", ['$scope','$routeParams', 'shoppingListService', function($scope,$routeParams,shoppingListService){
    $scope.shoppingLists=shoppingListService.getAllShoppingList();
    var arrayLength=shoppingListService.getLengthOfShoppingList();
    $scope.listSelected;
    for (var i = 0; i < arrayLength; i++) {
        if ($scope.shoppingLists[i].name == $routeParams.listName) {
            $scope.listSelected = $scope.shoppingLists[i];
        }
    }
    $scope.addItem=function(item){
        console.log("call going to service");
        $scope.listSelected.items.push($scope.item);
        $scope.item="";
        console.log($scope.listSelected);
        shoppingListService.saveShoppingList($scope.listSelected);
    };

    $scope.deleteItem=function(item){
        var a=$scope.listSelected.items.indexOf(item);
        $scope.listSelected.items.splice(a,1);
        shoppingListService.saveShoppingList($scope.listSelected);
    }

}]);



