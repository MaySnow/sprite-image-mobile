module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        src: {
            images:"images/"
        },
        /*  target: {
         CKhome:"target/CKmobile-1.0"
         },*/
        sprite:{
            act: {
                'padding': 10,
                src: '<%= src.images %>/img/*.png',
                destImg: '<%= src.images %>/result/act.png',
                destCSS: '<%= src.images %>/result/act.css',
                'algorithm': 'binary-tree',
                'cssOpts': {
                    'functions': false,
                    'cssClass': function (item) {
                        return '.act-' + item.name;
                    }
                }
            },
            actmin: {
                'padding': 5,
                src: '<%= src.images %>/imgmin/*.png',
                destImg: '<%= src.images %>/result/act-min.png',
                destCSS: '<%= src.images %>/result/act-min.css',
                'algorithm': 'binary-tree',
                'cssOpts': {
                    'functions': false,
                    'cssClass': function (item) {
                        return '.act-' + item.name;
                    }
                }
            }
        }


    });
    // 载入插件
    grunt.loadNpmTasks('grunt-spritesmith');

};