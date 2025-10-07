#!/bin/sh
# This script is used to publish the current version of the site to the
# important to update the version in package.json
echo "\033[32m# => Important to update the version in package.json\033[0m"
#remove the dist folder if it exists
echo "\033[32m# => Remove the dist folder\033[0m"
rm -rf dist
#build the package
echo "\033[32m# => Build the package\033[0m"
pnpm build:lib

#login to npm
echo "\033[32m# => Login to npm\033[0m"
npm login
#publish to npm
echo "\033[32m# => Publish to npm\033[0m"
sudo npm publish