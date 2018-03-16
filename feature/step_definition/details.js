const Detail = require('../page/details_page.js');
const HomePage = require('../page/homepage_page.js');
const page = require('esquadro/page');
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

module.exports = function() {
        const homepage = new HomePage();
        const detail = new Detail();
        //const allHandles;


        this.Given(/^que estou na tela inicial de pesquisa de planos$/, function(callback) {
            // Write code here that turns the phrase above into concrete actions

            browser.get("http://planosonline-hmg.nexteldigital.com.br");

            callback()
                // detail.boxFranchise.click();
        });

        this.When(/^eu clico no botão 'saiba mais' de um dos planos disponíveis$/, function(callback) {
            // Write code here that turns the phrase above into concrete actions
            homepage.detailBtn.click();
            callback();
        });

        this.Then(/^sou direcionado para uma tela contendo os detalhes do plano que escolhi$/, async() => { // declara que o escopo trabalha de modo assincrono
            handles = await browser.getAllWindowHandles(); // aguarda a execução deste bloco
            browser.switchTo().window(handles[1]); // pega o segundo item (indice 1) que é a nova aba
            page.waitAlterUrl("http://planosonline-hmg.nexteldigital.com.br/plano/pos/p");
            //chai.expect(browser.driver.getCurrentUrl()).to.equal("http://planosonline-hmg.nexteldigital.com.br/plano/pos/p");
            //chai.expect(browser.getCurrentUrl()).to.equal("http://planosonline-hmg.nexteldigital.com.br/plano/pos/p");

        });

        this.Then(/^as opções de assinar o plano ou ver os demais planos disponíveis$/, function(callback) {
            // Write code here that turns the phrase above into concrete actions
            detail.purchaseBtn.click();
            callback();
        });

        this.Then(/^os benefícios disponíveis para o plano selecionado$/, function(callback) {
            // Write code here that turns the phrase above into concrete actions
            callback(null, 'pending');
        });
    }
    //module.exports = details;