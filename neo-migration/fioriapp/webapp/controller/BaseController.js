sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/m/library"],function(e,t,r){"use strict";return e.extend("ns.manageproductsneo.controller.BaseController",{getRouter:function(){return t.getRouterFor(this)},getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},onShareEmailPress:function(){var e=this.getModel("objectView")||this.getModel("worklistView");r.URLHelper.triggerEmail(null,e.getProperty("/shareSendEmailSubject"),e.getProperty("/shareSendEmailMessage"))}})});