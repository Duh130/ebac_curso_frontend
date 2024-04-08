module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.css': 'main.less'
                }
            }
        },
    
        uglify: {
            target: {
                files: { 'scripts/main.min.js': 'src/scripts/main.js' }
            }
        }
    });

    
    grunt.registerTask('olagrunt', function() {
        const done = this.async();
        setTimeout(function() {
            console.log('olagrunt');
            done();
        }, 3000);
    });

    
    grunt.registerTask('build', ['less:production', 'uglify']);

    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
