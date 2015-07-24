nike-plus-webtask
==================

A [webtask.io](https://webtask.io/) compatible module to get your Nike+ activities.

**Note: by default Nike+ tokens only last for 1 hour. This means any webtask you create will only work for that long. I'm looking into ways to refresh the token in the background and if that will work with [webtask.io](https://webtask.io).**

[![Build Status](https://travis-ci.org/lukekarrys/nike-plus-webtask.png?branch=master)](https://travis-ci.org/lukekarrys/nike-plus-webtask)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Nike+ Tokens

For now, the way to get one for testing is to go to their [API Test Console](https://developer.nike.com/documentation/api-docs/activity-services/list-activities.html), run any API request and then get it by inspecting the request in your browser's devtools.

This is not great, and I'm working on finding the best way to do this with the Nike+ authorization flow.


## Usage

```sh
npm run login -- your@email.com
npm run create -- --secret TOKEN=NIKE_ACCESS_TOKEN
# Your container name will be shown after you create the webtask
curl -s https://webtask.it.auth0.com/api/run/{CONTAINER_NAME}/nike-plus?webtask_no_cache=1
```


## Contributing

Only the [whitelisted webtask.io](https://tehsis.github.io/webtaskio-canirequire/) modules can be used.


## Tests

`npm run test`


## TODO

- [ ] [Background auth flow and token refresh](https://developer.nike.com/sdk/web-starter-guide1/using-the-javascript-sdk-sample-app.html#center-par_heading_11) since a normal token only lasts 1hr
- [ ] Individual activity route
- [ ] Query param to batch fetch full individual activities
