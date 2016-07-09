(function() {
    'use strict'

    var bio = {
        controller: bioCtrl,
        templateUrl: 'app/partials/bio.html'
    }

    angular
        .module('personal')
        .component('bioTag', bio)

        function bioCtrl() {
            bio = this;
        }
})();