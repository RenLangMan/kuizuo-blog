#!/bin/bash

cd /d/docusaurus
git status
git pull
git add -A
git commit -m "data commit"
git push
git status