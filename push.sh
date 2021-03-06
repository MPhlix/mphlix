#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  - ng build --prod --base-href docs
  # - git stash
  - git checkout master
  # - git stash pop
  - git add .
  - git commit -am "Deploy to GitHub pages Travis build: $TRAVIS_BUILD_NUMBER"
  - git push
}

upload_files() {
  git remote add origin https://${GH_TOKEN}@github.com/Mphlix/Mphlix.git > /dev/null 2>&1
  git push --quiet --set-upstream origin master
}

setup_git
commit_website_files
upload_files
