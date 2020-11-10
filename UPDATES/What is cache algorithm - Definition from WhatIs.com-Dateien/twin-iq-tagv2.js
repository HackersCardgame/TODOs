var kf_tag = document.getElementById("kickfire");
var kf_src = kf_tag.src;    
var TWIN_iQ = encodeURI(kf_src).split("twin=")[1].split("&")[0];
var parameter1_TWIN_iQ = (encodeURI(kf_src).split("parameter1=")[1] != null) ? encodeURI(kf_src).split("parameter1=")[1].split("&")[0] : "";
var parameter2_TWIN_iQ = (encodeURI(kf_src).split("parameter2=")[1] != null) ? encodeURI(kf_src).split("parameter2=")[1].split("&")[0] : "";
var parameter3_TWIN_iQ = (encodeURI(kf_src).split("parameter3=")[1] != null) ? encodeURI(kf_src).split("parameter3=")[1].split("&")[0] : "";
var parameter4_TWIN_iQ = (encodeURI(kf_src).split("parameter4=")[1] != null) ? encodeURI(kf_src).split("parameter4=")[1].split("&")[0] : "";
var parameter5_TWIN_iQ = (encodeURI(kf_src).split("parameter5=")[1] != null) ? encodeURI(kf_src).split("parameter5=")[1].split("&")[0] : "";
var parameter6_TWIN_iQ = (encodeURI(kf_src).split("parameter6=")[1] != null) ? encodeURI(kf_src).split("parameter6=")[1].split("&")[0] : "";
var parameter7_TWIN_iQ = (encodeURI(kf_src).split("parameter7=")[1] != null) ? encodeURI(kf_src).split("parameter7=")[1].split("&")[0] : "";
var parameter8_TWIN_iQ = (encodeURI(kf_src).split("parameter8=")[1] != null) ? encodeURI(kf_src).split("parameter8=")[1].split("&")[0] : "";
var parameter9_TWIN_iQ = (encodeURI(kf_src).split("parameter9=")[1] != null) ? encodeURI(kf_src).split("parameter9=")[1].split("&")[0] : "";
var parameter10_TWIN_iQ = (encodeURI(kf_src).split("parameter10=")[1] != null) ? encodeURI(kf_src).split("parameter10=")[1].split("&")[0] : "";


var element_body = document.body;
 
//IF BODY ELEMENT EXISTS
if(typeof(element_body) != 'undefined' && element_body != null){
 
	//LOAD EXECUTION
	var script = document.createElement("script");  // create a script DOM node
	script.src = '//twin-iq.kickfire.com/twin-beta.js?'+TWIN_iQ+'&eventType=load&parameter1='+parameter1_TWIN_iQ+'&parameter2='+parameter2_TWIN_iQ+'&parameter3='+parameter3_TWIN_iQ+'&parameter4='+parameter4_TWIN_iQ+'&parameter5='+parameter5_TWIN_iQ+'&parameter6='+parameter6_TWIN_iQ+'&parameter7='+parameter7_TWIN_iQ+'&parameter8='+parameter8_TWIN_iQ+'&parameter9='+parameter9_TWIN_iQ+'&parameter10='+parameter10_TWIN_iQ+' ';
	document.body.appendChild(script);

	//CLICK EXECUTION
	document.body.addEventListener("click",function(e){
		var script = document.createElement("script");
		 script.src = '//twin-iq.kickfire.com/twin-beta.js?'+TWIN_iQ+'&eventType=click&parameter1='+parameter1_TWIN_iQ+'&parameter2='+parameter2_TWIN_iQ+'&parameter3='+parameter3_TWIN_iQ+'&parameter4='+parameter4_TWIN_iQ+'&parameter5='+parameter5_TWIN_iQ+'&parameter6='+parameter6_TWIN_iQ+'&parameter7='+parameter7_TWIN_iQ+'&parameter8='+parameter8_TWIN_iQ+'&parameter9='+parameter9_TWIN_iQ+'&parameter10='+parameter10_TWIN_iQ+' ';
		 document.body.appendChild(script);
	},false);
	
}


