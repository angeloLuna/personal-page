(function() {
    'use strict'

    var indexView = {
        controller: indexCtrl,
        templateUrl: 'app/partials/index.html'
    }
    
    angular
        .module('personal')
        .component('indexView', indexView)

        function indexCtrl() {
            var first = this;
        }
})();