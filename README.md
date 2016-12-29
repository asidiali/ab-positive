# AB+
A lightweight, approachable A/B testing component for React.

## Installation

##### Via NPM
`npm install --save ab-positive`

## Usage

##### Example Usage
```
import React from 'react';
import { BannerA, BannerB } from '../components';
import { Experiment, Variant } from 'ab-positive';

<Experiment
  name="type_of_experiment"
  variantProps={{
    color: '#444', // gets passed into all variants
  }}
  onVariantLoad={(variantName) => {
    // do something after variant is chosen
  }}
/>
  <Variant name="plain" component={BannerA} />
  <Variant name="bold" component={BannerB} />
</Experiment>
```

#### Experiments

#### Variants

## Troubleshooting

## Contributors
- Adam Sidiali [[Gh](http://github.com/asidiali)] [[Tw](http://twitter.com/adamsidiali)]
