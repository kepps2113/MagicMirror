/* global Module */

/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("MMM-ClockClock",{
	loaded: function(callback) {
		this.finishLoading();
		console.log(this.name + ' is loaded!');
		callback();
	},
/*getScripts: function() {
	return [
		this.file('js/main.e916124b.js')
	]
},*/
getStyles: function() {
return [
	this.file('css/main.0674f7cf.css'),
]
},
	// Default module config.
	defaults: {
		text: "Hello World!"
	},

	getTemplateData: function () {
		return this.config;
	},
	getDom: function() {
	var wrapper = document.createElement("div");
	wrapper.setAttribute("id", "root");
//	wrapper.innerHTML = '';
	var script = document.createElement("script");
	script.src = "modules/MMM-ClockClock/js/main.e916124b.js";
	document.head.appendChild(script)
	return wrapper;
},

});
