sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/Filter'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter) {
        "use strict";

        return Controller.extend("z03sesd1.controller.Main", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel()
                this.getView().setModel(oModel,'main'); 

                this.getView().bindElement("/CustomerSet(Cust_Id=${C00000001}");
                // var oDataModel = this.getView().getModel();
                // var oFilter = new Filter('Cust_Id', 'EQ', 'C00000001');    
                // var oMainModel = this.getView().getModel('main');
                // debugger;
                // oDataModel.read("/OrderHSet",{
               
                //     filters: {oFilter} , //sap.ui.model.Filter[] 배열에 필터 객체 여러개 넣을 수 있음
                //     success: function(oReturn){
                //       oMainModel.setProperty("", oReturn.results);
                //     }.bind(this)
                // })
                // this.getView().byId("idOrderTable").getBinding("items").filter(oFilter);
            },
           
            //클릭하는 데이터 갖고오기
            itemEvent: function(oEvent){
                //해당하는 obj의 order_num 필요
                debugger;
                    var oOrdNM=oEvent.getParameters().data[0].data.OrderNum;
                    var oRouter = this.getOwnerComponent().getRouter(); 
                    oRouter.navTo('RouteDetail', { 
                      OrderNum : oOrdNM
                    })
            },
			fnDateToString: function(value){
                //데이터 화면 출력 전에 formatter 함수 거쳐서
                if(value){ //value값 있는 경우에만 실행

                    var oFormat = sap.ui.core.format.DateFormat.getDateInstance({
                        pattern:'yyyy-MM-dd'
                    }); //pattern이라는 parameter 사용
                    return oFormat.format(value);
                }},

            ButtonPress




        });
    });
