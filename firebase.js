'use strict';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBcR2e8IZVlG7sElYd2hl_NxOQcL4AAI6c",
  authDomain: "lsq-otp-reader.firebaseapp.com",
  databaseURL: "https://lsq-otp-reader.firebaseio.com",
  projectId: "lsq-otp-reader",
  storageBucket: "lsq-otp-reader.appspot.com",
  messagingSenderId: "221289736483",
  appId: "1:221289736483:web:e465f44491fc05827f4496",
  measurementId: "G-7MN78P8M05"
};
firebase.initializeApp(config);

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': function (response) {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});

var phoneNumber = getPhoneNumberFromUserInput();
var appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  .then(function (confirmationResult) {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
  }).catch(function (error) {
    window.recaptchaVerifier.render().then(function(widgetId) {
      grecaptcha.reset(widgetId);
    });
  });