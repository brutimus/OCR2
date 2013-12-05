requirejs.config({
    paths: {
        "jquery": "vendor/jquery-1.10.2.min",
        "jquery.bootstrap": "vendor/bootstrap.min",
        "less": "vendor/less-1.5.0.min"
    },
    shim: {
        "jquery.bootstrap": {
            deps: ["jquery"]
        }
    }
});

require(["jquery", "jquery.bootstrap", "less"], function($) {
    // $('.navbar,#sidebar').affix({
    //     offset: {
    //         top: 70
    //     }
    // });
});
