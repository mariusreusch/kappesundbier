#!/usr/bin/env bash
cd "${0%/*}"
lima nerdctl stop kappesundbierdb || true &&
lima nerdctl rm kappesundbierdb || true &&
lima nerdctl build -t kappesundbierdb . &&
lima nerdctl run -d --name kappesundbierdb -p 5432:5432 kappesundbierdb
