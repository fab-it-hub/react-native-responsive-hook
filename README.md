 # React Native Responsive Hook: Streamline Your UI Across All Devices 🚀

#### Keen on shaping the future of responsive UI? Your contributions are invaluable! Reach out at zakriamuhammad3637@gmail.com.


## Contents
- [The Package](#react-native-responsive-hook)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contribute](#pull-requests)

## react-native-responsive-hook

[![npm version](https://badge.fury.io/js/react-native-responsive-hook.svg)](https://npmjs.com/package/react-native-responsive-hook)
[![npm downloads](https://img.shields.io/npm/dt/react-native-responsive-hook.svg)]()

**react-native-responsive-hook** is an intuitive library offering a suite of hooks that make crafting responsive UIs in React Native effortless. It builds upon react-native-responsive-screen, adding custom hooks and enhanced functionalities for precise breakpoint detection and scalable component design.

Experience streamlined development and consistent UI across devices. Learn more in [this detailed Medium article](https://medium.com/@mz-real/creating-responsive-uis-in-react-native-made-easy-with-react-native-responsive-hook-35fa5649cd5f)! 🚀

![React Native Responsive Hook Example](https://i.imgur.com/pEqLC5B.png)

## Installation

Install with npm for a seamless setup:

```bash
npm install react-native-responsive-hook --save
```

## Usage

Adapt your UI elements effortlessly with the following steps:

1. **Import**: Fetch `useResponsive` from `react-native-responsive-hook`.
2. **Retrieve**: Access `wp`, `hp`, `vw`, `vh`, `isLandscape`, `isPortrait`, `rem`, `rf`, `isIOS`, `isAndroid`, `breakpointGroup` using the hook.
3. **Implement**: Apply these dynamic values to your component styles for a fluid, adaptive UI.

### Understanding Breakpoints

`breakpointGroup` classifies the screen width into categories for targeted styling:

- `group1`: 0 - 399 pixels
- `group2`: 400 - 599 pixels
- `group3`: 600 - 767 pixels
- `group4`: 768 - 1007 pixels
- `group5`: 1008 - 1279 pixels
- `group6`: 1280 pixels and beyond

### Dynamic Dimensions with `wp`, `hp`, `vw`, and `vh`

- `wp(percent)`: Calculates width based on screen percentage.
- `hp(percent)`: Calculates height based on screen percentage.
- `vw(percent)`: Calculates width based on viewport width percentage.
- `vh(percent)`: Calculates height based on viewport height percentage.

These functions use density-independent pixels (`dp`) to ensure consistency across various devices.

### Responsive Font Scaling with `rem` and `rf`

- `rem(size)`: Converts font size to rem units.
- `rf(size)`: Converts font size to responsive font units (rf).

`rem` utilizes a multiplier to scale fonts based on the device's screen size, while `rf` ensures font sizes remain within a predefined range.

### Platform Detection with `isIOS` and `isAndroid`

- `isIOS`: Indicates if the platform is iOS.
- `isAndroid`: Indicates if the platform is Android.

Use these booleans to tailor your UI specifically for each platform.

## Examples

### Responsive Box Example

```javascript
// Import necessary packages
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';

// Define the App component
const App = () => {
  const { styles } = useStyles(); // Use the hook to get styles

  return (
    <View style={styles.container}>
      <View style={styles.responsiveBox}>
        <Text style={styles.text}>Responsive Box - Adjusts based on orientation, screen size, and platform.</Text>
      </View>
    </View>
  );
};

// Define the useStyles hook
const useStyles = () => {
  const { isLandscape, isPortrait, wp, hp, vw, vh, rem, rf, isIOS, isAndroid, breakpointGroup } = useResponsive(); // Destructure all properties from useResponsive
  
  // Utilize the hook values to create dynamic styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isLandscape ? 'lightblue' : 'gray', // Change background color based on orientation
      alignItems: 'center',
      justifyContent: 'center',
    },
    responsiveBox: {
      borderWidth: 2,
      borderColor: 'orange',
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: isPortrait ? wp(85) : wp(50),  // Adjust width based on orientation
      height: hp(17),                       // Adjust height using hp function
      backgroundColor: getBackgroundColorByGroup(breakpointGroup) // Change box color based on breakpoint group
    },
    text: {
      color: 'white',
      fontSize: rem(16), // Use rem for font size
      fontFamily: isIOS ? 'Helvetica' : 'Roboto', // Use different font families for iOS and Android
    }
  });

  return {styles};
};

function getBackgroundColorByGroup(breakpointGroup) {
  switch(breakpointGroup) {
    case 'group1': return 'lightgreen';
    case 'group2': return 'lightpink';
    case 'group3': return 'lightyellow';
    case 'group4': return 'lightcoral';
    case 'group5': return 'lightskyblue';
    case 'group6': return 'lightsteelblue';
    default: return 'white';
  }
}

export default App;

```


## Want to Contribute?

Your contributions are welcome! Feel free to submit pull requests or contact me directly to discuss how you can get involved