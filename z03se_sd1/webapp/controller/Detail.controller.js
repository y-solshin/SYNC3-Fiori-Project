sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/Filter'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter) {
        "use strict";

        return Controller.extend("z03sesd1.controller.Detail", {
            onInit: function () {
            
               var oRouter = this.getOwnerComponent().getRouter();
               oRouter.getRoute('RouteDetail').attachPatternMatched(this._patterMatched, this);
             
            },
            patternMatched:function(){
                var oArgu = oEvent.getParameters().arguments
                if (!oArgu){
                    oArgu = {OrderNum: ''} //임시로 값 넣어 확인해보기
                }
                // oArgu => {OrderNum: ''}

                this.byId('idTitle').setTitle('Order번호'+oArgu.OrderNum);
                var oDeliv = this.byId('idDelivStatus').getValue();
                if(oDeliv=1){
                    this.getView().byId('idIcon').setSrc('sap-icon://decline');
                    this.getView().byId('idDeliv').setText('주문취소');
                }else if(oDeliv=4){
                    this.getView().byId('idIcon').setSrc('sap-icon://shipping-status');
                    this.getView().byId('idDeliv').setText('출고');
                }else{
                    this.getView().byId('idIcon').setSrc('sap-icon://activity-assigned-to-goal');ㄴ
                    this.getView().byId('idDeliv').setText('상품준비중');
                };

                this.getView().bindElement(`/OrderSet(${oArgu.OrderNum})`);

            }
     
		


        });
    });
