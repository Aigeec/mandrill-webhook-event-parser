mandrill-webhook-event-parser
=========

Npm Module for parsing events from inbound webhooks for Mandrill

## Installation

```bash
$ npm install mandrill-webhook-event-parser --save
```

## Usage

```javascript
var parser = require('mandrill-webhook-event-parser');

app.use(parser());
```

The parser expects there the Mandrill events to have been urldecoded and stored at ```req.body.mandrill_events```. It will parse and store them at ```req.mandrillEvents``` for further processing.

## Tests
```bash
$ npm test
```
## Links

[api documentation](./docs/api.md)

[jscs Report](./docs/jscs.md)

[jshint Report](./docs/jshint.md)

## Contributing

Use [Airbnb jscs style guide](https://github.com/airbnb/javascript).

Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

Not yet released.

## Legal Stuff

mandrill-webhook-event-parser is Copyright 2016 Aodhagán Collins. All Rights Reserved.

Distributed under [MIT License](https://tldrlegal.com/license/mit-license).
