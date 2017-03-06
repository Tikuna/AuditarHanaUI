jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Empresa in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"undefined/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"undefined/test/integration/pages/App",
	"undefined/test/integration/pages/Browser",
	"undefined/test/integration/pages/Master",
	"undefined/test/integration/pages/Detail",
	"undefined/test/integration/pages/Create",
	"undefined/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: ".view."
	});

	sap.ui.require([
		"undefined/test/integration/MasterJourney",
		"undefined/test/integration/NavigationJourney",
		"undefined/test/integration/NotFoundJourney",
		"undefined/test/integration/BusyJourney",
		"undefined/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});