module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    loadPath: [
                        'bower_components'
                    ],
                    style: 'compressed'
                },
                files: {
                    'css/main.min.css': 'sass/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'sass/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('compile', ['sass']);
};
