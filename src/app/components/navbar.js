(function () {
    'use strict'

    var navbar = {
        controller: navCtlr,
        templateUrl: "app/partials/navbar.html"
}
    angular
        .module('personal')
        .component('navBar', navbar);

    function navCtlr(){
        var first = this;

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
    }


})();