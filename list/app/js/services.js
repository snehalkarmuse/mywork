
myModule.service("shoppingListService",function(){
    var shoppingLists = [];

    var STORAGE_ID = 'shoppinglist-snehal';

    this._getFromLocalStorage=function() {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        //this method have id called storage_id as a key. If shoppingList is empty then create array or item is there then
        //get the key and store items.
    };

    this._saveToLocalStorage=function(listOfList) {
        localStorage.setItem(STORAGE_ID, JSON.stringify(listOfList));
    };


    var selectedList={items:[]};
    this.getAllShoppingList=function(){
        shoppingLists = this._getFromLocalStorage();
        return shoppingLists;
    };

    this.saveAllShoppingList=function(listOfList){
        shoppingLists = listOfList;
       this._saveToLocalStorage(listOfList)
    };

    this.saveShoppingList = function(shoppingList){
        for (var i = 0; i < shoppingLists.length; i++) {
            if (shoppingLists[i].name == shoppingList.name) {
                shoppingLists[i]= shoppingList;
            }
        }
       this._saveToLocalStorage(shoppingLists);
    };

    this.getLengthOfShoppingList=function(){
      return shoppingLists.length;
    };
});

