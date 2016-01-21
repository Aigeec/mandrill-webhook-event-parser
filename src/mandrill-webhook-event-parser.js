(function() {
  'use strict';

  var Q = require('bluebird');
  var _ = require('lodash');

  /**
  * Simple express middleware for parsing Inbound Mandrill Webhook events
  * @Module MandrillWebhookEventParser
 */

  var EventParser = function() {
    if (!(this instanceof EventParser)) {
      return new EventParser();
    }

    /**
    * Parses Mandrill Events request. Sets mandrillEvents property on req. Expects body to contain decoded post body mandrill_events parameter. Please see Madrills article  {@link https://mandrill.zendesk.com/hc/en-us/articles/205583207-What-is-the-format-of-inbound-email-webhooks- | What is the format of inbound email webhook }
    * @param { Request } req - Express request
    * @param { object } req.body - request body
    * @param { string } req.body.mandrill_events - JSON String of Mandrill events
    * @param { Response } res - Express response
    */
    var parser = function(req, res, next) {
      if (req.body && req.body.mandrill_events) {
        try {
          req.mandrillEvents = JSON.parse(req.body.mandrill_events);
          next();
        } catch (err) {
          next(err);
        }
      } else {
        next(new Error('No body or body is missing [mandrill_events] property'));
      }
    };

    return parser;
  };

  module.exports = EventParser;
})();
