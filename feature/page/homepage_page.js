'use strict';

var HomePage = function() {

    this.detailBtn = element(by.css(".btnSaiba"));
    this.postPaidBtn = element(by.buttonText("Pós-pago"));
    this.postPlans = element(by.xpath('//*[@id="frmHome"]/section[2]/ul[1]'));
    this.controlBtn = element(by.buttonText("Controle"));
    this.controlPlans = element(by.css('//*[@id="frmHome"]/section[2]/ul[2]'));

};


module.exports = HomePage;