var gemini = require('gemini');

gemini.suite('button', function(suite) {
  suite
    .setUrl('/')
    .setCaptureElements('.btn')
    .capture('plain')
    .capture('hover', function (actions) {
      actions.mouseMove('.btn');
    });
});
