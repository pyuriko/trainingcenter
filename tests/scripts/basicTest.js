module.exports = {
  'Demo test GM' : function (browser) {
    browser
      .url('https://trainingcenter-test.mybluemix.net')



      .waitForElementVisible('#querosaber-btn', 6000, true,
        function(){}, 'O botão ficou visível')
      // .setValue('.searchbox.hidden-xs.hidden-sm', 'Test')
      // .waitForElementPresent('#search-page', 60000)
      .pause(5000)
      .end();
  }
};
