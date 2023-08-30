!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(self.webpackChunkverifik_sdk_app=self.webpackChunkverifik_sdk_app||[]).push([[592],{89596:function(t,a,s){var c;s.d(a,{u:function(){return h}});var o,i=s(34553),u=s(93096),l=s(26215),f=s(37716),g=s(92930),S=["ft.fsh","ft.ic","zoom.installationID","zoom.lk"],d=(r(c={},FaceTecSDK.FaceTecSessionStatus.CameraNotEnabled,"Camera_error"),r(c,FaceTecSDK.FaceTecSessionStatus.CameraNotRunning,"Camera_error"),r(c,FaceTecSDK.FaceTecSessionStatus.UserCancelled,"Cancel_biometrics"),c),h=((o=function(){function t(n){return e(this,t),this._service=n,this._isReady=new l.X(null),this._auth=new l.X(null),this._liveness=new l.X(null),this._onboardingBiometric=new l.X(null),this._onboardingScan=new l.X(null),this._error=new l.X(null),FaceTecSDK.getStatus()||this._loadConfig(),this}return n(t,[{key:"isReady$",get:function(){return this._isReady.asObservable()}},{key:"auth$",get:function(){return this._auth.asObservable()}},{key:"liveness$",get:function(){return this._liveness.asObservable()}},{key:"onboardingBiometric$",get:function(){return this._onboardingBiometric.asObservable()}},{key:"onboardingScan$",get:function(){return this._onboardingScan.asObservable()}},{key:"error$",get:function(){return this._error.asObservable()}},{key:"getStatus",value:function(){var e=FaceTecSDK.getStatus();return console.group("==== Biometrics ===="),console.info("status",e),console.groupEnd(),e}},{key:"_loadConfig",value:function(){var e=this;S.forEach(function(e){localStorage.removeItem(e)}),indexedDB.deleteDatabase("FTIDB"),FaceTecSDK.setResourceDirectory("/assets/core/sdk/resources"),this._service.getConfig().subscribe(function(t){var n="string"==typeof t.data?JSON.parse(t.data):t.data;(0,u.v6)(FaceTecSDK),FaceTecSDK.initializeInProductionMode(n[0],n[1],n[2],function(t){console.group("==== Biometrics ===="),console.info("LibraryReady",t),console.groupEnd(),t&&(e.currentLanguage=localStorage.getItem("lang")||"es",FaceTecSDK.configureLocalization(u.Mj[e.currentLanguage])),e._isReady.next(t)})})}},{key:"startLanguage",value:function(){var e=localStorage.getItem("lang")||"es";this.currentLanguage!==e&&(this.currentLanguage=e,FaceTecSDK.configureLocalization(u.Mj[e]))}},{key:"_startSession",value:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.startLanguage(),n=FaceTecSDK.createFaceTecAPIUserAgentString(""),t.next=4,new Promise(function(t,r){e._service.getSession(n).subscribe(function(e){return t(e.data)},r)});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t)}))()}},{key:"startAuth",value:function(e){var t=this;return(0,i.Z)(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._startSession();case 2:r=n.sent,new v({externalDatabaseRefId:e,type:"login",token:r,callback:function(e,n){if(e)return t._error.next(e.message);console.log(n),t._auth.next(n)}},t._service);case 4:case"end":return n.stop()}},n)}))()}},{key:"startLiveness",value:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._startSession();case 2:n=t.sent,new v({type:"liveness",token:n,callback:function(t,n){if(t)return e._error.next(t.message);e._liveness.next(n)}},e._service);case 4:case"end":return t.stop()}},t)}))()}},{key:"startEnrollmentBiometrics",value:function(e,t){var n=this;return(0,i.Z)(regeneratorRuntime.mark(function r(){var a;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n._startSession();case 2:a=r.sent,new v({externalDatabaseRefId:e,group:t,type:"match3d2d",token:a,callback:function(e,t){if(e)return n._error.next(e.message);console.log(t),n._onboardingBiometric.next(t)}},n._service);case 4:case"end":return r.stop()}},r)}))()}},{key:"startEnrollmentDocument",value:function(e){var t=this;return(0,i.Z)(regeneratorRuntime.mark(function n(){var r,a,s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=localStorage.getItem("jwtToken")){n.next=3;break}return n.abrupt("return",void console.error("JWT token not found in localStorage"));case 3:return n.next=5,t._startSession();case 5:a=n.sent,s=function(){var e=(0,i.Z)(regeneratorRuntime.mark(function e(n,r){var a,s,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify(n),e.prev=1,e.next=4,fetch("https://remipay.softwow.com.co/data-verify-3d-liveness",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:a});case 4:if((s=e.sent).ok){e.next=7;break}throw new Error("Network response was not ok");case 7:return e.next=9,s.json();case 9:c=e.sent,console.log("Response from server:",c),window.open("https://remipay.softwow.com.co/login"),t._onboardingScan.next(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error("Fetch error:",e.t0),t._error.next(e.t0.message);case 16:case"end":return e.stop()}},e,null,[[1,13]])}));return function(t,n){return e.apply(this,arguments)}}(),new m({externalDatabaseRefId:e,token:a,callback:function(e,n){if(e)return t._error.next(e.message);console.log("adasd",n),s(n,r),t._onboardingScan.next(n)}},t._service);case 8:case"end":return n.stop()}},n)}))()}},{key:"startIdScan",value:function(e){var t=this;return(0,i.Z)(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._startSession();case 2:r=n.sent,new p({externalDatabaseRefId:e,token:r,callback:function(e,n){if(e)return t._error.next(e.message);t._onboardingScan.next(n)}},t._service);case 4:case"end":return n.stop()}},n)}))()}}]),t}()).\u0275fac=function(e){return new(e||o)(f.LFG(g.x))},o.\u0275prov=f.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o),v=function(){function t(n,r){var a=this;e(this,t),this.config=n,this._service=r,this.onFaceTecSDKCompletelyDone=function(){!a.response&&!a.error&&(a.error={message:"BiometricValiation_failed"}),a.config.callback(a.error,a.response)},new FaceTecSDK.FaceTecSession(this,n.token)}return n(t,[{key:"processSessionResultWhileFaceTecSDKWaits",value:function(e,t){var n,r=this;if(FaceTecSDK,e.status!==FaceTecSDK.FaceTecSessionStatus.SessionCompletedSuccessfully)return this.error={message:null!==(n=d[e.status])&&void 0!==n?n:"Session_end"},t.cancel();var a={faceScan:e.faceScan,auditTrailImage:e.auditTrail[0],lowQualityAuditTrailImage:e.lowQualityAuditTrail[0],sessionId:e.sessionId,externalDatabaseRefID:this.config.externalDatabaseRefId};this.config.group&&(a.group=this.config.group);var s=FaceTecSDK.createFaceTecAPIUserAgentString(e.sessionId);this.error=null,this.token=null;var c=function(e){return r.response=e.data,t.proceedToNextStep(e.data.scanResultBlob)},o=function(e){r.error=e.error,t.cancel()};switch(this.config.type){case"login":FaceTecSDK.FaceTecCustomization.setOverrideResultScreenSuccessMessage("Autenticado"),this._service.authenticate(s,a).subscribe(c,o);break;case"match3d2d":FaceTecSDK.FaceTecCustomization.setOverrideResultScreenSuccessMessage("match3d2d"),this._service.photoIDMatch(s,a).subscribe(c,o);break;case"onboarding":FaceTecSDK.FaceTecCustomization.setOverrideResultScreenSuccessMessage("Registro"),this._service.enrollment(s,a).subscribe(c,o);break;case"enrollment3d":FaceTecSDK.FaceTecCustomization.setOverrideResultScreenSuccessMessage("Valido"),this._service.liveness(s,a).subscribe(c,o)}}}]),t}(),m=function(){function t(n,r){var a=this;e(this,t),this.config=n,this._service=r,this.onFaceTecSDKCompletelyDone=function(){!a.response&&!a.error&&(a.error={message:"BiometricValiation_failed"}),a.config.callback(a.error,a.response)},new FaceTecSDK.FaceTecSession(this,this.config.token)}return n(t,[{key:"processSessionResultWhileFaceTecSDKWaits",value:function(e,t){var n,r=this;if(this.latestSessionResult=e,e.status!==FaceTecSDK.FaceTecSessionStatus.SessionCompletedSuccessfully)return this.error={message:null!==(n=d[e.status])&&void 0!==n?n:"Session_end"},t.cancel();var a={faceScan:e.faceScan,auditTrailImage:e.auditTrail[0],lowQualityAuditTrailImage:e.lowQualityAuditTrail[0],sessionId:e.sessionId,externalDatabaseRefID:this.config.externalDatabaseRefId};this.config.group&&(a.group=this.config.group);var s=FaceTecSDK.createFaceTecAPIUserAgentString(e.sessionId);this.error=null,this._service.enrollment(s,a).subscribe(function(e){return FaceTecSDK.FaceTecCustomization.setOverrideResultScreenSuccessMessage("Registro"),t.proceedToNextStep(e.data.scanResultBlob)},function(e){r.error=e.error,t.cancel()})}},{key:"processIDScanResultWhileFaceTecSDKWaits",value:function(e,t){var n=this;if(this.latestIDScanResult=e,e.status===FaceTecSDK.FaceTecIDScanStatus.Success){var r={idScan:e.idScan,sessionId:e.sessionId,externalDatabaseRefID:this.config.externalDatabaseRefId};e.frontImages&&e.frontImages[0]&&(r.idScanFrontImage=e.frontImages[0]),e.backImages&&e.backImages[0]&&(r.idScanBackImage=e.backImages[0]),this.error=null;var a=FaceTecSDK.createFaceTecAPIUserAgentString(this.latestSessionResult.sessionId);this._service.photoIDMatch(a,r).subscribe(function(e){return n.response=e.data,FaceTecSDK.FaceTecCustomization.setOverrideResultScreenSuccessMessage(""),t.proceedToNextStep(e.data.scanResultBlob)},function(e){n.error=e.error,t.cancel()})}else t.cancel()}}]),t}(),p=function(){function t(n,r){var a=this;e(this,t),this.config=n,this._service=r,this.onFaceTecSDKCompletelyDone=function(){!a.response&&!a.error&&(a.error={message:"BiometricValiation_failed"}),a.config.callback(a.error,a.response)},new FaceTecSDK.FaceTecSession(this,this.config.token)}return n(t,[{key:"processIDScanResultWhileFaceTecSDKWaits",value:function(e,t){var n=this;if(e.status===FaceTecSDK.FaceTecIDScanStatus.Success){var r={externalDatabaseRefID:this.config.externalDatabaseRefId,idScan:e.idScan};e.frontImages&&e.frontImages[0]&&(r.idScanFrontImage=e.frontImages[0]),e.backImages&&e.backImages[0]&&(r.idScanBackImage=e.backImages[0]),this.error=null;var a=FaceTecSDK.createFaceTecAPIUserAgentString(e.sessionId);this._service.idScan(a,r).subscribe(function(e){return n.response=e.data,FaceTecSDK.FaceTecCustomization.setOverrideResultScreenSuccessMessage(""),t.proceedToNextStep(e.data.scanResultBlob)},function(e){n.error=e.error,t.cancel()})}else t.cancel()}}]),t}()}}])}();