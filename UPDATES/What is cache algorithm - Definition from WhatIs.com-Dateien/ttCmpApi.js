function ttCmpApi(){if("object"==typeof ttCmpApi.instance)return ttCmpApi.instance;ttCmpApi.instance=this;var e,t={"www.brianmadden.com":1011,"*.brighthand.com":1119,"*.computerweekly.com":1013,"*.digitalcamerareview.com":1118,"*.lemagit.fr":1014,"*.notebookreview.com":1116,"*.searchdatacenter.de":1015,"*.searchenterprisesoftware.de":1016,"*.searchnetworking.de":1017,"*.searchsecurity.de":1018,"*.searchstorage.de":1019,"*.tabletpcreview.com":1117,"*.technologyguide.com":1115,"*.techtarget.de":1157,"*.techtarget.fr":1156,"*.theserverside.com":1020,"devopsagenda.techtarget.com":1051,"internetofthingsagenda.techtarget.com":1052,"itknowledgeexchange.techtarget.com":1053,"search400.techtarget.com":1054,"searchapparchitecture.techtarget.com":4375,"searchaws.techtarget.com":2579,"searchAWS.techtarget.com":1055,"searchbusinessanalytics.techtarget.com":1056,"searchcio.techtarget.com":1057,"searchcloudapplications.techtarget.com":1058,"searchcloudcomputing.techtarget.com":1059,"searchcloudsecurity.techtarget.com":1060,"searchcompliance.techtarget.com":1061,"searchcontentmanagement.techtarget.com":1062,"searchconvergedinfrastructure.techtarget.com":1063,"searchcrm.techtarget.com":1064,"searchcustomerexperience.techtarget.com":2775,"searchdatabackup.techtarget.com":1065,"searchdatacenter-eng.searchdatacenter.com":1113,"searchdatacenter-eng.techtarget.com":1114,"searchdatacenter.techtarget.com":1066,"searchdatamanagement.techtarget.com":1068,"searchdisasterrecovery.techtarget.com":1069,"searchdomino.techtarget.com":1070,"searchenterpriseai.techtarget.com":1071,"searchenterprisedesktop.techtarget.com":1072,"searchenterprisewan.techtarget.com":1073,"searcherp.techtarget.com":1074,"searchfinancialsecurity.techtarget.com":1075,"searchhealthit.techtarget.com":1076,"searchhrsoftware.techtarget.com":1077,"searchitchannel.techtarget.com":1078,"searchitoperations.techtarget.com":1079,"searchmicroservices.techtarget.com":1080,"searchmidmarketsecurity.techtarget.com":1081,"searchmobilecomputing.techtarget.com":1082,"searchnetworking.techtarget.com":1083,"searchoracle.techtarget.com":1084,"searchsalesforce.techtarget.com":1085,"searchsap.techtarget.com":1086,"searchsdn.techtarget.com":1087,"searchsecurity.techtarget.com":1088,"searchservervirtualization.techtarget.com":1089,"searchsoftwarequality.techtarget.com":1090,"searchsqlserver.techtarget.com":1091,"searchstorage.techtarget.com":1092,"searchtelecom.techtarget.com":1093,"searchunifiedcommunications.techtarget.com":1094,"searchvirtualdesktop.techtarget.com":1095,"searchvmware.techtarget.com":1096,"searchwindevelopment.techtarget.com":2581,"searchwindowsdevelopment.techtarget.com":1097,"searchwindowsserver.techtarget.com":1098,"whatis-eng.techtarget.com":1144,"whatis-qa.techtarget.com":1145,"whatis.techtarget.com":1099,"www-qa.techtarget.com":1153,"www.techtarget.com":1100,"itknowledgeexchange-qa.techtarget.com":6390,"searchcrm-qa.techtarget.com":6231,"searchstorage-qa.techtarget.com":6241,"*.datasciencecentral.com":8092,"searchcio-qa.techtarget.com":11007,"searchdatacenter-qa.techtarget.com":11008,"www-qa.computerweekly.com":11091,"www-qa.lemagit.fr":11092,"www-qa.theserverside.com":11093,"internetofthingsagenda-qa.techtarget.com":11771,"search400-qa.techtarget.com":11772,"searchapparchitecture-qa.techtarget.com":11773,"searchaws-qa.techtarget.com":11774,"searchbusinessanalytics-qa.techtarget.com":11775,"searchcloudcomputing-qa.techtarget.com":11776,"searchcloudsecurity-qa.techtarget.com":11777,"searchcompliance-qa.techtarget.com":11778,"searchcontentmanagement-qa.techtarget.com":11779,"searchconvergedinfrastructure-qa.techtarget.com":11780,"searchcustomerexperience-qa.techtarget.com":11781,"searchdatabackup-qa.techtarget.com":11782,"searchdatamanagement-qa.techtarget.com":11783,"searchdisasterrecovery-qa.techtarget.com":11784,"searchdomino-qa.techtarget.com":11785,"searchenterpriseai-qa.techtarget.com":11786,"searchenterprisedesktop-qa.techtarget.com":11787,"searcherp-qa.techtarget.com":11788,"searchhealthit-qa.techtarget.com":11789,"searchhrsoftware-qa.techtarget.com":11790,"searchitchannel-qa.techtarget.com":11792,"searchitoperations-qa.techtarget.com":11791,"searchmobilecomputing-qa.techtarget.com":11793,"searchnetworking-qa.techtarget.com":11794,"searchoracle-qa.techtarget.com":11795,"searchsap-qa.techtarget.com":11796,"searchsecurity-qa.techtarget.com":11797,"searchservervirtualization-qa.techtarget.com":11798,"searchsoftwarequality-qa.techtarget.com":11799,"searchsqlserver-qa.techtarget.com":11800,"searchunifiedcommunications-qa.techtarget.com":11801,"searchvirtualdesktop-qa.techtarget.com":11802,"searchvmware-qa.techtarget.com":11803,"searchwindevelopment-qa.techtarget.com":11804,"searchwindowsserver-qa.techtarget.com":11805,"morewithvpro.com":12566,"*.pclifecyclemanagement.com:":12565},r={dfp:"5b07836aecb3fe2955eba270"},c=location.hostname.split(".").slice(-2).join("."),a=t["*."+c.toLowerCase()];function o(e){for(var t=e+"=",r=document.cookie.split(";"),c=0;c<r.length;c++){for(var a=r[c];" "==a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return null}console.log("Domain :"+c),t.hasOwnProperty(location.hostname)?(console.log("hostname exact match"+location.hostname),e="https://sourcepoint.mgr.consensu.org/consent/v2/"+t[location.hostname]):(console.log("* domain match"+a),e="https://sourcepoint.mgr.consensu.org/consent/v2/"+a),this.debug=function(){var e,t,r=decodeURIComponent(window.location.search.substring(1)).split("&");for(t=0;t<r.length;t++)if("debug_cmp"===(e=r[t].split("="))[0])return void 0===e[1]||e[1];return!1}(),this.debug&&console.log("CMPApi instantiated"),this.getSourcePointUserId=function(){this.debug&&console.log("CMP get user id from cookie");var e=new RegExp("\\bconsentUUID=([^;]*)").exec(document.cookie);return!!e&&decodeURIComponent(e[1])},this.makeRequest=function(e,t){this.debug&&console.log("CMP requesting user consent data from: "+e);var r=new XMLHttpRequest;r.onreadystatechange=function(){4==r.readyState&&200==r.status&&t(r.responseText)},r.open("GET",e,!0),r.send(null)},this.getConsent=function(e){var t=r[e.toLowerCase()];this.debug&&console.log("CMP get consent vendor: "+e+"/"+t);var c=!0,a=this.getUserConsentData();if(!0!==a){var o=JSON.parse(a);o.hasOwnProperty("vendors")&&(c=-1!=o.vendors.indexOf(t))}return this.debug&&console.log("CMP vendor "+t+" returning consent "+c),c},this.getGlobalConsent=function(){this.debug&&console.log("CMP - getting global consent");var t=this.getSourcePointUserId();if(t){var r=e+"?consentUUID="+t;this.makeRequest(r,this.setUserConsentData)}else this.debug&&console.log("CMP - no uuid found")},this.setUserConsentData=function(e){try{localStorage.setItem("ttCmpUserConsentData",JSON.stringify(e)),this.debug&&console.log("CMP - set user consent data = "+response)}catch(e){this.debug&&console.log("CMP Error - setting user consent data of code "+e.code)}},this.getUserConsentData=function(){var e=localStorage.getItem("ttCmpUserConsentData");if(""==e||'""'==e)return this.debug&&console.log("CMP - get user consent data = null; returning true"),localStorage.removeItem("ttCmpUserConsentData"),!0;var t=JSON.parse(e);return null!=t?(this.debug&&console.log("CMP - get user consent data = "+t),t):(this.debug&&console.log("CMP - get user consent data = true"),!0)},this.getGdprApplies=function(){window.__tcfapi("ping",2,e=>(this.debug&&console.log("GDPR APPLIES PING "+e.gdprApplies),this.debug&&console.log("CMP STATUS "+e.cmpStatus),e.gdprApplies))},this.getCustomVendorConsentforVendorV2=function(e){console.log("Inside customconsentv2 retrival");var t=localStorage.getItem("ttCustomConsentDataV2");if(""==t||'""'==t)return this.debug&&console.log("CMP - get user consent data = null; returning true"),localStorage.removeItem("ttCustomConsentDataV2"),!1;var r=JSON.parse(t);if(null!=r)for(var c in this.debug&&console.log("CMP - get Custom V2 user consent data = "+r),r.consentedVendors){if(r.consentedVendors[c]._id===e)return this.debug&&console.log("returning true for vendorid "+e),!0}return!1},this.getCustomPurposeConsentByIdV2=function(e){console.log("Inside customconsentv2 retrival");var t=localStorage.getItem("ttCustomConsentDataV2");if(""==t||'""'==t)return this.debug&&console.log("CMP - get user consent data = null; returning true"),localStorage.removeItem("ttCustomConsentDataV2"),!1;var r=JSON.parse(t);if(null!=r)for(var c in this.debug&&console.log("CMP - get Custom V2 user Purpose consent data"),r.consentedPurposes){if(r.consentedPurposes[c]._id===e)return this.debug&&console.log("returning true for purposeid "+e),!0}return!1},this.getPurposeConsentByIdV2=function(e){var t=localStorage.getItem("ttConsentDataV2");if(""==t||'""'==t)return this.debug&&console.log("CMP - get user consent data = null; returning true"),localStorage.removeItem("ttConsentDataV2"),!1;var r=JSON.parse(t);if(null!=r)for(var c in this.debug&&console.log("CMP - get V2 user Purpose consent data"),r.consentedPurposes){if(r.consentedPurposes[c]._id===e)return this.debug&&console.log("returning true for vendorid "+e),!0}return!1},this.getConsentforVendorV2=function(e){var t=JSON.parse(o("ttConsentDataV2"));if(null!=t){if(0===Object.keys(t.consents).length&&t.consents.constructor===Object)return!1;for(var r in this.debug&&console.log("CMP - get V2 user consent data = "+t),e)if(null===t.consents[e[r]]||void 0===t.consents[e[r]]||!1===t.consents[e[r]])return!1;return!0}return!1},this.getLIConsentforVendorV2=function(e){var t=JSON.parse(o("ttConsentDataV2"));if(null!=t){if(0===Object.keys(t.legitimateInterests).length&&t.legitimateInterests.constructor===Object)return!1;for(var r in this.debug&&console.log("CMP - getting LI V2 user consent data = "+t),e)if(null===t.legitimateInterests[e[r]]||void 0===t.legitimateInterests[e[r]]||!1===t.legitimateInterests[e[r]])return!1;return!0}return!1},this.getCustomVendorGrantConsent=function(e){var t=JSON.parse(o("ttCustomConsentDataV2"));if(""==t||'""'==t)return this.debug&&console.log("CMP - get user consent data = null; returning true"),!1;if(null!=t)for(var r in this.debug&&console.log("CMP - get V2 user custom consent data = "+t),t)if(r===e)return this.debug&&console.log("returning vendor grant for 5e839a38b8e05c2bbe33f2fb = "+t[r].vendorGrant),t[r].vendorGrant;return!1}}var ttCmpGlobal=new ttCmpApi;ttCmpGlobal.getGlobalConsent();