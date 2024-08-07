#!/bin/bash

set -e
set -u

# the order is important
for package in htmljs html-tools blaze-tools spacebars-compiler templating-tools caching-html-compiler observe-sequence blaze spacebars templating-compiler templating-runtime blaze-hot templating spacebars-tests blaze-html-templates ui ; do
  echo "Publishing $package"
  (cd packages/$package && meteor publish)
done
