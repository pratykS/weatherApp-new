/**
 * Created by prsah on 17-Jul-17.
 */
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        connect: {
            static: {
                options: {
                    port: 8083,
                    base: 'app',
                    keepalive: true,
                    hostname: '127.0.0.1',
                    open:{
                        appName:'chrome'
                    }
                }
            }

        }
    });

};