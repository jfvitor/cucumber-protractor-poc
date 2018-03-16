exports.config = {

    framework: 'custom', // set to "custom" instead of cucumber.
    frameworkPath: // require.resolve('serenity-js'), // path relative to the current config file
        require.resolve('protractor-cucumber-framework'),
    directConnect: true, // starts a server automatically
    specs: [
        './feature/*.feature' // Specs here are the cucumber feature files
    ],

    // serenity command line options
    serenity: {
        dialect: 'cucumber', // or 'mocha'
        outputDirectory: `${process.cwd()}/target/site/serenity/`,
    },
    // cucumber command line options
    cucumberOpts: {
        require: [
            './feature/**/*.js', // require step definition files before executing features
        ],
        // tags: [], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        format: ['json:results.json', 'pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        'dry-run': false, // <boolean> invoke formatters without executing steps
    },

    onPrepare: function() {
        // browser.manage().window().maximize(); // maximize the browser before executing the feature files
        browser.driver.manage().window().setSize(1680, 1050);

    },
    afterLaunch: function() {
        var reporter = require('cucumber-html-reporter');

        var options = {
            theme: 'bootstrap', //Available HTML themes: ['bootstrap', 'hierarchy', 'foundation', 'simple']
            jsonFile: 'results.json',
            output: './tests_result/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true
        };

        reporter.generate(options);
    }
};