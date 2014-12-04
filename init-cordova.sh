#!/bin/bash

rm -rf cordova

cordova create cordova com.criticalthinking.wrfc-$1 Word-Roots-$1-Flashcards &&
rm -rf cordova/www &&
ln -s ../dist cordova/www &&
cp -R cordova-merge/* cordova &&

cd cordova

cordova platform add android

# Plugins
cordova plugin add org.apache.cordova.media

cordova build android