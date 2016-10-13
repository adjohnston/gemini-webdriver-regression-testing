const config = require('../config.js');

const className = '.btn';

gemini.suite('buttons', function (buttons) {
  buttons
    .setUrl('/')
    .setCaptureElements(className);

  gemini.suite('buttonSmall', (buttonSmall) => {
    buttonSmall
      .before((actions) => {
        actions.setWindowSize(
          config.viewports.small.width,
          config.viewports.small.height
        );
      })
      .capture('normal')
      .capture('hover', function (actions) {
        actions.mouseMove(className);
      });
  });

  gemini.suite('buttonMedium', (buttonMedium) => {
    buttonMedium
      .before((actions) => {
        actions.setWindowSize(
          config.viewports.medium.width,
          config.viewports.medium.height
        );
      })
      .capture('normal')
      .capture('hover', function (actions) {
        actions.mouseMove(className);
      });
  });

  gemini.suite('buttonLarge', (buttonLarge) => {
    buttonLarge
      .before((actions) => {
        actions.setWindowSize(
          config.viewports.large.width,
          config.viewports.large.height
        );
      })
      .capture('normal')
      .capture('hover', function (actions) {
        actions.mouseMove(className);
      });
  });
});
