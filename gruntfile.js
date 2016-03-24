var grunt = require('grunt');

grunt.initConfig({
    shell: {
        watch: {
            options: {
                stdout: true
            },
            command: [
              "webpack --watch"
            ].join('&&')
        }
    }
});

grunt.loadNpmTasks('grunt-shell');
grunt.registerTask('default', ['shell:watch']);
