# AB+
A lightweight, approachable A/B testing component for React.

## Installation

## Usage

**Example Usage:**
```
<Experiment
  name="type_of_experiment"
  variantProps={{
    color: '#444',
  }}
  onVariantLoad={(variantName) => {
    // after variant is chosen
  }}
/>
  <Variant variantName="plain" component={BannerA} />
  <Variant variantName="bold" component={BannerB} />
</Experiment>
```

#### Experiments

#### Variants

## Troubleshooting

## Contributors
- Adam Sidiali [[Gh](http://github.com/asidiali)] [[Tw](http://twitter.com/adamsidiali)]
