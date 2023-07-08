// source --> https://usa.family-peace.org/wp-content/plugins/memberpress/js/login.js?ver=1.9.29 
(function($) {
  __ = wp.i18n.__;

  function mpResetToggle( $button, show ) {
    $button
      .attr({
        'aria-label': show ? __( 'Show password' ) : __( 'Hide password' )
      })
      .find( '.text' )
        .text( show ? __( 'Show' ) : __( 'Hide' ) )
      .end()
      .find( '.dashicons' )
        .removeClass( show ? 'dashicons-hidden' : 'dashicons-visibility' )
        .addClass( show ? 'dashicons-visibility' : 'dashicons-hidden' );
  }

  $(document).ready( function() {
    $('body').on('click', 'button.mp-hide-pw', function () {
      var $button = $(this),
        $pass = $button.prev();

      if ( 'password' === $pass.attr( 'type' ) ) {
        $pass.attr( 'type', 'text' );
        mpResetToggle( $button, false );
      } else {
        $pass.attr( 'type', 'password' );
        mpResetToggle( $button, true );
      }
    });
  });
})(jQuery);
// source --> https://usa.family-peace.org/wp-content/plugins/cleantalk-spam-protect/js/apbct-public-bundle.min.js?ver=5.180.1 
function ctSetCookie(e,t,o){var n;("string"==typeof e&&"string"==typeof t||"number"==typeof t)&&(n="ct_pointer_data"===e,e=[[e,t,o]]),"none"!==ctPublicFunctions.data__cookies_type&&("native"===ctPublicFunctions.data__cookies_type?e.forEach(function(e,t,o){var n=void 0!==e[2]?"expires="+n+"; ":"",a="https:"===location.protocol?"; secure":"";document.cookie=ctPublicFunctions.cookiePrefix+e[0]+"="+encodeURIComponent(e[1])+"; "+n+"path=/; samesite=lax"+a}):"alternative"!==ctPublicFunctions.data__cookies_type||n||("rest"===ctPublicFunctions.data__ajax_type?apbct_public_sendREST("alt_sessions",{method:"POST",data:{cookies:e}}):"admin_ajax"===ctPublicFunctions.data__ajax_type&&apbct_public_sendAJAX({action:"apbct_alt_session__save__AJAX",cookies:e},{notJson:1})))}function ctDeleteCookie(e){var t;"none"!==ctPublicFunctions.data__cookies_type&&("native"===ctPublicFunctions.data__cookies_type?(t="https:"===location.protocol?"; secure":"",document.cookie=e+'=""; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; samesite=lax'+t):ctPublicFunctions.data__cookies_type)}function apbct_public_sendAJAX(t,o,n){var a=o.callback||null,c=o.callback_context||null,i=o.callback_params||null,e=o.async||!0,l=o.notJson||null,r=o.timeout||15e3,n=n||null,s=o.button||null,d=o.spinner||null,u=o.progressbar||null,p=o.silent||null,m=o.no_nonce||null;"string"==typeof t?t=(t=m?t:t+"&_ajax_nonce="+ctPublicFunctions._ajax_nonce)+"&no_cache="+Math.random():(m||(t._ajax_nonce=ctPublicFunctions._ajax_nonce),t.no_cache=Math.random()),s&&(s.setAttribute("disabled","disabled"),s.style.cursor="not-allowed"),d&&jQuery(d).css("display","inline"),jQuery.ajax({type:"POST",url:ctPublicFunctions._ajax_url,data:t,async:e,success:function(e){s&&(s.removeAttribute("disabled"),s.style.cursor="pointer"),d&&jQuery(d).css("display","none"),(e=l?e:JSON.parse(e)).error?(setTimeout(function(){u&&u.fadeOut("slow")},1e3),console.log("Error happens: "+(e.error||"Unkown"))):a&&(i?a.apply(c,i.concat(e,t,o,n)):a(e,t,o,n))},error:function(e,t,o){s&&(s.removeAttribute("disabled"),s.style.cursor="pointer"),d&&jQuery(d).css("display","none"),o&&!p&&(console.log("APBCT_AJAX_ERROR"),console.log(e),console.log(t),console.log("Anti-spam by Cleantalk plugin error: "+o+"Please, contact Cleantalk tech support https://wordpress.org/support/plugin/cleantalk-spam-protect/"))},timeout:r})}function apbct_public_sendREST(t,o){var n=o.callback||null,e=o.data||[],a=o.method||"POST";jQuery.ajax({type:a,url:ctPublicFunctions._rest_url+"cleantalk-antispam/v1/"+t,data:e,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",ctPublicFunctions._rest_nonce)},success:function(e){e.error?console.log("Error happens: "+(e.error||"Unknown")):n&&n(e,t,o,null)},error:function(e,t,o){o&&(console.log("APBCT_REST_ERROR"),console.log(e),console.log(t),console.log("Anti-spam by Cleantalk plugin REST API error: "+o+" Please, contact Cleantalk tech support https://wordpress.org/support/plugin/cleantalk-spam-protect/"))}})}apbctLocalStorage={get:function(e,t){void 0===t&&(t="value");e=localStorage.getItem(e);if(null!==e)try{const o=JSON.parse(e);return o.hasOwnProperty(t)?JSON.parse(o[t]):o}catch(e){return new Error(e)}return!1},set:function(e,t){t={value:JSON.stringify(t),timestamp:Math.floor((new Date).getTime()/1e3)};localStorage.setItem(e,JSON.stringify(t))},isAlive:function(e,t){return void 0===t&&(t=86400),this.get(e,"timestamp")+t>Math.floor((new Date).getTime()/1e3)},isSet:function(e){return null!==localStorage.getItem(e)},delete:function(e){localStorage.removeItem(e)}};var ct_date=new Date,ctTimeMs=(new Date).getTime(),ctMouseEventTimerFlag=!0,ctMouseData=[],ctMouseDataCounter=0,ctCheckedEmails={};function apbct_attach_event_handler(e,t,o){"function"==typeof window.addEventListener?e.addEventListener(t,o):e.attachEvent(t,o)}function apbct_remove_event_handler(e,t,o){"function"==typeof window.removeEventListener?e.removeEventListener(t,o):e.detachEvent(t,o)}var ctFunctionFirstKey=function(e){ctSetCookie("ct_fkp_timestamp",Math.floor((new Date).getTime()/1e3)),ctKeyStopStopListening()},ctMouseReadInterval=setInterval(function(){ctMouseEventTimerFlag=!0},150),ctMouseWriteDataInterval=setInterval(function(){ctSetCookie("ct_pointer_data",JSON.stringify(ctMouseData))},1200),ctFunctionMouseMove=function(e){ctSetMouseMoved(),!0===ctMouseEventTimerFlag&&(ctMouseData.push([Math.round(e.clientY),Math.round(e.clientX),Math.round((new Date).getTime()-ctTimeMs)]),ctMouseEventTimerFlag=!1,50<=++ctMouseDataCounter&&ctMouseStopData())};function ctMouseStopData(){apbct_remove_event_handler(window,"mousemove",ctFunctionMouseMove),clearInterval(ctMouseReadInterval),clearInterval(ctMouseWriteDataInterval)}function ctKeyStopStopListening(){apbct_remove_event_handler(window,"mousedown",ctFunctionFirstKey),apbct_remove_event_handler(window,"keydown",ctFunctionFirstKey)}function checkEmail(e){var t=e.target.value;!t||t in ctCheckedEmails||("rest"===ctPublicFunctions.data__ajax_type?apbct_public_sendREST("check_email_before_post",{method:"POST",data:{email:t},callback:function(e){e.result&&(ctCheckedEmails[t]={result:e.result,timestamp:Date.now()/1e3|0},ctSetCookie("ct_checked_emails",JSON.stringify(ctCheckedEmails)))}}):"admin_ajax"===ctPublicFunctions.data__ajax_type&&apbct_public_sendAJAX({action:"apbct_email_check_before_post",email:t},{callback:function(e){e.result&&(ctCheckedEmails[t]={result:e.result,timestamp:Date.now()/1e3|0},ctSetCookie("ct_checked_emails",JSON.stringify(ctCheckedEmails)))}}))}function ctSetPixelImg(e){ctSetCookie("apbct_pixel_url",e),+ctPublic.pixel__enabled&&!document.getElementById("apbct_pixel")&&jQuery("body").append('<img alt="Cleantalk Pixel" id="apbct_pixel" style="display: none; left: 99999px;" src="'+e+'">')}function ctGetPixelUrl(){var e=ctGetPixelUrlLocalstorage();if(!1!==e){if(!ctIsOutdatedPixelUrlLocalstorage(e))return void ctSetPixelImg(e);ctCleaPixelUrlLocalstorage(e)}"rest"===ctPublicFunctions.data__ajax_type?apbct_public_sendREST("apbct_get_pixel_url",{method:"POST",callback:function(e){e&&(ctGetPixelUrlLocalstorage()||ctSetPixelUrlLocalstorage(e),ctSetPixelImg(e))}}):apbct_public_sendAJAX({action:"apbct_get_pixel_url"},{notJson:!0,callback:function(e){e&&(ctGetPixelUrlLocalstorage()||ctSetPixelUrlLocalstorage(e),ctSetPixelImg(e))}})}function ctSetHasScrolled(){apbctLocalStorage.isSet("ct_has_scrolled")&&apbctLocalStorage.get("ct_has_scrolled")||(ctSetCookie("ct_has_scrolled","true"),apbctLocalStorage.set("ct_has_scrolled",!0))}function ctSetMouseMoved(){apbctLocalStorage.isSet("ct_mouse_moved")&&apbctLocalStorage.get("ct_mouse_moved")||(ctSetCookie("ct_mouse_moved","true"),apbctLocalStorage.set("ct_mouse_moved",!0))}function apbct_ready(){var e=apbctLocalStorage.get("ct_cookies_type"),e=(e&&e===ctPublic.data__cookies_type||(apbctLocalStorage.set("ct_cookies_type",ctPublic.data__cookies_type),apbctLocalStorage.delete("ct_mouse_moved"),apbctLocalStorage.delete("ct_has_scrolled")),[["ct_ps_timestamp",Math.floor((new Date).getTime()/1e3)],["ct_fkp_timestamp","0"],["ct_pointer_data","0"],["ct_timezone",ct_date.getTimezoneOffset()/60*-1],["ct_screen_info",apbctGetScreenInfo()],["apbct_headless",navigator.webdriver]]);if("native"!==ctPublic.data__cookies_type)e.push(["apbct_visible_fields","0"]);else{var t=document.cookie.split(";");if(0!==t.length)for(var o=0;o<t.length;o++){var n=t[o].trim().split("=")[0];0===n.indexOf("apbct_visible_fields_")&&ctDeleteCookie(n)}}+ctPublic.pixel__setting&&(+ctPublic.pixel__enabled?ctGetPixelUrl():e.push(["apbct_pixel_url",ctPublic.pixel__url])),+ctPublic.data__email_check_before_post&&(e.push(["ct_checked_emails","0"]),jQuery("input[type = 'email'], #email").blur(checkEmail)),ctSetCookie(e),setTimeout(function(){for(var e=0;e<document.forms.length;e++){var t,o,n=document.forms[e];0==+ctPublic.data__visible_fields_required||"get"===n.method.toString().toLowerCase()||n.classList.contains("slp_search_form")||n.parentElement.classList.contains("mec-booking")||-1!==n.action.toString().indexOf("activehosted.com")||n.id&&"caspioform"===n.id||n.classList&&n.classList.contains("tinkoffPayRow")||n.classList&&n.classList.contains("give-form")||n.id&&"ult-forgot-password-form"===n.id||n.id&&-1!==n.id.toString().indexOf("calculatedfields")||n.id&&-1!==n.id.toString().indexOf("sac-form")||n.id&&-1!==n.id.toString().indexOf("cp_tslotsbooking_pform")||n.name&&-1!==n.name.toString().indexOf("cp_tslotsbooking_pform")||"https://epayment.epymtservice.com/epay.jhtml"===n.action.toString()||n.name&&-1!==n.name.toString().indexOf("tribe-bar-form")||((t=document.createElement("input")).setAttribute("type","hidden"),t.setAttribute("id","apbct_visible_fields_"+e),t.setAttribute("name","apbct_visible_fields"),(o={})[0]=apbct_collect_visible_fields(n),t.value=JSON.stringify(o),n.append(t),n.onsubmit_prev=n.onsubmit,n.ctFormIndex=e,n.onsubmit=function(e){var t;"native"!==ctPublic.data__cookies_type&&void 0!==e.target.ctFormIndex&&((t={})[0]=apbct_collect_visible_fields(this),apbct_visible_fields_set_cookie(t,e.target.ctFormIndex)),e.target.onsubmit_prev instanceof Function&&setTimeout(function(){e.target.onsubmit_prev.call(e.target,e)},500)})}},1e3);let a=document.querySelectorAll("[data-original-string]");if(a.length)for(let e=0;e<a.length;++e)a[e].parentElement.href||a[e].parentElement.parentElement.href||a[e].addEventListener("click",function e(t){this.removeEventListener("click",e),apbctAjaxEmailDecode(t)})}function apbctAjaxEmailDecode(t){const o=t.target;o.setAttribute("title",ctPublicFunctions.text__wait_for_decoding),o.style.cursor="progress","rest"===ctPublicFunctions.data__ajax_type?apbct_public_sendREST("apbct_decode_email",{data:{encodedEmail:t.target.dataset.originalString},method:"POST",callback:function(e){e.success&&(ctFillDecodedEmail(e.data,t.target),o.setAttribute("title",""),o.removeAttribute("style"))}}):apbct_public_sendAJAX({action:"apbct_decode_email",encodedEmail:t.target.dataset.originalString},{notJson:!0,callback:function(e){e.success&&(ctFillDecodedEmail(e.data,t.target),o.setAttribute("title",""),o.removeAttribute("style"))}})}function ctFillDecodedEmail(e,t){t.innerHTML=e}function apbct_collect_visible_fields(e){var t,o=[],n="",a=0,c="",i=0,l=[];for(t in e.elements)isNaN(+t)||(o[t]=e.elements[t]);return(o=o.filter(function(e){return-1===l.indexOf(e.getAttribute("name"))&&(-1===["radio","checkbox"].indexOf(e.getAttribute("type"))||(l.push(e.getAttribute("name")),!1))})).forEach(function(e,t,o){"submit"!==e.getAttribute("type")&&null!==e.getAttribute("name")&&"ct_checkjs"!==e.getAttribute("name")&&("none"!==getComputedStyle(e).display&&"hidden"!==getComputedStyle(e).visibility&&"0"!==getComputedStyle(e).opacity&&"hidden"!==e.getAttribute("type")||e.classList.contains("wp-editor-area")?(n+=" "+e.getAttribute("name"),a++):(c+=" "+e.getAttribute("name"),i++))}),c=c.trim(),{visible_fields:n=n.trim(),visible_fields_count:a,invisible_fields:c,invisible_fields_count:i}}function apbct_visible_fields_set_cookie(e,t){var o="object"==typeof e&&null!==e?e:{};if("native"===ctPublic.data__cookies_type)for(var n in o){if(10<n)return;ctSetCookie("apbct_visible_fields_"+(void 0!==t?t:n),JSON.stringify(o[n]))}else ctSetCookie("apbct_visible_fields",JSON.stringify(o))}function apbct_js_keys__set_input_value(e,t,o,n){if(0<document.querySelectorAll("[name^=ct_checkjs]").length)for(var a=document.querySelectorAll("[name^=ct_checkjs]"),c=0;c<a.length;c++)a[c].value=e.js_key}function apbctGetScreenInfo(){return JSON.stringify({fullWidth:document.documentElement.scrollWidth,fullHeight:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),visibleWidth:document.documentElement.clientWidth,visibleHeight:document.documentElement.clientHeight})}function ctSetPixelUrlLocalstorage(e){localStorage.setItem("session_pixel_url",e),localStorage.setItem(e,Math.floor(Date.now()/1e3).toString())}function ctGetPixelUrlLocalstorage(){var e=localStorage.getItem("session_pixel_url");return null!==e&&e}function ctIsOutdatedPixelUrlLocalstorage(e){e=Number(localStorage.getItem(e));return 10800<Math.floor(Date.now()/1e3).toString()-e}function ctCleaPixelUrlLocalstorage(e){localStorage.removeItem(e),localStorage.removeItem("session_pixel_url")}function ct_protect_external(){for(var e=0;e<document.forms.length;e++)if(void 0===document.forms[e].cleantalk_hidden_action&&void 0===document.forms[e].cleantalk_hidden_method){var t,o,n,a,c,i=document.forms[e];if(i.parentElement&&0<i.parentElement.classList.length&&-1!==i.parentElement.classList[0].indexOf("mewtwo"))return;"string"==typeof i.action&&(isIntegratedForm(i)?(jQuery(i).before('<i class="cleantalk_placeholder" style="display: none;"></i>'),t=jQuery(i).prev(),a=i.outerHTML,o=jQuery(i).detach(),t.after(a),(a=document.createElement("input")).name="action",a.value="cleantalk_force_ajax_check",a.type="hidden",(n=document.forms[e]).appendChild(a),void 0!==n.classList&&n.classList.contains("ml-block-form")?void 0!==(a=jQuery("form.ml-block-form").find('button[type="submit"]'))&&a.click(function(e){e.preventDefault(),sendAjaxCheckingFormData(n,t,o)}):document.forms[e].onsubmit=function(e){e.preventDefault();var t=jQuery(e.currentTarget).prev(),o=jQuery(e.currentTarget).clone();sendAjaxCheckingFormData(e.currentTarget,t,o)}):-1===i.action.indexOf("http://")&&-1===i.action.indexOf("https://")||i.action.split("//")[1].split("/")[0].toLowerCase()!==location.hostname.toLowerCase()&&((a=document.createElement("input")).name="cleantalk_hidden_action",a.value=i.action,a.type="hidden",i.appendChild(a),(c=document.createElement("input")).name="cleantalk_hidden_method",c.value=i.method,c.type="hidden",i.method="POST",i.appendChild(c),i.action=document.location))}}function apbct_replace_inputs_values_from_other_form(e,t){var e=jQuery(e).find("button, input, textarea, select"),o=jQuery(t).find("button, input, textarea, select");e.each(function(e,n){var a=jQuery(n);o.each(function(e,t){var o=jQuery(t);n.outerHTML===t.outerHTML&&o.val(a.val())})})}function isIntegratedForm(e){var t=e.action;return!!(-1!==t.indexOf("activehosted.com")||-1!==t.indexOf("app.convertkit.com")||void 0!==e.firstChild.classList&&e.firstChild.classList.contains("cb-form-group")||-1!==t.indexOf("mailerlite.com")||-1!==t.indexOf("colcolmail.co.uk")||-1!==t.indexOf("paypal.com")||-1!==t.indexOf("infusionsoft.com")||-1!==t.indexOf("webto.salesforce.com")||-1!==t.indexOf("secure2.convio.net")||-1!==t.indexOf("hookb.in")||-1!==t.indexOf("external.url")||-1!==t.indexOf("tp.media")||-1!==t.indexOf("flodesk.com"))}function sendAjaxCheckingFormData(n,e,t){var o={},a=(o[0]=apbct_collect_visible_fields(n),apbct_visible_fields_set_cookie(o),{}),o=n.elements;(o=Array.prototype.slice.call(o)).forEach(function(e,t){""===e.name?a["input_"+t]=e.value:a[e.name]=e.value}),apbct_public_sendAJAX(a,{async:!1,callback:function(e,t,o){void 0!==o.apbct&&+o.apbct.blocked||(apbct_replace_inputs_values_from_other_form(jQuery(n).detach(),t),e.after(t),0===(o=jQuery(t).find("button[type=submit]")).length&&0===(o=jQuery(t).find("input[type=submit]")).length&&0===(o=jQuery(t).find('button[data-element="submit"]')).length&&0===(o=jQuery(t).find('input[type="image"][name="submit"]')).length||o[0].click())},callback_context:null,callback_params:[e,t]})}apbct_attach_event_handler(window,"mousemove",ctFunctionMouseMove),apbct_attach_event_handler(window,"mousedown",ctFunctionFirstKey),apbct_attach_event_handler(window,"keydown",ctFunctionFirstKey),apbct_attach_event_handler(window,"scroll",ctSetHasScrolled),apbct_attach_event_handler(window,"DOMContentLoaded",apbct_ready),"undefined"!=typeof jQuery&&jQuery(document).ajaxComplete(function(e,t,o){t.responseText&&-1!==t.responseText.indexOf('"apbct')&&void 0!==(t=JSON.parse(t.responseText)).apbct&&(t=t.apbct).blocked&&(document.dispatchEvent(new CustomEvent("apbctAjaxBockAlert",{bubbles:!0,detail:{message:t.comment}})),cleantalkModal.loaded=t.comment,cleantalkModal.open(),1==+t.stop_script&&window.stop())}),cleantalkModal={loaded:!1,loading:!1,opened:!1,opening:!1,load:function(e){this.loaded||(this.loading=!0,callback=function(e,t,o,n){cleantalkModal.loading=!1,cleantalkModal.loaded=e,document.dispatchEvent(new CustomEvent("cleantalkModalContentLoaded",{bubbles:!0}))},("function"==typeof apbct_admin_sendAJAX?apbct_admin_sendAJAX:apbct_public_sendAJAX)({action:e},{callback:callback,notJson:!0}))},open:function(){function e(){var e="";for(key in this.styles)e+=key+":"+this.styles[key]+";";return e}var t={styles:{"z-index":"9999",position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"rgba(0,0,0,0.5)",display:"flex","justify-content":"center","align-items":"center"},toString:e},o={styles:{position:"relative",padding:"30px",background:"#FFF",border:"1px solid rgba(0,0,0,0.75)","border-radius":"4px","box-shadow":"7px 7px 5px 0px rgba(50,50,50,0.75)"},toString:e},n={styles:{position:"absolute",background:"#FFF",width:"20px",height:"20px",border:"2px solid rgba(0,0,0,0.75)","border-radius":"15px",cursor:"pointer",top:"-8px",right:"-8px","box-sizing":"content-box"},toString:e},a={styles:{content:'""',display:"block",position:"absolute",background:"#000","border-radius":"1px",width:"2px",height:"16px",top:"2px",left:"9px",transform:"rotate(45deg)"},toString:e},c={styles:{content:'""',display:"block",position:"absolute",background:"#000","border-radius":"1px",width:"2px",height:"16px",top:"2px",left:"9px",transform:"rotate(-45deg)"},toString:e},i={styles:{overflow:"hidden"},toString:e},l=document.createElement("style"),i=(l.setAttribute("id","cleantalk-modal-styles"),l.innerHTML="body.cleantalk-modal-opened{"+i+"}",l.innerHTML+="#cleantalk-modal-overlay{"+t+"}",l.innerHTML+="#cleantalk-modal-close{"+n+"}",l.innerHTML+="#cleantalk-modal-close:before{"+a+"}",l.innerHTML+="#cleantalk-modal-close:after{"+c+"}",document.body.append(l),document.createElement("div")),t=(i.setAttribute("id","cleantalk-modal-overlay"),document.body.append(i),document.body.classList.add("cleantalk-modal-opened"),document.createElement("div")),n=(t.setAttribute("id","cleantalk-modal-inner"),t.setAttribute("style",o),i.append(t),document.createElement("div")),a=(n.setAttribute("id","cleantalk-modal-close"),t.append(n),document.createElement("div"));this.loaded?a.innerHTML=this.loaded:(a.innerHTML="Loading...",this.load("get_options_template")),a.setAttribute("id","cleantalk-modal-content"),t.append(a),this.opened=!0},close:function(){document.body.classList.remove("cleantalk-modal-opened"),document.getElementById("cleantalk-modal-overlay").remove(),document.getElementById("cleantalk-modal-styles").remove(),document.dispatchEvent(new CustomEvent("cleantalkModalClosed",{bubbles:!0}))}},document.addEventListener("click",function(e){(e.target&&"cleantalk-modal-overlay"===e.target.id||"cleantalk-modal-close"===e.target.id)&&cleantalkModal.close()}),document.addEventListener("cleantalkModalContentLoaded",function(e){cleantalkModal.opened&&cleantalkModal.loaded&&(document.getElementById("cleantalk-modal-content").innerHTML=cleantalkModal.loaded)}),jQuery(document).ready(function(){"undefined"!=typeof ctPublicGDPR&&ctPublicGDPR.gdpr_forms&&ctPublicGDPR.gdpr_forms.forEach(function(e,t,o){var n=jQuery("#"+e+", ."+e);n.is("form")||(n.find("form")[0]?n=n.children("form").first():jQuery(".wpcf7[role=form]")[0]&&-1!==jQuery(".wpcf7[role=form]").attr("id").indexOf("wpcf7-f"+e)?n=jQuery(".wpcf7[role=form]"):jQuery(".frm_forms")[0]&&-1!==jQuery(".frm_forms").first().attr("id").indexOf("frm_form_"+e)?n=jQuery(".frm_forms").first().children("form"):jQuery(".wpforms-form")[0]&&-1!==jQuery(".wpforms-form").first().attr("id").indexOf("wpforms-form-"+e)&&(n=jQuery(".wpforms-form"))),!n.is("form")&&"form"!==n.attr("role")||n.append('<input id="apbct_gdpr_'+t+'" type="checkbox" required="required " style="display: inline; margin-right: 10px;">').append('<label style="display: inline;" for="apbct_gdpr_'+t+'">'+ctPublicGDPR.gdpr_text+"</label>")})}),window.onload=function(){setTimeout(function(){ct_protect_external()},1500)};