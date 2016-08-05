(function(){
  'use strict';

  angular
    .module("personal")
    .factory("expData", expData);

  expData.$inject = ["$resource"]

  function expData($resource){
    return $resource("server/experience.json",{},{});
  }

})();