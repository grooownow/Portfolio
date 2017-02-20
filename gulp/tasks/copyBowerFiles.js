'use strict';

module.exports = function() {
    $.gulp.task('copyBowerFiles', function() {
        return $.gulp.src($.mainBowerFiles( {
            "overrides" : {
                "bootstrap" : {
                    "main" : [ "./dist/css/bootstrap.min.css",
                        "./dist/js/bootstrap.min.js",
                    ]
                }
            }
        }))
            .pipe($.gulp.dest($.config.root+'/assets/libs'));
    });
};/**
 * Created by user199 on 2/20/2017.
 */
