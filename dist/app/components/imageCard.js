(function () {
    'use strict'

    var imageCard = {
        controller: cardCtlr,
        templateUrl: "app/partials/imageCard.html"
}
    angular
        .module('personal')
        .component('imageCard', imageCard);

    function cardCtlr(){
        var first = this;
    }


})();