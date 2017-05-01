nike-plus-webtask
==================

A [webtask.io](https://webtask.io/) compatible module to get your Nike+ activities.

[![Build Status](https://travis-ci.org/lukekarrys/nike-plus-webtask.png?branch=master)](https://travis-ci.org/lukekarrys/nike-plus-webtask)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/lukekarrys/nike-plus-webtask.svg)](https://greenkeeper.io/)

**Note: by default Nike+ tokens only last for 1 hour. This means any webtask you create will only work for that long. I'm looking into ways to refresh the token in the background and if that will work with [webtask.io](https://webtask.io).**


**Note: by default Nike+ tokens only last for 1 hour. This means any webtask you create will only work for that long. I'm looking into ways to refresh the token in the background and if that will work with [webtask.io](https://webtask.io).**


## Nike+ Tokens

For now, the way to get one for testing is to go to their [API Test Console](https://developer.nike.com/documentation/api-docs/activity-services/list-activities.html), run any API request and then get it by inspecting the request in your browser's devtools.

This is not great, and I'm working on finding the best way to do this with the Nike+ authorization flow.


## Usage

```sh
 # Only needed the first time to initialize the webtask cli
npm run init -- YOUR@EMAIL.COM

cp .env.example .env # Edit with your token
npm run create

# Your container name will be shown after you create the webtask
curl -s https://wt-{CONTAINER_NAME}.run.webtask.io/nike-plus-webtask
```


## Contributing

To be run locally, this requires `node >= 6.0.0`. When deployed it uses `use latest` so `wt-cli` builds it with `babel`.


## Tests

`npm run test`


## License

MIT
