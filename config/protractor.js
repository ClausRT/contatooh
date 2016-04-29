var config = require('./config')();

exports.config = {
    sauceUser: config.sauceUser,
    sauceKey: config.sauceKey,
    capabilities: {
        'name': config.sauceTestName,
        'browserName': 'chrome',
        'tunnel-identifier': config.travisJobNumber,
        'build': config.travisBuild
    },
    specs: ['../test/e2e/**/*.js'],
    onPrepare: function () {        
        browser.get('http://localhost:3000/#/auth');
        browser.debugger();
        browser.element(by.linkText('Entre pelo GitHub')).click();
        browser.driver.findElement(by.id('login_field')).sendKeys(config.seleniumUser); //Not my real account
        browser.driver.findElement(by.id('password')).sendKeys(config.seleniumUserPassword);
        browser.driver.findElement(by.name('commit')).click();
    }
};

//Não está igual ao livro porém só funciona assim.