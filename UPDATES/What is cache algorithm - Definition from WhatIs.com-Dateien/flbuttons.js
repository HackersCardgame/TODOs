/*! Flipboard button maker - 2017-10-10 */ 

 /* <a href="FLIPBOARD_URL" data-flip-widget="pro|mag">Text</a> */var FlipboardWidgets;FlipboardWidgets=function(){function a(){}var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;return g=["pro","mag","flipit","flipit2","shareflip"],e="data-flip-",p={"https:":"//cdn.flipboard.com/web/buttons/js","http:":"//cdn.flipboard.com/web/buttons/js","file:":"//cdn.flipboard.com/web/buttons/js"},f=/https?:\/\/(www\.)?(flipboard\.com)|(flip\.it)/,j=function(){return window.location.hostname},o=function(a,b,c){"string"==typeof a[b]?a[b]=c:a.setAttribute(b,c)},h=function(a,b){var c;return c="string"==typeof a[b]?a[b]:a.getAttribute(b)},i=function(a,b){var c,d;return c=e+b,d=h(a,c)},k=function(a){var b,c,d,e,f;for(e in a)if(c=a[e],e.hasOwnProperty){d=document.createElement(e);for(b in c)f=c[b],b&&f&&o(d,b,f);break}return d},b=function(a){var b,c,d,e,f,g,h,i,k;return c=document,i=window,e=(new Date).getTime(),d=(null!=a?a.utm_medium:void 0)||"article-share",b=(null!=a?a.utm_campaign:void 0)||"tools",f=(null!=a?a.utm_source:void 0)||encodeURIComponent(j()),g=(null!=a?a.title:void 0)||c.title,k=(null!=a?a.url:void 0)||i.location.href,h="https://share.flipboard.com/bookmarklet/popout?v=2&title="+encodeURIComponent(g)+"&url="+encodeURIComponent(k)+"&t="+e,h+="&utm_campaign="+b+"&utm_medium="+d+"&utm_source="+f},l=function(a,c){var d,e,f,g,h,i,j,k,l;return d=document,l=window,f=(new Date).getTime(),i=535,h=565,j=(l.screenTop||l.screenY)+50,e=(l.screenX||l.screenLeft)+(l.innerWidth||d.documentElement.offsetWidth||0)/2-i/2,k=function(a){return b(a)}(c),g="width="+i+",height="+h+",top="+j+",left="+e+",location=no,resizable=yes,status=no,scrollbars=no,personalbar=no,toolbar=no,menubar=no",l.__flipboard=l.open(k,"__flipboard_flipit",g),i=d.createElement("script"),i.setAttribute("type","text/javascript"),i.setAttribute("src","https://d2jsycj2ly2vqh.cloudfront.net/bookmarklet/js/popout-helper.min.js?t="+f),d.body.appendChild(i),setTimeout(function(){return l.__flipboard.focus()},50),!1},n={ico:function(a){var b;b=h(a,"href").replace(/\?.*/,""),b+="?utm_campaign=tools&utm_medium=follow",b+="&action=follow",b=b+"&utm_source="+encodeURIComponent(j()),o(a,"href",b),o(a,"target","_blank")},pro:function(a){var b,c;b=h(a,"href").replace(/\?.*/,""),b+="?utm_campaign=widgets&utm_medium=web&utm_source=profile_badge",b+="&action=follow",b=b+"&utm_content="+encodeURIComponent(j()),o(a,"href",b),o(a,"class","fl_profile_button"),o(a,"target","_blank"),c=k({I:{}}),a.appendChild(c),c=k({B:{}}),a.appendChild(c)},mag:function(a){var b,c,d,e,f,g;if(c="https://flipboard.com/cover/",g=h(a,"href"),e=g.match(/https?:\/\/(www\.)?(flipboard\.com)\/section\/(.*)/),d=g.match(/https?:\/\/(www\.)?(flipboard\.com)\/(@.*)/),e)c+=e[3];else{if(!d)return;c+=d[3]}b=k({IFRAME:{height:200,width:150,frameborder:0,name:"flipboardmagazine",scrolling:!1,style:"border:0; display:inline-block; height:200px; width:150px; vertical-align: middle;",src:c}}),f=a.parentNode,f.replaceChild(b,a)},flipit:function(a){var c;a.onclick=l,a.innerHTML="Flip",o(a,"class","fl_flip_button"),o(a,"title","Add this page to a Flipboard Magazine"),o(a,"href",b()),o(a,"target","_blank"),c=k({I:{}}),a.appendChild(c),c=k({B:{}}),a.appendChild(c)},flipit2:function(a){var c,d,e;a.onclick=function(a){return l(a,{utm_source:"flipit2"})},a.innerHTML="",c=h(a,"class"),o(a,"class",""+c+" fl_flip_logo"),o(a,"title","Add this page to a Flipboard Magazine"),o(a,"href",b({utm_source:"flipit2"})),o(a,"target","_blank"),e=function(){switch(i(a,"size")){case"small":return"http://cdn.flipboard.com/badges/flipboard_srsw.png";case"medium":return"http://cdn.flipboard.com/badges/flipboard_mrsw.png";case"large":return"http://cdn.flipboard.com/badges/flipboard_lrsw.png";default:return"http://cdn.flipboard.com/badges/flipboard_srsw.png"}}(),d=k({IMG:{src:e}}),a.appendChild(d)},shareflip:function(a){a.onclick=l,o(a,"href",b())}},m=function(a,b){n.hasOwnProperty(b)&&n[b](a)},c=function(){var a,b,c,d;for(b=function(){var b,c,d,e;for(d=document.getElementsByTagName("A"),e=[],b=0,c=d.length;c>b;b++)a=d[b],"object"==typeof a&&e.push(a);return e}(),c=0,d=b.length;d>c;c++)a=b[c],a.href&&a.href.match(f)&&m(a,i(a,"widget"))},d="a.fl_flip_button,a.fl_profile_button{color:#474747;text-decoration:none;display:inline-block;line-height:18px;font-family:'Helvetica Neue',Helvetica,sans-serif;font-size:12px;font-weight:500;text-indent:19px;position:relative;padding-right:5px;background-color:#f0f0f0;border:solid 1px #ccc;height:18px;box-sizing:content-box;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;background-image:-webkit-linear-gradient(bottom,#dfdfdf,#f7f7f7);background-image:-moz-linear-gradient(bottom,#dfdfdf,#f7f7f7);background-image:-o-linear-gradient(bottom,#dfdfdf,#f7f7f7);background-image:linear-gradient(to top,#dfdfdf,#f7f7f7)}a.fl_flip_button b,a.fl_profile_button b{background:url(data:image/gif;base64,R0lGODlhGAAYAJEAAOTMzPHm5v///80EACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjFGNjBCQkU3NzFCMTFFMzhEOTZFMjU1NDZCRTg2NjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjFGNjBCQkY3NzFCMTFFMzhEOTZFMjU1NDZCRTg2NjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MUY2MEJCQzc3MUIxMUUzOEQ5NkUyNTU0NkJFODY2MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MUY2MEJCRDc3MUIxMUUzOEQ5NkUyNTU0NkJFODY2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAAAYABgAAAIynI+py+0Po5xUiiuC3hrizG0eForPV3YnBrQA9bnvFLswa9NYdXy84fsFf8Si8YhMGgoAOw==) no-repeat;background-size:12px 12px;height:12px;width:12px;position:absolute;top:3px;left:3px}a.fl_flip_button:hover,a.fl_profile_button:hover{border-color:#bfbfbf}a.fl_flip_button:active,a.fl_profile_button:active{border:solid 1px #bfbfbf;background-image:-webkit-linear-gradient(top,#dfdfdf,#ebebeb);background-image:-moz-linear-gradient(top,#dfdfdf,#ebebeb);background-image:-o-linear-gradient(top,#dfdfdf,#ebebeb);background-image:linear-gradient(to bottom,#dfdfdf,#ebebeb)}",a.make=k,a.convertToWidgets=c,a.widgetize=function(){var a,b;b=k({STYLE:{type:"text/css"}}),b.styleSheet?b.styleSheet.cssText=d:b.appendChild(document.createTextNode(d)),a=document.getElementsByTagName("HEAD")[0],a.insertBefore(b,a.firstChild),c()},a}.call(this),function(){var a,b,c;c=encodeURIComponent(window.location.href),b="https://fpn.flipboard.com/pix/__fpn.gif",a=document.createElement("IMG"),a.src=""+b+"?utm_source="+c,FlipboardWidgets.widgetize()}();