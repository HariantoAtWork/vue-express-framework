There are so many tools out there for deploying and building large scalable ready apps. And sometimes is a ‘simple’ website not enough. In this tutorial we're going to use HTML, CSS(LESS) and Javascript for frontend, backend and deployment. But server deployments is on Mac. Some tasks might work similar on Ubuntu.

- Frontend
  - MVVM VueJS (1.0.13)
  - Bootstrap (v3.3.5)
  - LESS (2.5.3)
- Backend
  - ExpressJS (4.13.1)
- Deployment
  - Bower
  - Gulp (The streaming build system)
     - LESS
     - Browserify
     - Sourcemaps
     - etc.
- Server Deployment (once)
  - Brew (for Mac)
     - NPM (v3.3.12)
     - Node (v5.2.0)
  - Node (`npm install -g`)
     - express-generator
     - gulp
     - bower
     - browserify
     - livereload

## Server installations

Server installations usually happen once. What’s done is done and we can move on deploying for the web.

### Install Brew for Mac

I recommend to use Brew for your developing environment. To install Node and such unix-like dependencies, such as NodeJS, Nginx, Apache, etc.

Installing Homebrew from the terminal

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

> If `ruby -e` command not working for you, you should install XCode first from the App Store. This will help install Brew on your Mac

> Check your brew health with:<br/>
`brew doctor`

> If you installed a brew formula for example `gettext`, link it with `brew link <formula>`:<br/>
`brew link gettext`

