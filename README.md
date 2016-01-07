# Framework Bootstrap with ExpressJS, VueJS, Twitter Bootsrap, Less, Gulp, Browserify (2016)

Now using node v5.2.0 (npm v3.3.12)

Check your node version and NPM. If it's too high or too low version, the clone might not work as expected.
Use NVM.

Install this script from terminal:


```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash
nvm install 5.2.0 # This will install the latest node
nvm use 5.2.0
```

> to set default node version `nvm alias default 0.12.7` this will set node to version 0.12.7


## After Clone from this repository

```bash
npm install
bower install
. patch_bootstrap_less.sh
gulp less js
```


## To start server

```bash
npm start
```

or on different port
```bash
PORT=3333 npm start
```

## Use gulp for development


```bash
# option 1
gulp # default task: will watch files and compiles js and less files

# option 2
gulp reload # start server and watch some files changes, then reload livereload and server
```

More gulp tasks options, for example: `gulp less`
- less
- less:bootstrap
- js
- js:bower_components
- js:browserify
- watch
- watch:bootstrap
- watch:bower_components
- watch:browserify
- default
- reload
- reload:browser
- reload:server