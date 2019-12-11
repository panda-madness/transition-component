![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Transition Component

This project is an attemp to mimic Vue JS's [transitions](https://vuejs.org/v2/guide/transitions.html), but implemented in Web Component form. As such this component is usable with any front-end framework (React, Ember, Angular, etc.), or no framework at all if that's your jazz.

[Here's](https://codepen.io/panda_madness/pen/eYmZrbz) a demo on Codepen.

## Differences from Vue's `transition`

Since this is a web component it can't be _renderless_ like Vue's `transition`. As such, instead of managing classes on it's direct child, this component manages classes on itself. Checkout the demo on Codepen if it's unclear.

## Usage

Add some transition classes to your page (conventions explained [here](https://vuejs.org/v2/guide/transitions.html#Transition-Classes)).
Wrap anything you want to animate in/out in a `transition-component` element. Set it's `name` attribute to the name of your transition. Set it's `show` attribute to `true`/`false`. Watch the magic happen.

## Stencil

This project is built with Stencil. Stencil is a compiler for building fast web apps using Web Components.

## Using this component

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/@panda_madness/transition-component@0.1.0/dist/transition.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Bundler
- Run `npm install @panda_madness/transition-component --save`
- Add an import to the npm packages `import @panda_madness/transition-component;`
- Then you can use the element anywhere in your template, JSX, html etc
