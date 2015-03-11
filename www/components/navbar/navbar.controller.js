System.register([], function (_export) {
  var _classCallCheck, NavbarCtrl;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      /*jshint esnext: true */

      NavbarCtrl = function NavbarCtrl($scope) {
        _classCallCheck(this, NavbarCtrl);

        $scope.date = new Date();
      };

      NavbarCtrl.$inject = ["$scope"];

      _export("default", NavbarCtrl);
    }
  };
});
//# sourceMappingURL=../../components/navbar/navbar.controller.js.map