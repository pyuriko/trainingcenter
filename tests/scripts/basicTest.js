module.exports = {
  'Demo test GM' : function (browser) {
    browser
      .url('https://trainingcenter.mybluemix.net')
      .waitForElementVisible('.searchbox.hidden-xs.hidden-sm', 60000, true,
        function(){}, 'Waiting for Search Input to become visible')
      .setValue('.searchbox.hidden-xs.hidden-sm', 'Test')
      .waitForElementPresent('#search-page', 60000)
      .pause(5000)
      .end();
  }
};
