module.exports = {
  name: 'zulopoly-fields',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/zulopoly-fields',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
