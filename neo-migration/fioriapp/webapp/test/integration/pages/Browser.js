sap.ui.define(["sap/ui/test/Opa5","./Common"],function(t,s){"use strict";t.createPageObjects({onTheBrowser:{baseClass:s,actions:{iPressOnTheBackwardsButton:function(){return this.waitFor({success:function(){t.getWindow().history.back()}})},iPressOnTheForwardsButton:function(){return this.waitFor({success:function(){t.getWindow().history.forward()}})},iChangeTheHashToSomethingInvalid:function(){return this.waitFor({success:function(){t.getHashChanger().setHash("somethingInvalid")}})},iChangeTheHashToTheRememberedItem:function(){return this.waitFor({success:function(){var s=this.getContext().currentItem.id;t.getHashChanger().setHash("Products/"+s)}})}},assertions:{}}})});