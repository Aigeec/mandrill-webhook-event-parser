(function() {
  'use strict';
  /*jshint expr: true*/

  var chai = require('chai');
  var sinon = require('sinon');
  var sinonChai = require('sinon-chai');
  var expect = chai.expect;
  chai.use(sinonChai);

  var eventHandler = sinon.spy();

  var eventParser = require('../src/mandrill-webhook-event-parser')();

  describe('#mandrill-webhook-event-parser', function() {

    it('expects 3 parameters', function() {
      expect(eventParser.length).to.equal(3);
    });

    it('parses the provided events', function(done) {
      var req = { body: { mandrill_events: '[{}, {}]' } };
      var res = {};
      var next = function(err) {
        expect(err).to.be.undefined;
        expect(req.mandrillEvents).to.eql([{}, {}]);
        done();
      };

      eventParser(req, res, next);
    });

    describe('request handler calling', function() {
      it('should call next() once', function() {
        var nextSpy = sinon.spy();
        eventParser({}, {}, nextSpy);
        expect(nextSpy.calledOnce).to.be.true;
      });

      it('should call next(err) once for invalid json', function() {
        var req = { body: { mandrill_events: 'invalid' } };
        var res = {};
        var nextSpy = sinon.spy();
        eventParser(req, {}, nextSpy);
        expect(nextSpy.calledOnce).to.be.true;
        expect(nextSpy.getCall(0).args[0].message).to.contain('Unexpected token i');
      });

      it('should call next(err) once for missing body', function() {
        var req = {};
        var res = {};
        var nextSpy = sinon.spy();
        eventParser(req, {}, nextSpy);
        expect(nextSpy.calledOnce).to.be.true;
        expect(nextSpy.getCall(0).args[0].message).to.contain('No body or');
      });

      it('should call next(err) once for missing mandrill_events', function() {
        var req = {};
        var res = {};
        var nextSpy = sinon.spy();
        eventParser(req, {}, nextSpy);
        expect(nextSpy.calledOnce).to.be.true;
        expect(nextSpy.getCall(0).args[0].message).to.contain('missing [mandrill_events] property');
      });
    });
  });
})();
