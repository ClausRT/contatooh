exports.config = {
    specs: ['../test/e2e/**/*.js'],
    onPrepare: function () {        
        browser.get('http://localhost:3000/#/auth');
        browser.debugger();
        browser.element(by.linkText('Entre pelo GitHub')).click();
        browser.driver.findElement(by.id('login_field')).sendKeys('claushacker@hotmail.com'); //Not my real account
        browser.driver.findElement(by.id('password')).sendKeys('dia1234567890');
        browser.driver.findElement(by.name('commit')).click();
    }
};

//Não está igual ao livro porém só funciona assim.