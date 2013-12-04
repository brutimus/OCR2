requirejs.config({
    paths: {
        "jquery": "vendor/jquery-1.10.2.min",
        "jquery.bootstrap": "vendor/bootstrap.min"
    },
    shim: {
        "jquery.bootstrap": {
            deps: ["jquery"]
        }
    }
});

require(["jquery", "jquery.bootstrap"], function ($) {
    
});