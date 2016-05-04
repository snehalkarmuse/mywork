describe('TODO list', function() {
//    beforeEach(function() {
//        browser.get('list/app/index.html#/allList');
//    });

    it('should add a todo', function() {
        browser.get('list/app/index.html#/allList');
        element(by.model('shoppingListName')).sendKeys('newList');
        element(by.css('.button')).click();
        var todoList = element.all(by.repeater('list in shoppingLists'));
        expect(todoList.count()).toEqual(1);

        element(by.binding('list.name')).click();
//        element(by.css('.textDeco')).click();
        element(by.model('item')).sendKeys('newItem1');
        element(by.css('.button')).click();
        element(by.model('item')).sendKeys('newItem2');
        element(by.css('.button')).click();
        var listItem = element.all(by.repeater('item in listSelected.items'));
        expect(listItem.count()).toEqual(2);

//        expect(todoList.get(1).getText()).toEqual('newList');

    });
});