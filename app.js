/**
 * Created by KoulSlou on 02/12/15.
 */


(function(){

    var gem = { name: 'Azurite', price: 2.95};
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function(){
        this.product = gem;
    });

})();

