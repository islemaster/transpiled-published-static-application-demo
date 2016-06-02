# Transpiled Published Static Application Demo

This is a test of creating a github repo that contains source files for a static application, which must be run through a build step to generate the immediately usable static version of that app, and then publishing the built static app to npm.

This is a trivial example; just an experiment to try making an NPM 'package' that is not a require-able 'module'.

## What GitHub Sees

Only source files get committed to the repository, so on GitHub you'll see:

* src/
  * index.html
  * js/
    * main.js (ES6)
    * work.js (ES6)
* .gitignore
* .npmignore
* README.md
* package.json
* webpack.config.js

We .gitignore the dist/ output directory and node_modules directory, because we don't want to keep those in the repository.

## What NPM and consumers see

We nearly do the opposite here: Only build output and a few extra files get published to NPM.  Therefore, on an `npm install transpiled-published-static-application-demo` you'll only get these in your `node_modules/transpiled-published-static-application-demo` directory

* dist/
  * index.html
  * js/
    * main.js (ES5)
* package.json
* README.md

## What developers see

If you are hacking on this module _and_ using it, you would see both the src/ and dist/ directories after a clone and build.  You could also use [`npm link`](https://docs.npmjs.com/cli/link) to point your consumer project at your local copy of this project.

