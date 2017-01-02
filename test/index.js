import Experiment from '../src/experiment/tests';

const componentTests = [
  { Experiment },
];

componentTests.forEach((component, index) => {
  const componentName = Object.keys(component)[0];
  Object.keys(component[componentName]).forEach(test => describe(componentName, () => it(test, component[componentName][test])));
});
