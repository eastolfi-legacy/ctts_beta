'use strict';

/* Controllers */
function DiscografiaCtrl($scope) {
    $scope.collapsedItems = {'Maqueta' : true, 'Disco_1' : true, 'Live' : true};
    $scope.open = function(parent, item) {
        $scope.shouldBeOpen = true;
        $scope.selectedParent = parent;
        $scope.selectedItem = item;
    }
    $scope.close = function() {
        $scope.closeMsg = 'I was closed at: ' + new Date();
        $scope.shouldBeOpen = false;
    }
    $scope.opts = {
        backdropFade: true,
        dialogFade:true
    };

    $scope.mCollapse = function(itemId) {
        $scope.collapsedItems[itemId] = !$scope.collapsedItems[itemId];
    }
    var maqueta = ['Track 1', 'Track 2', 'Track 3'];
    var disco1 = ['Cancion 1', 'Cancion 2'];
    var live = ['Intro', 'Cancion 1', 'Cancion 2', 'Ending'];
    var discos = {'Maqueta':maqueta, 'Disco_1':disco1, 'Live':live};
    $scope.discos = discos;
}

//function PhoneListCtrl($scope, Phone) {
////  $http.get('phones/phones.json').success(function(data) {
////    $scope.phones = data;
////  });
//
//    $scope.phones = Phone.query();
//    $scope.orderProp = 'age';
//}

//PhoneListCtrl.$inject = ['$scope', '$http'];

//function Controller($scope) {
//    $scope.test = true;
//    $scope.toggle = function(){ $scope.test = !$scope.test;  };
//}

//function PhoneDetailCtrl($scope, $routeParams, Phone) {
////  $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
////        $scope.phone = data;
////        $scope.mainImageUrl = data.images[0];
////  });
//    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//        $scope.mainImageUrl = phone.images[0];
//    });
//    $scope.setImage = function(imageUrl) {
//        $scope.mainImageUrl = imageUrl;
//    }
//}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];
