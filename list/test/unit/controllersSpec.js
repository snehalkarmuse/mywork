describe('showListController', function(){
    var mockShoppingListService, ctrlFactory, $scope;
    beforeEach(module('myModule'));

    beforeEach(inject(function($rootScope, $controller) {

        mockShoppingListService = {
            getAllShoppingList: function() {},
            saveAllShoppingList:function(){}
        };

        $scope = $rootScope.$new();
        ctrlFactory = $controller;

    }));

    it('should create shopping list with 2 items',function(){
        var ctrl;
        spyOn(mockShoppingListService, 'getAllShoppingList').andReturn([{name: 'list1', items:[]}, {name: 'list2', items:[]}]);
        ctrl = ctrlFactory('showListController', {$scope: $scope , shoppingListService: mockShoppingListService });
        expect($scope.shoppingLists.length).toBe(2);
    });

    it('should create shopping list with 1 items',function(){
        var ctrl;
        spyOn(mockShoppingListService, 'getAllShoppingList').andReturn([{name: 'list1', items:[]}]);
        ctrl = ctrlFactory('showListController', {$scope: $scope , shoppingListService: mockShoppingListService });
        expect($scope.shoppingLists.length).toBe(1 );
    });

    it('should add item',function(){
        var ctrl,newItem;
        spyOn(mockShoppingListService, 'getAllShoppingList').andReturn([]);
        ctrl = ctrlFactory('showListController', {$scope: $scope,shoppingListService: mockShoppingListService});
        $scope.shoppingListName="newList";
        $scope.addList();

        expect($scope.shoppingLists.length).toBe(1);
        expect($scope.shoppingLists[0].name).toBe("newList");

    });


});

