'use strict';

/* Controllers */
function DiscografiaCtrl($scope, $http) {
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

    $scope.panesContent = ['', ''];
    $scope.panes = [
        { title:"Imágenes", content:$scope.panesContent[0], active: true },
        { title:"Videos", content:$scope.panesContent[1] }
    ];
    var maqueta = ['Track 1', 'Track 2', 'Track 3'];
    var disco1 = ['Cancion 1', 'Cancion 2'];
    var live = ['Intro', 'Cancion 1', 'Cancion 2', 'Ending'];
    var discos = {'Maqueta':maqueta, 'Disco_1':disco1, 'Live':live};
    $scope.discos = discos;

    var urlDev = 'http://localhost:3000/discos';
    var urlProd = 'http://ctts_server.eastolfi.c9.io/discos';

    $http({
            method: 'GET',
            url: urlProd,
            contentType: 'jsonp',
            headers: {'Access-Control-Allow-Origin' : '*'}
    }).success(function(date) {
        alert(JSON.parse(data[0]));
    });
}


function ContentCtrl($scope, $http) {
    $scope.url = 'content.json';
    $scope.content = [];

    $scope.fetchContent = function() {
        $http.get($scope.url).then(function(result){
            $scope.content = result.data;
        });
    }

    $scope.fetchContent();
}