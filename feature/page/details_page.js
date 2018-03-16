//import { browser } from "protractor";
const page = require('esquadro/page');
'use strict';

var Detail = function() {

    // handling a second page



    /*var NewPage = function() {
        var newPage = this;
        newPage.detailsPage = async() => {
            handles = await browser.getAllWindowHandles()
                .then(handles => {
                    expect(handles[1]).toEqual("http://planosonline-hmg.nexteldigital.com.br/plano/pos/p");

                });
        };
    };
*/
    this.boxFranchise = element(by.css(".box-franchise"));
    this.purchaseBtn = element(by.css('[type="submit"]'));
    this.checkoutPage = element(by.css(".contR"));

    //post paid plans
    this.detailsP = element(by.xpath('/html/body/section[1]/div/div/div[2]/div[1]/div/h2[1]'));
    this.detailsM = element(by.xpath('/html/body/section[1]/div/div/div[2]/div[1]/div/h2[2]'));
    this.detailsG = element(by.xpath('/html/body/section[1]/div/div/div[2]/div[1]/div/h2[3]'));
    this.detailsGG = element(by.xpath('/html/body/section[1]/div/div/div[2]/div[1]/div/h2[4]'));

    //control plans
    this.detailscontrol1 = element(by.xpath('/html/body/section[1]/div/div/div[2]/div[1]/div/h2[1]'));
    this.detailscontrol2 = element(by.xpath('/html/body/section[1]/div/div/div[2]/div[1]/div/h2[2]'));
    this.detailscontrol3 = element(by.xpath('/html/body/section[1]/div/div/div[2]/div[1]/div/h2[3]'));

    this.changePlans = element(by.css('.link-p'));

};
module.exports = Detail;