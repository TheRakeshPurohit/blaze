Package.describe({
  name: 'blaze-hot',
  summary: "Update files using Blaze's API with HMR",
  version: '2.0.0',
  git: 'https://github.com/meteor/blaze.git',
  documentation: null,
  debugOnly: true
});

Package.onUse(function (api) {
  api.use('modules@0.20.1');
  api.use('ecmascript@0.16.9');
  api.use('blaze@3.0.0');
  api.use('templating-runtime@2.0.0');
  api.use('hot-module-replacement@0.5.4', { weak: true });

  api.addFiles('hot.js', 'client');
  api.addFiles('update-templates.js', 'client');
});
