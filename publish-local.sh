#!/bin/sh
# This script is used to publish the current version of the site to the
# important to update the version in package.json
echo "\033[32m# => Important to update the version in package.json\033[0m"
#remove the local published pkg folder
echo "\033[32m# => Remove the local published pkg yalc\033[0m"
yalc installations clean mada-design-system

#remove the dist folder if it exists
echo "\033[32m# => Remove the dist folder\033[0m"
rm -rf dist
#build the package
echo "\033[32m# => Build the package\033[0m"
pnpm build:lib

#yalc publish
echo "\033[32m# => yalc publish\033[0m"
yalc publish