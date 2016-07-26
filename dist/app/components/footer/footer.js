(function() {
    'use strict'

    var footer= {
        controller: footerCtrl,
        templateUrl: 'app/components/footer/footer.html'
    }

    angular
        .module('personal')
        .component('customFooter', footer)

        function footerCtrl(){
            var first= this;
        }
})();