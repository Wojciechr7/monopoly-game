module.exports = {
  name: 'zulopoly',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/zulopoly',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
