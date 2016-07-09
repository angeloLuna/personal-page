(function() {
    'use strict'

    var simpleCard = {
        controller: cardCtrl,
        templateUrl: 'app/partials/card.html'
    }

    angular
        .module('personal')
        .component('simpleCard', simpleCard);

        function cardCtrl(){
            var first = this;
        }
})();