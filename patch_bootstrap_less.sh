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