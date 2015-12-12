var gemini = require('gemini');
var className = '.btn';

gemini.suite('button', function (button) {
  button
    .setUrl('/')
    .setCaptureElements(className)
    .capture('plain')
    .capture('hover', function (actions) {
      actions.mouseMove(className);
    });
});