> More info about [Brew](http://brew.sh/) for Mac

### Install NPM and Node
The NPM is the package manager for Node / Javascript.
It's scary at first if you’re used to PHP, but it’s really great and small for the tasks you’re going to love.

```bash
brew install npm
```
This will install `node` and `npm`.

> Check your installation:<br/>
`npm -v` and `node -v`<br/>
Mine will say: node v5.2.0 (npm v3.3.12)

### Node Global Installation

Since we’ve installed Brew on Mac we don’t need `sudo` for our development environment when we want to install Node dependencies globally with `npm install -g`.

In bash terminal type this to install node dependencies *globally*.

```bash
npm install -g express-generator
npm install -g gulp
npm install -g bower
npm install -g browserify
npm install -g livereload
```

<small>[TODO: Add here node dependencies descriptions]</small>

> One line single run: <br/>
`npm install -g express-generator gulp bower browserify livereload`

## Deploy ExpressJS Project

As you know, we can use a generator to deploy our first Express app. Since I’m fan of LESS and Handlebars we run a command with extra flags.

```bash
express --hbs --css less --git vue-express-deployment
```

> `--hbs` add handlebars engine support<br/>
`--css less` add stylesheet LESS engine support<br/>
`--git` add .gitignore


Then follow it's instruction.

```bash
# install dependencies:
cd vue-express-deployment && npm install

# run the app:
DEBUG=vue-express-deployment:* npm start
```

> Express Generator version: 4.13.1<br/>
`express -V`

## Initiate Git
For any project you should initiate git. Luckily the engine already give us some config for `.gitignore` file.

> A collection of useful [.gitignore](https://github.com/github/gitignore) templates


```bash
# Initiate Git
git init

# add .gitignore and commit
git add .gitignore  
git commit -avm "INIT .gitignore - vue-express-deployment"

# add current structure
git add .
git commit -avm "INIT default file structure ExpressJS ~4.13.1 with Handlebars Less support"
```

> Optional: You can Github or BitBucket service in your repository 

```bash
git remote add origin https://github.com/HariantoAtWork/vue-express-deployment.git
git push -u origin master
```

## Add Handlebars Partial view configuration

Let’s edit **app.js** and add lines
```js
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
```

So it look like
```js
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
hbs.registerPartials(__dirname + '/views/partials');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


/*
…
etc.
…
*/
```

## Developing directory
For your developing assets let’s make your project well structured. Of course you can change whatever you think is good for your project. So here is mine:

```default
/  resources
   /  js
      /  util
   /  vue
      /  core
         /  component
         /  directive
         /  filter
         /  partial
         - component.js
         - directive.js
         - filter.js
         - partial.js
      /  init
      /  route
      - app.js
      - bootstrap.vue.js
   /  less
      /  init
         - variables.less
         - mixins.less
      /  base
         - base.less
         - layout.less
      /  util
         - util.less
      /  bootstrap
         - variables.less
         - bootstrap.less
      - app.bootstrap.less
   /  bower_components
      /  bootstrap
         /  dist
            /  js
               - bootstrap.js
               - bootstrap.min.js
            /  less
               - alerts.less
               - badges.less
               - bootstrap.less
               …
               …
               - variables.less
               - wells.less
      /  jquery
         /  dist
            - jquery.js
            - jquery.min.js
   /  vendor
      /  hariantoatwork
         /  vue-express-deployment
         /  gulp-laravel-deployment
         /  grunt-laravel-deployment
      /  other-developer
         /  webscraping
         /  unique-slapping
      /  another-github
      /  another-bitbucket

```

> I place all my frontend related files in `/resources`. And any backend related files on: `/resources/util`

## Working on layout
### Creating .hbs partial views

Let’s create some partial views and connect them in **layout.hbs**.

file: */views/partials/*&shy;**header.hbs**

```html
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css" />
	<link rel="stylesheet" href="http://designmodo.github.io/Flat-UI/dist/css/flat-ui.min.css" />
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" />
	<link rel="stylesheet" href="/fonts/Oswald/Oswald.css" />
```

file: */views/partials/*&shy;**script.hbs**

```html
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
    <script src="http://designmodo.github.io/Flat-UI/dist/js/flat-ui.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/vue/1.0.13/vue.min.js"></script>
    <script src="/javascripts/app.browserify.js"></script>
```

To connect partials you add them with `{{>partialname}}`.
In this case it’s `{{>header}}` and `{{>script}}`

file: */views/*&shy;**layout.hbs**
```hbs
<!DOCTYPE html>
<html>
  <head>
    <title>{{title}}</title>
{{>header}}
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    {{{body}}}
{{>script}}
  </body>
</html>
```

### Set up a quick template

A quick template to make sure if everything is alright on this point.

file: */views/*&shy;**index.hbs**
```html
<div class="mizu-container" id="app">
	<header class="mizu-header">The header</header>
	<div class="mizu-body">
		<main class="mizu-content">
			<h1>{{title}}</h1>
			<p>Welcome to {{title}}</p>
		</main>
		<nav class="mizu-nav">
			Navigation
		</nav>
		<aside class="mizu-ads">
			Advertisement
		</aside>
	</div>
	<footer class="mizu-footer">The Footer</footer>
</div>
```

file: */public/stylesheets/*&shy;**style.less**

```less
/* mixin */
.flex() {
	display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
	display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
	display: -ms-flexbox;      /* TWEENER - IE 10 */
	display: -webkit-flex;     /* NEW - Chrome */
	display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

.flex--column() {
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
		-ms-flex-direction: column;
			flex-direction: column;
}

.flex--row() {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-webkit-flex-direction: row;
		-ms-flex-direction: row;
			flex-direction: row;
}

.flex-flex(@flex: 1) {
	-webkit-box-flex: @flex;      /* OLD - iOS 6-, Safari 3.1-6 */
	-moz-box-flex: @flex;         /* OLD - Firefox 19- */
	-webkit-flex: @flex;          /* Chrome */
	-ms-flex: @flex;              /* IE 10 */
	flex: @flex;    
}

.flex-content(@content) {
	-webkit-justify-content: @content;
	-ms-flex-pack: @content;
	justify-content: @content;
}

.text-overflow(@val: ellipsis) {
	text-overflow: @val;
}

.filter(@val: blur(5px)) {
	-webkit-filter: @val;
	-moz-filter:    @val;
	-o-filter:      @val;
	-ms-filter:     @val;
	filter:         @val;
}
.transition(@type:all, @duration:.4s, @ease:ease-out) when not (@type = all) {
	    -ms-transition:     -ms-@type @duration @ease;
	   -moz-transition:    -moz-@type @duration @ease;
	-webkit-transition: -webkit-@type @duration @ease;
	        transition:         @type @duration @ease;
}

.transform(...) {
  -webkit-transform: @arguments;
     -moz-transform: @arguments;
      -ms-transform: @arguments;
       -o-transform: @arguments;
          transform: @arguments;
}

.gradient(...) {
	background: -webkit-linear-gradient(@arguments); /* For Safari 5.1 to 6.0 */
	background:    -moz-linear-gradient(@arguments); /* For Firefox 3.6 to 15 */
	background:      -o-linear-gradient(@arguments); /* For Opera 11.1 to 12.0 */
	background:         linear-gradient(@arguments); /* Standard syntax */
}

/* END mixin */

/* util */
.u-box {
	.flex();
}

.u-box--column {
	.flex--column();
}

.u-box--row {
	.flex--row();
}

.u-box-flex {
	.flex-flex(1);
}

.u-relative {
	position: relative;
}
.u-absolute {
	position: absolute;
}
.u-absolute-full {
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100%;
}
.u-hidden {
	display: none;
}

.u-overflow {
	overflow: hidden;
	&-x {
		overflow-x: scroll;
		overflow-y: hidden;
		-webkit-overflow-scrolling: touch;
		-webkit-transform: translateZ(0px);
		-webkit-transform: translate3d(0,0,0);
		-webkit-perspective: 1000;
	}

	&-y {
		overflow-x: hidden;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		-webkit-transform: translateZ(0px);
		-webkit-transform: translate3d(0,0,0);
		-webkit-perspective: 1000;
	}
}

.u-text-overflow {
	white-space: nowrap;
	.text-overflow();
}

.u-height {
	height: 100%;
}
/* END util */

/* base */
html {
	font-family: Oswald,Helvetica,Arial,sans-serif;
	font-size: 62.5%; // reset makes 1.0rem equals to 10px;
}

body {
	font-size: 1.6rem;
}
/* END base */

/* layout */
body {
	min-height: 100vh;
}

.mizu-container {
	.flex();
	.flex--column();
	min-height: 100vh;
}

.mizu-header,
.mizu-footer {
	background-color: #646065;
	color: white;
	height: 50px;
}


.mizu-body {
	.flex();
	.flex--column();
}

.mizu-content {
	color: #766561;
	background-color: #CBCBCB;
}

.mizu-nav {
	order: -1;
	color: #EDE8E1;
	background-color: #D2C4BE;
}

.mizu-ads {
	color: #EDE8E1;
	background-color: #D2C4BE;
}

@media (min-width: 768px) {
	.mizu-body {
		.flex--row();
		.flex-flex(1)
	}
	.mizu-content {
		.flex-flex(1)
	}
	.mizu-nav, .mizu-ads {
		/* 12em is the width of the columns */
		.flex-flex(0 0 12em)
	}
}
/* END layout */
```

#### Run the Node app

Let's run and check the app on your browser.

```bash
DEBUG=vue-express-deployment:* npm start  
```
> http://localhost:3000

> It's possible to start different port without editting the config file. This is possible because `/bin/www` file, has `process.env.PORT`.

> run: `PORT=8080 npm start`

At this point when viewing the web the */public/stylehseets/*&shy;**style.less** being automatically compiled to **style.css**.

## Create ‘Resource’ file structure

[Remember](#developingdirectory) the folder structure I mentioned?

```default
\  resources\less
   \  init
      - mixin.less
   \  base
      - base.less
      - layout.less
   \  util
      - util.less
   - app.bootstrap.less
```

Let’s separate the large code less file from */public/stylesheets/*&shy;**style.less** into smaller chunks of files according the folder structure above.

file: */resources/less/*&shy;**app.bootstrap.less**
```less
@import 'init/mixin';
@import 'base/base';
@import 'base/layout';
@import 'util/util';
```

Make sure we connect */public/stylesheets/*&shy;**style.less** too by replacing all lines to this:

```less
@import '../../resources/less/app.bootstrap.less';
```

## Bower
Bower - A package manager for the web

### Set path Bower dependencies installation
We&rsquo;re going to set up the path for Bower dependencies before we continue or they will install in the default directory *bower_components*. First we must create a file **.bowerrc**.
with
```javascript
{
  "directory": "resources/bower_components"
}
```

### Initialise Bower
We need to initiate the file for Bower. So we could save dependencies and download it back when we have to.

To initialise Bower from you project&rsquo;s directory run:
```bash
bower init
```
and follow the instructions. The command will create your **bower.json** file, necessary for any Front End needs.

? May bower anonymously report usage statistics to improve the tool over time? (Y/n) : `n`<br/>
? name: (public) : `vue-express-deployment`<br/>
? version: (0.0.0) : <kbd>Enter</kbd><br/>
? description: `Deployment workflow for Vue Express Browserify Bootstrap LESS Gulp CDN`<br/>
? main file: `gulpfile.js`<br/>
? what types of modules does this package expose? <br/>
&nbsp;&nbsp;◯ amd<br/>
&nbsp;&nbsp;◯ es6<br/>
&nbsp;&nbsp;◯ globals<br/>
❯◯ `node`<br/>
&nbsp;&nbsp;◯ yui<br/>
? keywords: `VueJS, Express, Bootstrap, LESS, Gulp, Browserify, mdstn.com, mizu.work`<br/>
? authors: `Harianto van Insulinde`<br/>
? license: (MIT) : `CC-BY-4.0`<br/>
? homepage: `mizu.work` or `mdstn.com`<br/>
? set currently installed components as dependencies? (Y/n) :<kbd>Enter</kbd><br/>
? add commonly ignored files to ignore list? (Y/n) :<kbd>Enter</kbd><br/>
? would you like to mark this package as private which prevents it from being accidentally published to the registry? (y/N) : `y`<br/>
? Looks good? (Y/n) :<kbd>Enter</kbd><br/>

```javascript
{
  "name": "vue-express-deployment",
  "version": "0.0.0",
  "homepage": "https://github.com/HariantoAtWork/vue-express-deployment",
  "authors": [
    "Harianto van Insulinde <hariantoatwork@gmail.com>"
  ],
  "description": "Deployment workflow for Vue Express Browserify Bootstrap LESS Gulp CDN",
  "main": "gulpfile.js",
  "keywords": [
    "VueJS",
    "Bootstrap",
    "LESS",
    "Gulp",
    "Browserify",
    "mdstn.com",
    "mizu.work"
  ],
  "license": "CC-BY-4.0",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "resources/bower_components",
    "test",
    "tests"
  ]
}
```
When you set **.bowerrc** correctly, you'll see the path:
`resources/bower_components` is in the `ignore`, which is good.

> At this point you should add `resources/bower_components` in your **.gitignore**

### Frontend dependencies
We'll be using Bootstrap and jQuery so let's install them with Bower.

Now run:
```bash
bower install -S bootstrap
```


The `-S`|`--save` flag will save the dependency in the **bower.json** file and later you can just run `bower install` to replicate the exact front-end dependencies of your project. If you're not one of those guys paranoid about github just dying one day and our poor selves left without our packages, you can  freely add *bower_components* to your **.gitignore** file and just track **bower.json**.

I know you noticed already; I'm forgetting about jQuery. But actually we already got it. In its **bower.json** file Bootstrap defines that it depends on jQuery, so it got automatically pulled in together with Bootstrap.

> Read more information about bower on http://bower.io


<p>Here's how our components folder turned out (only the parts that concern us):  </p>

```default
/  resources/bower_components
   /  bootstrap
      /  dist
         /  js
            - bootstrap.js
            - bootstrap.min.js
         /  less
            - alerts.less
            - badges.less
            - bootstrap.less
            …
            …
            - variables.less
            - wells.less
   /  jquery
      /  dist
         - jquery.js
         - jquery.min.js
```

## Clone Twitter Bootstrap parts
Luckily Twitter Bootstrap has LESS files we can use in our workflow. We don't need to clone the whole directory, just a couple of files and change their paths to make LESS work.

Let’s create a directory **bootstrap** in our less.

> You can run `patch_bootstrap_less.sh` script below to skip this part of the guide.

&shy;
> path: */resources/less/*&shy;**bootstrap/**

And have a file structure like this
```default
/  resources/less/bootstrap
   - variables.less
   - bootstrap.less
```

> You can copy **bootstrap.less** from Bootstrap and rename it to **/resources/less/bootstrap/bootstrap.less**

> You can copy **variables.less** from Bootstrap and put it to **/resources/less/bootstrap/variables.less**

The stylesheets that are common to both the backend and front end are in **bootstrap.less**. That's also the file where we include all the components from Bootstrap we need. It will go something like this:

The file **/resources/less/bootstrap/bootstrap.less**:
```javascript
// Core variables and mixins
@import "variables.less";
@import "../../bower_components/bootstrap/less/mixins.less";

// Reset
@import "../../bower_components/bootstrap/less/normalize.less";
@import "../../bower_components/bootstrap/less/print.less";

// Core CSS
@import "../../bower_components/bootstrap/less/scaffolding.less";
@import "../../bower_components/bootstrap/less/type.less";
@import "../../bower_components/bootstrap/less/code.less";
@import "../../bower_components/bootstrap/less/grid.less";
@import "../../bower_components/bootstrap/less/tables.less";
@import "../../bower_components/bootstrap/less/forms.less";
@import "../../bower_components/bootstrap/less/buttons.less";
/*  
…
…
*/
```

> If you already copy the (bower_components Bootstrap) **bootstrap.less** to (resources/less Bootstrap) **bootstrap.less**, make sure you correct the path like the script above

> By commenting in/out a line, is much easier to enable/disable Bootstrap module


Make sure you copy your (bower_components) Bootstrap glyphicons in the public folder:
`public/fonts/glyphicons/`

Search `@icon-font-path: "../fonts/";` and replace the path with: `/fonts/glyphicons/`.

The file **/resources/less/bootstrap/variables.less**:
```less
/*
…
…
*/
@icon-font-path: "/fonts/glyphicons/"
/*
…
…
*/
```

#### script
> Or use this script below to do the folder creating, files copying and change paths
```bash
#!/bin/sh
### Script created by @HariantoAtWork
### Date 2015-07-17

# PATHS

ROOT_DIR=`pwd`  
RESOURCES_DIR=$ROOT_DIR/resources  
RESOURCES_ASSETS=$RESOURCES_DIR  #/Editable

BOWER_COMPONENTS=$RESOURCES_ASSETS/bower_components  
BOOTSTRAP_LESS=$BOWER_COMPONENTS/bootstrap/less  
BOOTSTRAP_FONTS=$BOWER_COMPONENTS/bootstrap/fonts

RESOURCES_LESS_BOOTSTRAP=$RESOURCES_ASSETS/less/bootstrap  
PUBLIC_DIR=$ROOT_DIR/public  #Editable
PUBLIC_ASSETS=$PUBLIC_DIR   #Editable  
PUBLIC_FONTS=$PUBLIC_ASSETS/fonts  
GLYPHICONS=$PUBLIC_FONTS/glyphicons


# ACTIONS

## Create folder: bootstrap in less
mkdir -p $RESOURCES_LESS_BOOTSTRAP  
## Create glyphicons folder in public if not exist
mkdir -p $GLYPHICONS  
# copy Bootstrap fonts to pubic
cp $BOOTSTRAP_FONTS/*.* $GLYPHICONS


## reads variables.less (from Bootstrap directory), change path names and save to current directory ### Editable
sed 's|"../fonts/"|"/fonts/glyphicons/"|g' $BOOTSTRAP_LESS/variables.less > $RESOURCES_LESS_BOOTSTRAP/variables.less  
## reads bootstrap.less (from Bootstrap directory), change path names, except with the line 'variables' and save to current directory
sed '/variables/!s|@import "|@import "../../bower_components/bootstrap/less/|g' $BOOTSTRAP_LESS/bootstrap.less > $RESOURCES_LESS_BOOTSTRAP/bootstrap.less

cd $ROOT_DIR  
echo 'DONE.' 
```

> Save this script as **`patch_bootstrap_less.sh`** and<br/> run: `. patch_bootstrap_less.sh`

Let's connect *bootstrap.less* in our **app.bootstrap.less**.
Edit the file **/resources/less/app.bootstrap.less**:
```
@import 'bootstrap/bootstrap';
@import 'init/mixin';
@import 'base/base';
@import 'base/layout';
@import 'util/util';
```
> `bootstrap/bootstrap` is now added

How can we make use of Bootstrap JavaScript modules? Find out more below at running [gulp](#gulp) task.

## Vue
Vue.js is a library for building modern web interfaces.
It provides data-reactive components with a simple and flexible API.

### Browserify, Vue and CDNjs
We’re going to use CDNjs for Vue instead of `npm install -S vue`. That way we can use the benefits for loading super fast stuff and keeping our app small. 
So grab the script and put in your html
(*/views/partials/*&shy;**script.hbs**).

```html
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/vue/0.12.7/vue.min.js"></script>
```
so in our `package.json` we’re going to add some line of codes.
```json
  "browserify-shim": {
    "vue": "global:Vue"
  },
  "browserify": {
    "transform": [
      "browserify-shim"
    ]
  }
```
In browserify-shim you see we grab the global variable `Vue` and make it accessible as `vue`. That way we can use `require('vue')` in our projects.

Let’s do that with jQuery and put them in our HTML
(*/views/partials/*&shy;**script.hbs**)

```html
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js"></script>
```
Remember jQuery uses `$` global variable. Let's add that to our browserify-shim to make it accesible as `jquery`.

file: /&shy;**package.json**
```json
/*
…
…
*/
  "browserify-shim": {
    "vue": "global:Vue",
    "jquery": "global:$"
  }
/*
…
…
*/
```

> In most cases you want to use jquery plugins that has not support for node yet. So with browserify-shim you can have Node goodness and external Javascript.

### Build rest of the example app

file: */views/*&shy;**index.hbs**
```html
<div class="mizu-container" id="app">
	<header class="mizu-header">The header</header>
	<div class="mizu-body">
		<main class="mizu-content">
			<!-- Express Handle Bars -->
			<h1>{{title}}</h1>
			<p>Welcome to {{title}}</p>
			<!-- Escaped Handle Bars for Vue -->
			<div>
				<div class="input-group">
					<span class="input-group-addon">
						<span class="fa fa-comment"></span>
					</span>
					<input type="text" 
				  		   class="form-control" 
				  		   placeholder="Write a message"
				  		   v-model="msg" />
				</div>
				<p>\{{msg}}</p>
			</div>

			<section>
				<example msg="\{{msg}}" list="\{{girls}}" />
			</section>
		</main>
		<nav class="mizu-nav">
			Navigation
		</nav>
		<aside class="mizu-ads">
			Advertisement
		</aside>
	</div>
	<footer class="mizu-footer">The Footer</footer>
</div>
```
file: */resources/js/vue/*&shy;**app.vue.js**
```javascript
const
	_ = require('lodash');

var app = new Vue({
	ready: function (argument) {
		console.log("app is ready")
	},

	// element
	el: "#app",
	// data
	data: {
		msg: '',
		girls: [
			{ 'name': 'Amber'     , 'age': 16 },
			{ 'name': 'Benice'    , 'age': 17 },
			{ 'name': 'Cynthia'   , 'age': 18 },
			{ 'name': 'Denise'    , 'age': 19 },
			{ 'name': 'Eva'       , 'age': 20 },
			{ 'name': 'Florence'  , 'age': 21 },
			{ 'name': 'Geneve'    , 'age': 22 },
			{ 'name': 'Hanna'     , 'age': 23 },
			{ 'name': 'Iris'      , 'age': 24 },
			{ 'name': 'Jocelyn'   , 'age': 25 },
			{ 'name': 'Karen'     , 'age': 26 },
			{ 'name': 'Lena'      , 'age': 27 },
			{ 'name': 'Marissa'   , 'age': 28 },
			{ 'name': 'Nicolette' , 'age': 29 },
			{ 'name': 'Olivia'    , 'age': 30 },
			{ 'name': 'Patricia'  , 'age': 31 },
			{ 'name': 'Quitis'    , 'age': 32 },
			{ 'name': 'Rochelle'  , 'age': 33 },
			{ 'name': 'Sandy'     , 'age': 34 },
			{ 'name': 'Tina'      , 'age': 35 },
			{ 'name': 'Uma'       , 'age': 36 },
			{ 'name': 'Victoria'  , 'age': 37 },
			{ 'name': 'Winry'     , 'age': 38 },
			{ 'name': 'Xena'      , 'age': 39 },
			{ 'name': 'Yvonne'    , 'age': 40 },
			{ 'name': 'Zabora'    , 'age': 41 },
		]
	},
	components: {
		'example': require('./component/example') 
	},
	// filters are global
	filters: {
		
	},
	// methods
	methods: {

	},
	// computed
	// computed can't pass value in HTML
	computed: {

	}
});

module.exports = app;
```
> Don't forget to install `lodash`. <br/>
`npm install -S lodash`

> Currently `lodash` doesn't do anything. But you could make use of it. This is just an example if you want to install packages with `npm`. 


file: */resources/js/vue/component/*&shy;**example.html**

```html
<h2>
	This is Example Component
</h2>
<p>
	Message from Parent: {{msg}}
</p>

<h2>List of girls</h2>
<div class="input-group">
	<span class="input-group-addon" id="basic-addon1"><span class="fa fa-search"></span></span>
	<input type="text" 
  		   class="form-control" 
  		   placeholder="filter girls by name"
  		   v-model="filterQuery" />
</div>

<div class="container-fluid">
	<div class="row">
		<div class="col-xs-6">Name</div>
		<div class="col-xs-6">Age</div>
	</div>
	<ul class="list-group">
		<li class="list-group-item row"
			v-repeat="list | filterGirls">
			<span class="col-xs-6">{{name}}</span>
			<span class="col-xs-6">{{age}}</span>
		</li>
	</ul>
</div>
```
file: */resources/js/vue/component/*&shy;**example.js**
```javascript
var component = {
	attached: function () {
		console.log(' attached example');

	},
	props: ['msg', 'list'],
	template: require('./example.html'),
	data: function() {
		return {
			filterQuery: ''
		}
	},
	filters: {
		filterGirls: function (list) {
			if (this.filterQuery == '')  return list;

			return list.filter(function(item){
				return item.name.toLowerCase().indexOf(this.filterQuery.toLowerCase()) > -1;
			}.bind(this))
		}
	},
	methods: {

	}
}
module.exports = component;
```

## Tasks Automation

Gulp

Let's install node dependencies for gulp
```bash
npm install -D \
gulp \
gulp-less \
gulp-autoprefixer \
gulp-minify-css \
gulp-concat \
gulp-uglify \
gulp-rename \
gulp-nodemon \
gulp-livereload \
less \
node-notifier \
browserify@10.2.6 \
browserify-shim@3.8.9 \
babelify@6 \
partialify \
vinyl-buffer \
vinyl-source-stream \
gulp-sourcemaps
```

Create file: */resources/util/*&shy;**timer.js**
```javascript
var starDate = new Date();

/**
 * Add leading zeros to a string
 * @param  {Integer}
 * @param  {Word}
 * @return {String}
 */
var zeroPad = function(n,w){
  var pad = new Array(1+w).join('0');
  return (pad+n).slice(-pad.length);
}

var timer = {
	lapse: function() {
		var differentTime = (new Date()) - starDate;

		var milliseconds = Math.floor(differentTime) % 1000,
			seconds = Math.floor(differentTime / 1000) % 60,
			minutes = Math.floor(differentTime / (1000*60)) % 60,
			hours = Math.floor(differentTime / (1000*60*60));

		var output = hours+':'+zeroPad(minutes,2)+':'+zeroPad(seconds,2)+'.'+zeroPad(-milliseconds,3);
		return output;
	}
}
module.exports = timer;
```

file: /**gulpfile.js**

```javascript
console.time('Loading plugins');  
// --- INIT
const  
    timer        = require('./resources/js/util/timer.js'),
    path         = require('path'),
// gulp
    gulp         = require('gulp'),  
    less         = require('gulp-less'), // compiles less to CSS
    autoprefix   = require('gulp-autoprefixer'), // CSS browser compatibility
    cssmin       = require('gulp-minify-css'), // minifies CSS
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'), // minifies JS
    rename       = require('gulp-rename'),
// server
    nodemon      = require('gulp-nodemon'),
    livereload   = require('gulp-livereload'),
    notifier     = require('node-notifier');
// browserify goodies
var browserify   = require('browserify'),  
    babelify     = require('babelify'),
    partialify   = require('partialify'),
    buffer       = require('vinyl-buffer'),
    source       = require('vinyl-source-stream');
    sourcemaps   = require('gulp-sourcemaps');
console.timeEnd('Loading plugins');


// Paths variables
var paths = {  
    'resources': {
        'less'             : './resources/less/',
        'js'               : './resources/js/',
        'vue'              : './resources/vue/',
        'bower_components' : './resources/bower_components/',
        'vendor'           : './resources/vendor/' // front-end(css/js) things that has not yet Bower support
    },
    'public': {
        'css'              : './public/stylesheets/',
        'js'               : './public/javascripts/'
    }

};

var mix = {  
    /**
     * Get a standard Browserify stream.
     *
     * @param {string|array} src
     * @param {object}       options
     */
    browserify: function (src, options) {
        var stream = browserify(src, options);

        stream.transform(babelify, { stage: 0 });
        stream.transform(partialify);

        return stream.bundle();
    }
}

// --- TASKS INDEX
/*
    less
    less:bootstrap
    js
    js:bower_components
    js:browserify
    reload
    reload:browser
    reload:server
    watch
    default
 */
// --- TASKS INDEX



// --- TASKS
// CSS bootstrap
gulp.task('less:bootstrap', function() {  
  // place code for your default task here
  // destination folder: /assets/css/ 
  return gulp.src(paths.resources.less+'app.bootstrap.less') // get file
    .pipe(less())
    .pipe(autoprefix({ browsers: ['last 4 versions'] }))
    .pipe(gulp.dest(paths.public.css)) // output: app.bootstrap.css
    .pipe(cssmin({keepSpecialComments:0}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.public.css)); // output: app.bootstrap.min.css
});

// JS bower_components
gulp.task('js:bower_components', function(){  
  return gulp.src([
        // jquery
        paths.resources.bower_components+'jquery/dist/jquery.js',
        // twitter bootstrap javascript modules
        paths.resources.bower_components+'bootstrap/js/affix.js',
        paths.resources.bower_components+'bootstrap/js/alert.js',
        paths.resources.bower_components+'bootstrap/js/button.js',
        paths.resources.bower_components+'bootstrap/js/carousel.js',
        paths.resources.bower_components+'bootstrap/js/collapse.js',
        paths.resources.bower_components+'bootstrap/js/dropdown.js',
        paths.resources.bower_components+'bootstrap/js/modal.js',
        paths.resources.bower_components+'bootstrap/js/popover.js',
        paths.resources.bower_components+'bootstrap/js/scrollspy.js',
        paths.resources.bower_components+'bootstrap/js/tab.js',
        paths.resources.bower_components+'bootstrap/js/tooltip.js',
        paths.resources.bower_components+'bootstrap/js/transition.js',
        // twitter bootstrap all
        //paths.resources.bower_components+'bootstrap/dist/js/bootstrap.js',
    ])
    .pipe(concat('bower_components.min.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.public.js)); // destination: /public/javascripts/bower_components.min.js
});

// Browserify
gulp.task('js:browserify', function() {  
  mix.browserify(paths.resources.vue+'/bootstrap.vue.js')
    .pipe(source('app.browserify.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.public.js)); // destination: /public/javascripts/app.browserify.js
});


// --- WATCH
// Rerun the task when a file changes
gulp.task('watch:bootstrap', function() {  
    gulp.watch(
        [
            paths.resources.less+'*.less',               // files contain .less
            paths.resources.less+'**/*.less'
        ],                                               // sub directories with files contain .less
        ['less:bootstrap']);                             // run parallel gulp tasks on change
});

gulp.task('watch:bower_components', function() {  
    gulp.watch(
        [
            paths.resources.bower_components+'*.js',     // files contain .js
            paths.resources.bower_components+'**/*.js'   // sub directories with files contain .js
        ], 
        ['js:bower_components']);                        // run parallel gulp tasks on change
});

gulp.task('watch:browserify', function() {  
    gulp.watch(
        [
            'package.json',
            paths.resources.vue+'*.js',
            paths.resources.vue+'**/*.js',
            paths.resources.vue+'**/*.html',
            paths.resources.vue+'**/*.vue',
        ],
        ['js:browserify']);                              // run parallel gulp tasks on change
});

// --- RELOAD
/**
 * Reload: Livereload
 */
gulp.task('reload:browser', function(){  
    var options = {
        // base will check changes on 'public' folder
        base: "public"
    };
    livereload.listen(options);
    gulp.watch([
            'public/**/*.html', 
            'public/**/*.css',
            'public/javascripts/app.browserify.js', 
            'public/javascripts/bower_components.min.js', 
        ])
        .on('change', function(event){
            livereload.changed(event);
            notifier.notify({ message: timer.lapse()+': Browser refreshed' });
        });
});

/**
 * Reload: Node server
 */
gulp.task('reload:server', function(){  
    nodemon({ 
        script: './bin/www',    // script to start the server
        ext: 'js, hbs',         // file type to watch, for example *.js, *.hbs 
        watch: [
            'bin/www',          // server script
            'app.js',           // app script
            'views',            // hbs files
            'routes'            // routes
        ]})
        .on('change', function (event) {
            notifier.notify({ message: timer.lapse()+': Node CHANGE: '+event });
        })
        .on('start', function (event) {
            notifier.notify({ message: timer.lapse()+': Node start' });
            setTimeout(function(){
                livereload.changed('/');
                notifier.notify({ message: timer.lapse()+': Livereload: Node start' });
            }, 1000);
        })
        .on('restart', function (event) {
            notifier.notify({ message: timer.lapse()+': Node restarted' });
            setTimeout(function(){
                livereload.changed('/');
                notifier.notify({ message: timer.lapse()+': Livereload: Node restart' });
            }, 1000);
        });
});



// --- COMBINED TASKS
gulp.task('less',   ['less:bootstrap']);  
gulp.task('js',     ['js:bower_components','js:browserify']);  
gulp.task('reload', ['reload:server', 'reload:browser']);
gulp.task('watch',  ['watch:bootstrap', 'watch:bower_components', 'watch:browserify']);

// --- DEFAULT
// When you run only with: `gulp`
gulp.task('default', ['watch', 'less', 'js']); 
```

> Options to run:<br/><br/>
`gulp less`<br/>
`gulp less:bootstrap`<br/>
`gulp js`<br/>
`gulp js:bower_components`<br/>
`gulp js:browserify`<br/>
`gulp watch`<br/>
`gulp watch:bootstrap`<br/>
`gulp watch:bower_components`<br/>
`gulp watch:browserify`<br/>
`gulp default`<br/>
`gulp reload`<br/>
`gulp reload:browser`<br/>
`gulp reload:server`<br/>


File structure when files getting exported after `gulp default reload` run
```default
/  public
  /  stylesheets
     - app.bootstrap.css
     - app.bootstrap.min.css
  /  javascripts
     - bower_components.min.js
     - bower_components.min.js.map
     - app.browserify.js
     - app.browserify.js.map
```

Check my [Github: vue-express-deployment](https://github.com/HariantoAtWork/vue-express-framework) repository
