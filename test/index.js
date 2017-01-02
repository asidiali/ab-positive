import Experiment from '../src/experiment/tests';

const componentTests = [
  { Experiment },
];

componentTests.forEach((component, index) => {
  const componentName = Object.keys(component)[0];
  describe(componentName, () => Object.keys(component[componentName]).forEach(test => it(test, component[componentName][test])));
});
