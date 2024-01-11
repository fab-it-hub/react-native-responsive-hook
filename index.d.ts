declare module "react-native-responsive-hook" {
  import { Component } from "react";

  /**
   * Type defining the return value of the useResponsive hook.
   *
   * @typedef {Object} UseResponsiveReturnType
   * @property {boolean} isLandscape - Indicates if the device is in landscape orientation.
   * @property {boolean} isPortrait - Indicates if the device is in portrait orientation.
   * @property {(widthPercent: number | string) => number} wp - Converts width percentage to independent pixels.
   * @property {(heightPercent: number | string) => number} hp - Converts height percentage to independent pixels.
   * @property {(widthPercent: number | string) => number} vw - Converts width percentage to viewport-relative units.
   * @property {(heightPercent: number | string) => number} vh - Converts height percentage to viewport-relative units.
   * @property {(size?: number | string) => number} rem - Converts font size to rem units.
   * @property {(size?: number | string) => number} rf - Converts font size to responsive font units.
   * @property {boolean} isIOS - Indicates if the platform is iOS.
   * @property {boolean} isAndroid - Indicates if the platform is Android.
   * @property {string} breakpointGroup - The current breakpoint group based on the device width.
   */
  type UseResponsiveReturnType = {
    isLandscape: boolean;
    isPortrait: boolean;
    wp: (widthPercent: number | string) => number;
    hp: (heightPercent: number | string) => number;
    vw: (widthPercent: number | string) => number;
    vh: (heightPercent: number | string) => number;
    rem: (size?: number | string) => number;
    rf: (size?: number | string) => number;
    isIOS: boolean;
    isAndroid: boolean;
    breakpointGroup: string;
  };

  /**
   * Converts provided width percentage to independent pixel (dp).
   * @param  {string | number} widthPercent - The percentage of screen's width.
   * @returns {number} The calculated dp depending on the current device's screen width.
   */
  export function widthPercentageToDP(widthPercent: string | number): number;

  /**
   * Converts provided height percentage to independent pixel (dp).
   * @param  {string | number} heightPercent - The percentage of screen's height.
   * @returns {number} The calculated dp depending on the current device's screen height.
   */
  export function heightPercentageToDP(heightPercent: string | number): number;

  /**
   * Event listener function that detects orientation change.
   * @param {Component<any, any>} screenClassComponent - Screen's class component.
   */
  export function listenOrientationChange(
    screenClassComponent: Component<any, any>
  ): void;

  /**
   * Wrapper function that removes orientation change listener.
   */
  export function removeOrientationListener(): void;

  /**
   * Custom hook for handling responsive design in React Native applications.
   * @returns {UseResponsiveReturnType} An object containing properties for responsive design.
   */
  export function useResponsive(): UseResponsiveReturnType;

  /**
   * Converts provided width percentage to viewport-relative units (vw).
   * @param  {string | number} widthPercent - The percentage of viewport's width.
   * @returns {number} The calculated vw value.
   */
  export function viewportWidthPercentage(
    widthPercent: string | number
  ): number;

  /**
   * Converts provided height percentage to viewport-relative units (vh).
   * @param  {string | number} heightPercent - The percentage of viewport's height.
   * @returns {number} The calculated vh value.
   */
  export function viewportHeightPercentage(
    heightPercent: string | number
  ): number;

  /**
   * Converts provided font size to rem units.
   * @param  {number | string} size - The font size in pixels.
   * @returns {number} The calculated rem value.
   */
  export function remUnit(size?: number | string): number;

  /**
   * Converts provided font size to responsive font units (rf).
   * @param  {number | string} size - The font size in pixels.
   * @returns {number} The calculated rf value.
   */
  export function responsiveFont(size?: number | string): number;

  /**
   * Boolean indicating if the device is in landscape orientation.
   */
  export const isLandscape: boolean;

  /**
   * Boolean indicating if the device is in portrait orientation.
   */
  export const isPortrait: boolean;

  /**
   * Boolean indicating if the platform is Android.
   */
  export const isAndroid: boolean;

  /**
   * Boolean indicating if the platform is iOS.
   */
  export const isIOS: boolean;

  /**
   * The current breakpoint group based on the device width.
   */
  export const breakpointGroup: string;
}
