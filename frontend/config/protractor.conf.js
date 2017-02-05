require('ts-node/register');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var jasmineReporters = require('jasmine-reporters');
var helpers = require('./helpers');

exports.config = {
    baseUrl: 'http://localhost:9000/',

    specs: [
        helpers.root('src/**/**.e2e.ts'),
        helpers.root('src/**/*.e2e.ts')
    ],
    exclude: [],

    framework: 'jasmine2',

    allScriptsTimeout: 110000,

    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },
    directConnect: false,

    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path': require('phantomjs-prebuilt').path
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './test/e2e-results/html-formatted/',
                screenshotsFolder: 'screenshots'
            })
        );

        var junitReporter = new jasmineReporters.JUnitXmlReporter({
            savePath: './test/e2e-results/junit-formatted',
            consolidateAll: false
        });
        jasmine.getEnv().addReporter(junitReporter);
    },

    /**
     * Angular 2 configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     */
    useAllAngular2AppRoots: true
};
