/*
  See https://www.twilio.com/docs/sms/twiml for
  an example of a payload that Twilio would send.

  Try running in the console below.
*/

exports = function(payload) {
  return payload.FromCity === 'New York';
};