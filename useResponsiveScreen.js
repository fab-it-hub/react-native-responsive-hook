import { PixelRatio, Platform, useWindowDimensions } from 'react-native';
import { baseDevice, baseFontSize, breakpoints, maxFontScaleFactor } from './constants';

/**
 * Custom hook for handling responsive design in React Native applications.
 * @returns {Object} An object containing properties for responsive design.
 *   - isLandscape: A boolean indicating if the device is in landscape orientation.
 *   - isPortrait: A boolean indicating if the device is in portrait orientation.
 *   - wp: A function to convert width percentage to independent pixels.
 *   - hp: A function to convert height percentage to independent pixels.
 *   - vw: A function to convert width percentage to viewport-relative units (vw).
 *   - vh: A function to convert height percentage to viewport-relative units (vh).
 *   - rem: A function to convert font size to rem units.
 *   - rf: A function to convert font size to responsive font units (rf).
 *   - isIOS: A boolean indicating if the platform is iOS.
 *   - isAndroid: A boolean indicating if the platform is Android.
 *   - breakpointGroup: A string indicating the current breakpoint group based on the device width.
 */
const useResponsive = () => {
  const { width, height } = useWindowDimensions();

  /**
   * Determines if the device is in landscape orientation.
   * @type {boolean}
   */
  const isLandscape = width > height;

  /**
   * Determines if the device is in portrait orientation.
   * @type {boolean}
   */
  const isPortrait = width < height;

  /**
   * Gets the current breakpoint group based on the device width.
   * @returns {string} The name of the current breakpoint group.
   */
  const getBreakpointGroup = () => {
    for (let group in breakpoints) {
      if (width >= breakpoints[group][0] && width <= breakpoints[group][1]) {
        return group;
      }
    }
  };

  /**
   * The current breakpoint group based on the device width.
   * @type {string}
   */
  const breakpointGroup = getBreakpointGroup();

  /**
   * Converts provided width percentage to independent pixel (dp).
   * @param  {number | string} widthPercent The percentage of screen's width that UI element should cover.
   * @returns {number} The calculated dp depending on the current device's screen width.
   */
  const wp = (widthPercent) => {
    const elementWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((width * elementWidth) / 100);
  };

  /**
   * Converts provided height percentage to independent pixel (dp).
   * @param  {number | string} heightPercent The percentage of screen's height that UI element should cover.
   * @returns {number} The calculated dp depending on the current device's screen height.
   */
  const hp = (heightPercent) => {
    const elementHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((height * elementHeight) / 100);
  };

  /**
   * Converts provided width percentage to viewport-relative units (vw).
   * @param  {number | string} widthPercent The percentage of viewport's width that UI element should cover.
   * @returns {number} The calculated vw value.
   */
  const vw = (widthPercent) => {
    const elementWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
    return Math.floor((width / 100) * elementWidth);
  };

  /**
   * Converts provided height percentage to viewport-relative units (vh).
   * @param  {number | string} heightPercent The percentage of viewport's height that UI element should cover.
   * @returns {number} The calculated vh value.
   */
  const vh = (heightPercent) => {
    const elementHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);
    return Math.floor((height / 100) * elementHeight);
  };

  // Font scaling logic

  const base = isLandscape ? height : width;

  /**
   * Converts provided font size to rem units.
   * @param  {number | string} size The font size in pixels.
   * @returns {number} The calculated rem value.
   */
  const rem = (size = 0) => {
    let multiplier = 1;
    if (Math.max(height, width) < baseDevice.height) {
      multiplier = 0.9;
    }
    const elementSize = typeof size === 'number' ? size : parseFloat(size);
    return Math.floor((base / baseDevice.width) * elementSize * multiplier);
  };

  /**
   * Converts provided font size to responsive font units (rf).
   * @param  {number | string} size The font size in pixels.
   * @returns {number} The calculated rf value.
   */
  const rf = (size = 0) => {
    const elementSize = typeof size === 'number' ? size : parseFloat(size);
    const scaledFontSize = Math.min(baseFontSize * maxFontScaleFactor, elementSize);
    return scaledFontSize;
  };

  /**
   * Determines if the platform is iOS.
   * @type {boolean}
   */
  const isIOS = Platform.OS === 'ios';

  /**
   * Determines if the platform is Android.
   * @type {boolean}
   */
  const isAndroid = Platform.OS === 'android';

  return {
    isLandscape,
    isPortrait,
    wp,
    hp,
    vw,
    vh,
    rem,
    rf,
    isIOS,
    isAndroid,
    breakpointGroup,
  };
};

export default useResponsive;
