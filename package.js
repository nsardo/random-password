Package.describe({
  name: 'nsardo:random-password',
  version: '1.0.0',
  summary: 'Creates a randomly generated password of selected length',
  git: 'https://github.com/nsardo/random-password.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use('ecmascript');
  api.mainModule('random-password.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('practicalmeteor:mocha');
  api.use('nsardo:random-password');
  api.mainModule('random-password-tests.js');
});
