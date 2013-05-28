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

    var content = '<h1>ola ke ase</h1>';

    $scope.panes = [
        { title:"Imágenes", content:content, active: true },
        { title:"Videos", content:"Dynamic content 2" }
    ];
    var maqueta = ['Track 1', 'Track 2', 'Track 3'];
    var disco1 = ['Cancion 1', 'Cancion 2'];
    var live = ['Intro', 'Cancion 1', 'Cancion 2', 'Ending'];
    var discos = {'Maqueta':maqueta, 'Disco_1':disco1, 'Live':live};
    $scope.discos = discos;
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