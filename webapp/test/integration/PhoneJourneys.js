jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"undefined/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"undefined/test/integration/pages/App",
	"undefined/test/integration/pages/Browser",
	"undefined/test/integration/pages/Master",
	"undefined/test/integration/pages/Detail",
	"undefined/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: ".view."
	});

	sap.ui.require([
		"undefined/test/integration/NavigationJourneyPhone",
		"undefined/test/integration/NotFoundJourneyPhone",
		"undefined/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});