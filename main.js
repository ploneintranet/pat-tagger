require.config({
    baseUrl: "",
    paths: {
        "jquery":                  "bower_components/jquery/jquery",
        "jquery.form":             "bower_components/jquery-form/jquery.form",
        "patterns":                "bower_components/patternslib/bundle",
        "pat-compat":              "bower_components/patternslib/src/core/compat",
        "logging":                 "bower_components/logging/src/logging",
        "pat-compat":              "bower_components/patternslib/src/core/compat",
        "pat-jquery-ext":          "bower_components/patternslib/src/core/jquery-ext",
        "pat-logger":              "bower_components/patternslib/src/core/logger",
        "pat-parser":              "bower_components/patternslib/src/core/parser",
        "pat-registry":            "bower_components/patternslib/src/core/registry",
        "pat-utils":               "bower_components/patternslib/src/core/utils",
        "pat-inject":              "bower_components/patternslib/src/pat/inject",
        "pat-ajax":                "bower_components/patternslib/src/pat/ajax",
        "pat-remove":              "bower_components/patternslib/src/pat/remove",
        "pat-input-change-events": "bower_components/patternslib/src/lib/input-change-events",
        "pat-htmlparser":          "bower_components/patternslib/src/lib/htmlparser", 
        "pat-remove":              "bower_components/patternslib/src/core/remove", 
        "pat-tooltip":             "bower_components/patternslib/src/pat/tooltip",
        "pat-checkedflag":         "bower_components/patternslib/src/pat/checkedflag",
        "pat-checklist":           "bower_components/patternslib/src/pat/checklist",
        "pat-autosubmit":          "bower_components/patternslib/src/pat/autosubmit",
        "moment":                  "bower_components/moment/moment",
        "pat-tagger":              "src/pat-tagger"
    }
});
require([
        "pat-registry",
        "pat-tooltip",
        "pat-checklist",
        "pat-autosubmit",
        "pat-inject",
        "pat-checkedflag",
        "pat-tagger"
    ], function(registry, colorchanger) {
    window.patterns = registry;
    registry.init();
    return;
});