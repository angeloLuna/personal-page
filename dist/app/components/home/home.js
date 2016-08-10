(function() {
    'use strict'

    var homePage = {
        controller: homeCtrl,
        templateUrl: "app/components/home/home.html"
    }
    angular
        .module("personal")
        .component("homePage", homePage);

        function homeCtrl() {
            var home = this;
        }
})();