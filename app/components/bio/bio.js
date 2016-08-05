(function() {
    'use strict'

    var bio = {
        controller: bioCtrl,
        templateUrl: 'app/components/bio/bio.html'
    }


        function bioCtrl(expData) {
            var bio = this;

            bio.exp = null;

            expData.query()
            .$promise
                .then(function(response){
                    bio.exp = response;
                    console.log(bio.exp);
                })

        }

    angular
        .module('personal')
        .component('bioTag', bio)
})();