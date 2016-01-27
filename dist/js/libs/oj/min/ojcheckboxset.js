/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojradiocheckbox"],function(b,f){(function(){b.ya("oj.ojCheckboxset",f.oj.editableValue,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{disabled:!1,value:void 0},refresh:function(){this._super();this.Aa()},widget:function(){return this.fqa},Wd:function(a,c){var e=[],g;this._super(a,c);b.ue.Tk([{V:"disabled",xc:!0},{V:"title"},{V:"placeholder"},{V:"required",Ye:!0,xc:!0}],c,this);this.vh=this.uI();void 0===c.value&&
(g=this.vh.filter(":checked"),0<g.length&&(g.each(function(){e.push(f(this).val())}),this.option("value",e,{_context:{Hc:!0,Za:!0}})),void 0===this.options.value&&(this.options.value=[]))},_ComponentCreate:function(){this._super();if(this.element.is("fieldset"))throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");this.vh._ojRadioCheckbox();this.fqa=this.element.addClass("oj-checkboxset oj-component").attr("role","group").wrapInner("\x3cdiv class\x3d'oj-checkboxset-wrapper'\x3e\x3c/div\x3e");
this._on(this.El);this.Aa()},sG:function(){this.vh=this.uI();this.vh.filter(".oj-checkbox").each(function(){var a=void 0!==f(this).attr("disabled")?!!f(this).prop("disabled"):!1;f(this)._ojRadioCheckbox("option","disabled",a)});this.vh.not(".oj-checkbox")._ojRadioCheckbox()},Focus:function(){this.Vd().first().focus();return!0},vG:function(){},uI:function(){var a=this.element.find("input[type\x3dcheckbox]:first");0===a.length&&b.r.warn("Could not find any input type\x3dcheckbox within this element");
a=a.attr("name");return void 0===a?(a=this.element.find("input[type\x3dcheckbox]"),a.not("[name]")):this.element.find("input[type\x3dcheckbox][name\x3d"+a+"]")},nf:function(a,b,e){a=this.element.find("input[type\x3dcheckbox]:tabbable").first();this.qf(b,e,{launcher:a})},_GetMessagingLauncherElement:function(){var a=this.Vd(),c=b.ye.Qk("radioset").renderInputAs;return c&&"html"!==c?this.widget():a},Aa:function(){this.co(this.options.disabled)},El:{change:function(a){this.Kz(a)}},Kz:function(b){var c=
this.dg();this.gc(c,b,a)},dg:function(){return this.ls()},ni:function(a){var b;this.vh._ojRadioCheckbox("option","checked",!1);if(null!=a)for(var e=0;e<a.length;e++)b=a[e],b="[value\x3d'"+b+"']",b=this.vh.filter(b),void 0!==b&&0<b.length&&(b.prop("checked")||b._ojRadioCheckbox("option","checked",!0))},ls:function(){var a=[],b=this.vh.filter(":checked");if(0===b.length)return[];b.each(function(){a.push(f(this).val())});return a},_GetDefaultStyleClass:function(){return"oj-checkboxset"},Vd:function(){return this.uI()},
rG:function(){},xz:function(){return!0},co:function(a){a=!!a;this.vh.each(function(){f(this).data("oj-_ojRadioCheckbox").Pv(a)});this.vh._ojRadioCheckbox("refreshDisabled")},_setOption:function(a,b,e){this._super(a,b,e);"disabled"===a&&this.co(b)},getNodeBySubId:function(a){var b=this._super(a);return b||(a=a.subId,"oj-checkboxset-inputs"!==a)?b||null:this.vh.get()},_destroy:function(){var a=this._super(),b=this.element[0].firstChild;this.vh&&this.vh._ojRadioCheckbox("destroy");f(b).contents().unwrap();
return a}});var a={br:!1}})()});