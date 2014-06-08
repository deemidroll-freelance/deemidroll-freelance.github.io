module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    '../assets/css/main.css': 'scss/main.scss'
                }
            },
            options: {
                sourcemap: 'true'
            }
        },
        watch: {
            options: {
                    livereload: true,
                },
            css: {
                files: 'scss/*.scss',
                tasks: ['newer:sass'],
                
            },
            js: {
                files: ['../assets/js/*.js', '../assets/js/vendor/*.js'],
            },
            html: {
                files: '../mandarin/templates/*.html',
            }
        },
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-concat-sourcemap');
    grunt.loadNpmTasks('grunt-newer');
    // grunt.registerTask('process', ['concat_sourcemap', 'uglify']);
    grunt.registerTask('default', ['sass', 'watch']);
}