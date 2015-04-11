react-hot-gulp-boilerplate
=====================

Based on the [https://github.com/gaearon/react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate).

The original boilerplate by Dan Abramov provides the minimal dev environment to enable live-editing React components. 
This boilerplate adds gulp for *build-for-production* use.

Currently work in progress.


## Usage

```
npm install
```

### Development

```
gulp serve
open http://localhost:3000
```

Now edit `src/scripts/App.js`.  
Your changes will appear without reloading the browser like in [this video @ Dan Abramov](http://vimeo.com/100010922).

### Production

```
gulp build
```

Now you find your production-ready applicaiton in *build* directory.

## Goal & To-Do

Keep it simple but practical for small apps.

* Adding SCSS/SASS dev & prod support
* Make webpack configurations more complex :)

## Resources

* [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)
* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
