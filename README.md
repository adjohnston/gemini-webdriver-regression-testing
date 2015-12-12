# Gemini Webdriver Local Visual Regression Testing
This is just a simple project that covers using Gemini with local dependencies and Webdriver Manager.

## Install
* `npm install`
* `npm run webdriver-install`

## Running a Local Test
* `./node_modules/.bin/http-server ./ -p 8000`
* `npm run webdriver-start`

## Gather Screens
To gather screenshots to test against do

* `npm run gather-screens`.

## Test Screens
Once you have screens you can run the test suite against them.

* `npm run test-screens`
* make a change to `index.html`
* `npm run test-screens`

## Optional HTML Report
You can also see the results in a webpage.

* `npm run html-report`
