module.exports = {
  'Demo test GM' : function (browser) {
    browser
      .url('https://trainingcenter-test.mybluemix.net');


      browser.expect.element('#querosaber-btn').to.be.present
      
      //.moveTo('#querosaber-btn', 6000, true,
      //  function(){}, 'O botão ficou visível')
      // .setValue('.searchbox.hidden-xs.hidden-sm', 'Test')
      // .waitForElementPresent('#search-page', 60000)
      browser.pause(5000)
      .end();
  }
};
