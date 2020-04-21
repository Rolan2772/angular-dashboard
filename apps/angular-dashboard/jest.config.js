module.exports = {
  name: 'angular-dashboard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-dashboard',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
