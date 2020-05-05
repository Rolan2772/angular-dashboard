module.exports = {
  name: 'some-service',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/some-service',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
