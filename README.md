# Embed codepen pens in your AngularJS app

Easily embed [codepen](http://codepen.io/) pens in your AngularJS application.
 
- no custom markup required!
- simply paste the original codepen embed code in your markup
- supports multiple pens per page
- no additional scripting required, works out-of-the-box!

## Usage

First install the module using bower:
 
```bash
$ bower install angular-embed-codepen
```

then add the `embedCodepen` module to the dependencies of your AngularJS application module:

```javascript
angular.module('yourApp', ['embedCodepen']);
```

Now you can easily copy/paste original codepen embed code in your markup:

```xml
<p data-height="268" data-theme-id="0" data-slug-hash="PwzYvv" data-default-tab="result" data-user="DavidKern" class='codepen'>See the Pen <a href='http://codepen.io/DavidKern/pen/PwzYvv/'>David Kern HTML5 Table</a> by David Kern (<a href='http://codepen.io/DavidKern'>@DavidKern</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
```

There is no need to include the 

```javascript
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
```
line that comes with the original embed code.

You can just remove that line from your markup (after pasting the embed code) and it will all magically work.

## Contribute

To update the build in the `dist` directory:

```bash
$ gulp
```

To run the unit tests (for both concatenated and minified version):

```bash
gulp test
```

## Change log

### v1.0.0

- refactor to support original markup
- add unit tests
- update documentation

### v0.1.0

- Initial version
