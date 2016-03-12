var grunt = require('grunt');

grunt.initConfig({
    shell: {
        pythonServer: {
            options: {
                stdout: true
            },
            command: [
              "webpack",
              'python server.py'
            ].join('&&')
        }
    }
});

grunt.loadNpmTasks('grunt-shell');
grunt.registerTask('default', ['shell:pythonServer']);
