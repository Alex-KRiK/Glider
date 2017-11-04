angular.module("app").controller("listCtrl", function (listFactory) {
    //console.log("listCrtl");
    this.removeList = function (list) {
        listFactory.removeList(list);
    };
});
