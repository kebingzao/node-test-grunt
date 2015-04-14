module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //JS检查
        jshint: {
			options: {
                curly: true,
                eqeqeq: true
            },
            files: ['add.js']
        }
    });
	grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};