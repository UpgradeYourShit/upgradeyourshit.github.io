//////////////////////////////////////////////
// Obfuscated by Javascript Obfuscator 4.2  //
// http://javascript-source.com             //
//////////////////////////////////////////////
var options={"id":"show",

"width":282,
"height":288,
"captions":true,
"controller":true,
"thumbnails":false,
"loop":true,
"paused":true,
"effect":"Fade"

};(function(){if(options.effect&&options.effect.toLowerCase()=="fade"){options.effect="";}var path="";var regexp=/^(.*)visualslideshow\.js$/;$each($$("script"),function(item,index,object){if(regexp.test(item.src)){var res=regexp.exec(item.src);path=res[1];}});document.write("<scr"+"ipt type=\"text/javascript\" src=\""+path+"slideshow.js\"></scr"+"ipt>");if(options.effect){document.write("<scr"+"ipt type=\"text/javascript\" src=\""+path+"slideshow."+options.effect.toLowerCase()+".js\"></scr"+"ipt>");}window.addEvent("domready",function(){if(options.effect){new Slideshow[options.effect](options.id,null,options);}else{new Slideshow(options.id,null,options);}var oo=$$("#"+options.id+" div.slideshow-images");var O="";if(oo&&O){var o0=new Element("div",{styles:{position:"absolute",right:0,bottom:0,padding:"2px 3px",'background-color':"#EEE",'z-index':10}});oo.grab(o0);oO=new Element("a",{href:"http://"+O.toLowerCase(),html:O,styles:{color:"#555",font:"11px Arial,Verdana,sans-serif",padding:"3px 6px",width:"auto",height:"auto",margin:"0 0 0 0",outline:"none"},events:{contextmenu:function(eventObject){return false;}}});o0.grab(oO);}});})();