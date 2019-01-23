#!/usr/bin/env bash

source=/d/Project/contactManager/dist/contactManager/
destination=/d/Project/hello/www/
cd ..
ng build --prod
rm -rvf ${destination}
cp -rv ${source} ${destination}
cp ./bin/cordova.js ${destination}
cd /d/Project/hello/
cordova run android
