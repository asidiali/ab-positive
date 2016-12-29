# AB+
A lightweight, approachable A/B testing component for React.

The goal of this component is to provide a flexible barebones split testing setup that provides a simple layer to build on top of. One `onVariantLoad` callback is exposed once the chosen variant has loaded, which is the perfect time for transmitting analytics events or performing any further rendering procedures.

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
