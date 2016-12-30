# AB+
A lightweight, approachable A/B testing component for React.

The goal of this component is to provide a flexible barebones split testing setup for your React components with minimal implementation overhead. AB+ exposes key callbacks for handling experiments and reporting on variants, which can be used for things like transmitting analytics events and performing further rendering operations.

*Please note: this project is a work-in-progress. Feedback & contribution is greatly welcomed!*

# Installation

##### Via NPM
```
npm install --save ab-positive
```

# Usage

##### Basic example usage
```
import React from 'react';
import { BannerA, BannerB } from '../components';
import { Experiment, Variant } from 'ab-positive';

<Experiment name="homepage_banner" />
  <Variant name="plain" component={BannerA} />
  <Variant name="bold" component={BannerB} />
</Experiment>
```

### `Experiment`

An experiment manages a set of variants and dictates which variant is ultimately rendered.

You can use as many variants within an experiment as desired.

| prop (*required)   | type |  description |
|--------|-----------|------|-------------|
| `name`* | String |  a name for the experiment being run |

### `Variant`

A variant provides a wrapped instance of your component which allows for props to be injected.

| prop (*required)   | type |  description |
|--------|-----------|------|-------------|
| `name`* | String | a name for the variant |
| `component`* | React component | the component to load within the variant |

# Troubleshooting

# License
MIT [[LICENSE.md](https://github.com/asidiali/ab-positive/blob/master/LICENSE.md)]

# Contributors
- Adam Sidiali [[Gh](http://github.com/asidiali)] [[Tw](http://twitter.com/adamsidiali)]
