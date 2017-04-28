var ngapp = angular.module('ngapp', ['ngMaterial', 'angularGrid']);

ngapp.controller('MainCtrl', function ($scope, $mdToast, $http, $q) {
    var vm = this;

    $scope.yarns = [
        { id: '', lable: 'ALL' },
        { id: '1', lable: '(80/2)/2' },
        { id: '2', lable: '10' },
        { id: '3', lable: '10/10' },
        { id: '4', lable: '10/2' },
        { id: '5', lable: '10/20' },
        { id: '6', lable: '10/3' },
        { id: '7', lable: '10/30' },
        { id: '8', lable: '10/5' },
        { id: '9', lable: '10\40D' },
        { id: '10', lable: '10\70D' },
        { id: '11', lable: '100' },
        { id: '12', lable: '100/100' },
        { id: '13', lable: '100/2' },
        { id: '14', lable: '100/3' },
        { id: '15', lable: '1000D' },
        { id: '16', lable: '100D' },
        { id: '17', lable: '100D/144F' },
        { id: '18', lable: '100D/288F' },
        { id: '19', lable: '100D/32FT80' },
        { id: '20', lable: '100D/36F' },
        { id: '21', lable: '100D/48F' },
        { id: '22', lable: '100DT400' },
        { id: '23', lable: '11/3' },
        { id: '24', lable: '110D' },
        { id: '25', lable: '115D' },
        { id: '26', lable: '12' },
        { id: '27', lable: '12/12' },
        { id: '28', lable: '12/2' },
        { id: '29', lable: '12/3' },
        { id: '30', lable: '12/30' },
        { id: '31', lable: '120' },
        { id: '32', lable: '120/2' },
        { id: '33', lable: '120/3' },
        { id: '34', lable: '120D' },
        { id: '35', lable: '124/2' },
        { id: '36', lable: '128D' },
        { id: '37', lable: '129D' },
        { id: '38', lable: '12B' },
        { id: '39', lable: '1300D' },
        { id: '40', lable: '130D' },
        { id: '41', lable: '130D/96F' },
        { id: '42', lable: '133D' },
        { id: '43', lable: '135D' },
        { id: '44', lable: '138D' },
        { id: '45', lable: '14' },
        { id: '46', lable: '14/14' },
        { id: '47', lable: '14/2' },
        { id: '48', lable: '14/32' },
        { id: '49', lable: '140/2' },
        { id: '50', lable: '140D' },
        { id: '51', lable: '140D/48F' },
        { id: '52', lable: '15\70D' },
        { id: '53', lable: '150D' },
        { id: '54', lable: '150D/144F' },
        { id: '55', lable: '150D/2' },
        { id: '56', lable: '155D' },
        { id: '57', lable: '16' },
        { id: '58', lable: '16/16' },
        { id: '59', lable: '16/2' },
        { id: '60', lable: '16/40' },
        { id: '61', lable: '16\40D' },
        { id: '62', lable: '16\70D' },
        { id: '63', lable: '160D' },
        { id: '64', lable: '17' },
        { id: '65', lable: '170/2' },
        { id: '66', lable: '18' },
        { id: '67', lable: '20' },
        { id: '68', lable: '20/2' },
        { id: '69', lable: '20/20' },
        { id: '70', lable: '20/20\70D' },
        { id: '71', lable: '20/3' },
        { id: '72', lable: '20/32' },
        { id: '73', lable: '20/40' },
        { id: '74', lable: '20/60' },
        { id: '75', lable: '20/8' },
        { id: '76', lable: '20\40D' },
        { id: '77', lable: '20\70D' },
        { id: '78', lable: '200/2' },
        { id: '79', lable: '200D' },
        { id: '80', lable: '20D\20D' },
        { id: '81', lable: '21' },
        { id: '82', lable: '21/2' },
        { id: '83', lable: '21\40D' },
        { id: '84', lable: '222D' },
        { id: '85', lable: '23' },
        { id: '86', lable: '24' },
        { id: '87', lable: '24/2' },
        { id: '88', lable: '24/30' },
        { id: '89', lable: '240D' },
        { id: '90', lable: '25' },
        { id: '91', lable: '25/2' },
        { id: '92', lable: '25/25' },
        { id: '93', lable: '25/50' },
        { id: '94', lable: '26' },
        { id: '95', lable: '28' },
        { id: '96', lable: '290D' },
        { id: '97', lable: '30' },
        { id: '98', lable: '30/2' },
        { id: '99', lable: '30/20' },
        { id: '100', lable: '30/3' },
        { id: '101', lable: '30/30' },
        { id: '102', lable: '30/50' },
        { id: '103', lable: '30\30DT400' },
        { id: '104', lable: '30\40D' },
        { id: '105', lable: '30\42DX' },
        { id: '106', lable: '30\70D' },
        { id: '107', lable: '300/3' },
        { id: '108', lable: '300D' },
        { id: '109', lable: '305/3' },
        { id: '110', lable: '30D' },
        { id: '111', lable: '32' },
        { id: '112', lable: '32/2' },
        { id: '113', lable: '32/3' },
        { id: '114', lable: '32/32' },
        { id: '115', lable: '32\68D' },
        { id: '116', lable: '32+68D' },
        { id: '117', lable: '320/4' },
        { id: '118', lable: '325D' },
        { id: '119', lable: '330/3' },
        { id: '120', lable: '34' },
        { id: '121', lable: '34D/6F' },
        { id: '122', lable: '35' },
        { id: '123', lable: '35/2' },
        { id: '124', lable: '36' },
        { id: '125', lable: '36/2' },
        { id: '126', lable: '4.5' },
        { id: '127', lable: '40' },
        { id: '128', lable: '40/2' },
        { id: '129', lable: '40/20' },
        { id: '130', lable: '40/3' },
        { id: '131', lable: '40/30' },
        { id: '132', lable: '40/40' },
        { id: '133', lable: '40/40\40D' },
        { id: '134', lable: '40/50' },
        { id: '135', lable: '40/60' },
        { id: '136', lable: '40\20D' },
        { id: '137', lable: '40\30DX' },
        { id: '138', lable: '40\40D' },
        { id: '139', lable: '40\40D/2' },
        { id: '140', lable: '40\40D/40\40D' },
        { id: '141', lable: '40\40DX' },
        { id: '142', lable: '40\42D' },
        { id: '143', lable: '40\42DX' },
        { id: '144', lable: '40\55DX' },
        { id: '145', lable: '40\70D' },
        { id: '146', lable: '40\70DX' },
        { id: '147', lable: '40\75D' },
        { id: '148', lable: '40\75DX' },
        { id: '149', lable: '40+40D' },
        { id: '150', lable: '40+70D' },
        { id: '151', lable: '40D/12F' },
        { id: '152', lable: '40D/34F' },
        { id: '153', lable: '40D\20D' },
        { id: '154', lable: '44' },
        { id: '155', lable: '44/2' },
        { id: '156', lable: '45' },
        { id: '157', lable: '5' },
        { id: '158', lable: '5.5' },
        { id: '159', lable: '50' },
        { id: '160', lable: '50/2' },
        { id: '161', lable: '50/20' },
        { id: '162', lable: '50/3' },
        { id: '163', lable: '50/30' },
        { id: '164', lable: '50/50' },
        { id: '165', lable: '50\20D' },
        { id: '166', lable: '50\30D' },
        { id: '167', lable: '50\30DX' },
        { id: '168', lable: '50\40D' },
        { id: '169', lable: '50\40D/50' },
        { id: '170', lable: '50\40DX' },
        { id: '171', lable: '50\42D' },
        { id: '172', lable: '50\42DX' },
        { id: '173', lable: '50\70D' },
        { id: '174', lable: '50+100/2' },
        { id: '175', lable: '50+40D' },
        { id: '176', lable: '500D' },
        { id: '177', lable: '50D' },
        { id: '178', lable: '50D/2' },
        { id: '179', lable: '50D/3F' },
        { id: '180', lable: '52/2' },
        { id: '181', lable: '6' },
        { id: '182', lable: '6/6' },
        { id: '183', lable: '60' },
        { id: '184', lable: '60/100' },
        { id: '185', lable: '60/2' },
        { id: '186', lable: '60/3' },
        { id: '187', lable: '60/30' },
        { id: '188', lable: '60/6' },
        { id: '189', lable: '60/60' },
        { id: '190', lable: '60/60\30D' },
        { id: '191', lable: '60/80' },
        { id: '192', lable: '60\30D' },
        { id: '193', lable: '60\30D/2' },
        { id: '194', lable: '60\30D/60\30D' },
        { id: '195', lable: '60\30DX' },
        { id: '196', lable: '60\40D' },
        { id: '197', lable: '60\40DX' },
        { id: '198', lable: '60+120/2' },
        { id: '199', lable: '60D' },
        { id: '200', lable: '60D/3F' },
        { id: '201', lable: '62' },
        { id: '202', lable: '62/2' },
        { id: '203', lable: '67D' },
        { id: '204', lable: '7' },
        { id: '205', lable: '7/2' },
        { id: '206', lable: '70' },
        { id: '207', lable: '70/2' },
        { id: '208', lable: '70/70' },
        { id: '209', lable: '700/8' },
        { id: '210', lable: '70D\20D' },
        { id: '211', lable: '74/2' },
        { id: '212', lable: '75D' },
        { id: '213', lable: '75D/72F' },
        { id: '214', lable: '75DT400' },
        { id: '215', lable: '76D' },
        { id: '216', lable: '8' },
        { id: '217', lable: '8/8' },
        { id: '218', lable: '80' },
        { id: '219', lable: '80/2' },
        { id: '220', lable: '80/2\40D' },
        { id: '221', lable: '80/2+40D' },
        { id: '222', lable: '80/30' },
        { id: '223', lable: '80/32' },
        { id: '224', lable: '80/40' },
        { id: '225', lable: '80/50' },
        { id: '226', lable: '80/75DT400' },
        { id: '227', lable: '80/80' },
        { id: '228', lable: '80\20D' },
        { id: '229', lable: '80\20D/2' },
        { id: '230', lable: '80\20D/2/50' },
        { id: '231', lable: '80\20D/80' },
        { id: '232', lable: '80\20D/80\20D' },
        { id: '233', lable: '80\20DX/2' },
        { id: '234', lable: '83/2' },
        { id: '235', lable: '85/2' },
        { id: '236', lable: '87D' },
        { id: '237', lable: '90' },
        { id: '238', lable: '90/2' },
        { id: '239', lable: '95D' },
        { id: '240', lable: '97D' }];

    $scope.card = {};
    $scope.card.title = 'Esquel';


    $scope.attrCSS = 'float: left; padding: 5px; border: 1px solid #EEEEEE; background-color: #EEEEEE;margin:5px';

    //$scope.defaults.gridNo = 1;
    vm.page = 1;
    vm.pagesize = 20;
    vm.searchYear = 2016;

    vm.shots = [];
    vm.loadingMore = false;
    //vm.selectedID = 123456;

    //search condition
    $scope.SearchInfo = {
        Year: "2016",
        fabricID: '',
        dm: '',
        comboName: '',
        yarnWeft: '',
        yarnWrap: ''
    }

    vm.doSearch = function () {
        vm.page = 0;
        vm.shots = [];
        vm.loadingMore = false;

        vm.loadMoreShots();
        $(".angular-grid-item").css("position", "relative");
    }

    vm.doCopyContent = function (dvId) {

        var ct = $("#dv_" + dvId);

        var item = Office.cast.item.toItemCompose(Office.context.mailbox.item);

        item.body.getTypeAsync(
            function (result) {
                if (result.status != Office.AsyncResultStatus.Failed) {
                    // Successfully got the type of item body.
                    // Set data of the appropriate type in body.
                    if (result.value == Office.MailboxEnums.BodyType.Html) {
                        // Body is of HTML type.
                        // Specify HTML in the coercionType parameter
                        // of setSelectedDataAsync.
                        item.body.setSelectedDataAsync(
                            ct.html(),
                            {
                                coercionType: Office.CoercionType.Html,
                                asyncContext: { var3: 1, var4: 2 }
                            },
                            function (asyncResult) {
                                if (asyncResult.status == Office.AsyncResultStatus.Failed) {
                                    item.subject.setAsync(asyncResult.error.message);
                                }
                            });
                    }
                    else {
                        // Body is of text type. 
                        item.body.setSelectedDataAsync(
                            ct.html(),
                            {
                                coercionType: Office.CoercionType.Text,
                                asyncContext: { var3: 1, var4: 2 }
                            },
                            function (asyncResult) {
                                if (asyncResult.status == Office.AsyncResultStatus.Failed) {
                                    item.subject.setAsync(asyncResult.error.message);
                                }
                            });
                    }
                }
            });
    }

    //
    vm.loadMoreShots = function () {

        if (vm.loadingMore) return;
        vm.page++;
        // var deferred = $q.defer();
        vm.loadingMore = true;

        var promise;
        var wsUrl = 'https://dev-esb.esquel.com:6114/ESB/RequestReply';
        var soapRequest = '';

        if ($scope.SearchInfo.fabricID != '') {
            soapRequest = '<nam:ArrayOfSelectionFilter xmlns:nam="http://www.esquel.com/Product/namespace/">'
                + '<nam:SelectionFilter>'
                + '<nam:AttributeName>ITEM_NUMBER</nam:AttributeName>'
                + '<nam:FilterType>LEAF</nam:FilterType>'
                + '<nam:FilterValue>' + $scope.SearchInfo.fabricID + '</nam:FilterValue>'
                + '<nam:SearchOperator>EQ</nam:SearchOperator>'
                + '</nam:SelectionFilter>'
                + '<nam:pageIndex>' + vm.page + '</nam:pageIndex>'
                + '<nam:pageSize>' + vm.pagesize + '</nam:pageSize>'
                + '</nam:ArrayOfSelectionFilter>';

        } else if ($scope.SearchInfo.comboName != '' || $scope.SearchInfo.yarnWeft != '' || $scope.SearchInfo.yarnWrap != '') {
            //search by Dye_method.
            soapRequest = '<nam:ArrayOfSelectionFilter xmlns:nam="http://www.esquel.com/Product/namespace/">'
                + '<nam:SelectionFilter>'
                //+ '<nam:AttributeName xsi:nil="true"/>'
                + '<nam:FilterType>AND</nam:FilterType>'
                //+ '<nam:FilterValue xsi:nil="true"/>'
                + '<nam:Filters>';
            if ($scope.SearchInfo.comboName != '') {
                soapRequest = soapRequest
                    + '<nam:SelectionFilter>'
                    + '<nam:AttributeName>PartComboName</nam:AttributeName>'
                    + '<nam:FilterType>LEAF</nam:FilterType>'
                    + '<nam:FilterValue>' + $scope.SearchInfo.comboName + '</nam:FilterValue>'
                    //+ '<nam:Filters xsi:nil="true"/>'
                    + '<nam:SearchOperator>EQ</nam:SearchOperator>'
                    + '</nam:SelectionFilter>';
            }

            if ($scope.SearchInfo.yarnWeft != '') {
                soapRequest = soapRequest
                    + '<nam:SelectionFilter>'
                    + '<nam:AttributeName>cn_yarn_count2</nam:AttributeName>'
                    + '<nam:FilterType>LEAF</nam:FilterType>'
                    + '<nam:FilterValue>' + $scope.SearchInfo.yarnWeft + '</nam:FilterValue>'
                    //+ '<Filters xsi:nil="true"/>'
                    + '<nam:SearchOperator>EQ</nam:SearchOperator>'
                    + '</nam:SelectionFilter>';
            }
            if ($scope.SearchInfo.yarnWrap != '') {
                soapRequest = soapRequest
                    + '<nam:SelectionFilter>'
                    + '<nam:AttributeName>cn_yarn_count</nam:AttributeName>'
                    + '<nam:FilterType>LEAF</nam:FilterType>'
                    + '<nam:FilterValue>' + $scope.SearchInfo.yarnWrap + '</nam:FilterValue>'
                    //+ '<Filters xsi:nil="true"/>'
                    + '<nam:SearchOperator>EQ</nam:SearchOperator>'
                    + '</nam:SelectionFilter>';
            }
            soapRequest = soapRequest + '<nam:pageIndex>0</nam:pageIndex> \
                                            <nam:pageSize>0</nam:pageSize> \
                                        </nam:Filters></nam:SelectionFilter>'
                + '<nam:pageIndex>' + vm.page + '</nam:pageIndex>'
                + '<nam:pageSize>' + vm.pagesize + '</nam:pageSize>'
                + '</nam:ArrayOfSelectionFilter>';
        } else {
            //search all result.
            soapRequest = '<nam:ArrayOfSelectionFilter xmlns:nam="http://www.esquel.com/Product/namespace/">'
                + '<nam:pageIndex>' + vm.page + '</nam:pageIndex>'
                + '<nam:pageSize>' + vm.pagesize + '</nam:pageSize>'
                + '</nam:ArrayOfSelectionFilter>';
        }

        var req = {
            method: 'POST',
            url: wsUrl,
            data: soapRequest,
            headers: {
                "Jms-Destination": "cn.grm.instantNoodle.getFabricPartList",
                "Jms-Timeout": 100
            },
            cache: false
        }

        //http done function
        var doneFun = function (resp) {
            //$("#user").text("Status is definitely:" + status);
            var shotsTmp = angular.copy(vm.shots);

            //shotsTmp = shotsTmp.concat($(data).find("Woven"));
            var x2js = new X2JS();
            var aftCnv = x2js.xml_str2json(resp.data);
            if (aftCnv.ESBWrapperOutput.ResponseObject.ResponseData.Data && aftCnv.ESBWrapperOutput.ResponseObject.ResponseData.Data.FabricItems) {
                promise = aftCnv.ESBWrapperOutput.ResponseObject.ResponseData.Data.FabricItems.Woven;
                shotsTmp = shotsTmp.concat(promise);
                vm.shots = shotsTmp;
                if (!vm.shots[0]) {
                    showError('No Record mathced.');
                } else {
                    showInfo('Esquel Search ' + vm.shots.length + ' Fabric.');
                }
            } else {
                if (typeof aftCnv.ESBWrapperOutput.ResponseObject.ResponseData.Error.errorMsg == String) {
                    msg = 'Web service return error: ' + aftCnv.ESBWrapperOutput.ResponseObject.ResponseData.Error.errorMsg;
                } else {
                    msg = 'Web service return error.';
                }
                showError(msg);
            }

            vm.loadingMore = false;
        };

        //http faild function
        var failedFun = function () {
            vm.loadingMore = false;
        };

        return $http(req).then(doneFun, failedFun);
    };

    showError = function (msg) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(msg)
                .hideDelay(5000)
        );
    }

    showInfo = function (info) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(info)
                .hideDelay(5000)
        );
    }
    //vm.loadMoreShots();

});

ngapp.filter('unsafe', function ($sce) { return $sce.trustAsHtml; });


function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'photo.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}