 
(function($) {
    var opt;
    
    //网页打印时清空页眉页脚
    function pagesetup_null() {
        if (!!window.ActiveXObject || "ActiveXObject" in window) {
            try {
                var hkey_root, hkey_path, hkey_key;
                hkey_root = "HKEY_CURRENT_USER";
                hkey_path = "\\Software\\Microsoft\\Internet Explorer\\PageSetup\\";
                var RegWsh = new ActiveXObject("WScript.Shell");
                hkey_key = "header";
                RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, " ");
                hkey_key = "footer";
                RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, " ");
            } catch (e) {}
        }
    }
    $.fn.jqprint = function (options) {
        opt = $.extend({}, $.fn.jqprint.defaults, options);
 
        var $element = (this instanceof jQuery) ? this : $(this);
        
        if (opt.operaSupport && $.browser.opera) 
        { 
            var tab = window.open("","jqPrint-preview");
            tab.document.open();
            pagesetup_null();
            var doc = tab.document;
        }
        else 
        {
            var $iframe = $("<iframe style='width: 600px;height: 600px;' ></iframe>");
            if (!opt.debug) { $iframe.css({ position: "absolute", width: "0px", height: "0px", left: "-600px", top: "-600px" }); }
            
            $iframe.appendTo("body");
            var doc = $iframe[0].contentWindow.document;
            pagesetup_null();
        }
        
        if (opt.importCSS) {
            // var userAgent = navigator.userAgent;
            // var isOpera = userAgent.indexOf("Opera") > -1;
            // var isIE = userAgent.indexOf("compatible") > -1
            //     && userAgent.indexOf("MSIE") > -1 && !isOpera;
            // if (isIE) {
            //     if ($("link[media=printIE]").length > 0) {
            //         $("link[media=printIE]").each(function () {
            //             doc.write("<link type='text/css' rel='stylesheet' href='" + $(this).attr("href") + "' media='print' />");
            //         });
            //     }
            //     else {
            //         $("link").each(function () {
            //             doc.write("<link type='text/css' rel='stylesheet' href='" + $(this).attr("href") + "' />");
            //         });
            //     }
            // } else { 
            // if ($("link[media=print]").length > 0) {
            //     $("link[media=print]").each(function () {
            //         doc.write("<link type='text/css' rel='stylesheet' href='" + $(this).attr("href") + "' media='print' />");
            //     });
            // }
            // else {
            //     $("link").each(function () {
            //         doc.write("<link type='text/css' rel='stylesheet' href='" + $(this).attr("href") + "' />");
            //     });
            // }
            // }
            
            if ($("style[media=print]").length > 0) {
                $("style[media=print]").each(function () {
                    // console.log($(this)[0].innerText)
                    doc.write('<style type="text/css" media="print" >' + $(this).attr("innerText") + '</style>');
                })
            }
        }
        
        if (opt.printContainer) { doc.write($element.outer()); }
        else { $element.each( function() { doc.write($(this).html()); }); }
        
        doc.close();
        
        (opt.operaSupport && $.browser.opera ? tab : $iframe[0].contentWindow).focus();
        setTimeout(function () { (opt.operaSupport && $.browser.opera ? tab : $iframe[0].contentWindow).print(); if (tab) { tab.close();} }, 1000);
    }
    
    $.fn.jqprint.defaults = {
		debug: false,
		importCSS: true, 
		printContainer: true,
		operaSupport: true
	};
    jQuery.fn.outer = function() {
      return $($('<div></div>').html(this.clone())).html();
    } 
})(jQuery);