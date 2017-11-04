angular.module('app').controller('listsCtrl', function(listFactory){
    console.log('listsCtrl');
    this.lists = listFactory.getlists();

    this.addList = function () {
       //console.log('this.listName', this.listName);
       listFactory.addList(this.listName);
       this.listName = "";
    };
});
