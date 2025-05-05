#!/bin/sh
# This script is used to publish the current version of the site to the
# important to update the version in package.json
echo "\033[32m# => Important to update the version in package.json\033[0m"
#build the package
echo "\033[32m# => Build the package\033[0m"
pnpm build:lib
# copy tsconfig.node.json ./dist folder
echo "\033[32m# => Copy tsconfig.node.json ./dist folder\033[0m"
cp tsconfig.node.json ./dist/tsconfig.json
# move to dist folder
echo "\033[32m# => Move to dist folder\033[0m"
cd dist
#login to npm
echo "\033[32m# => Login to npm\033[0m"
npm login
#publish to npm
echo "\033[32m# => Publish to npm\033[0m"
npm publish