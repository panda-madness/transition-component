/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface TransitionComponent {
    'name': string;
    'show': boolean;
  }
}

declare global {


  interface HTMLTransitionComponentElement extends Components.TransitionComponent, HTMLStencilElement {}
  var HTMLTransitionComponentElement: {
    prototype: HTMLTransitionComponentElement;
    new (): HTMLTransitionComponentElement;
  };
  interface HTMLElementTagNameMap {
    'transition-component': HTMLTransitionComponentElement;
  }
}

declare namespace LocalJSX {
  interface TransitionComponent {
    'name'?: string;
    'show'?: boolean;
  }

  interface IntrinsicElements {
    'transition-component': TransitionComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'transition-component': LocalJSX.TransitionComponent & JSXBase.HTMLAttributes<HTMLTransitionComponentElement>;
    }
  }
}


