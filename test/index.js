import ExperimentTests from '../src/experiment/tests';

const testSuites = [
  ExperimentTests,
];

testSuites.forEach((suite) => {
  Object.keys(suite).forEach(test => describe(test, suite[test]));
});
