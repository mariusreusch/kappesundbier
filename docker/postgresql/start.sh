#!/usr/bin/env bash
cd "${0%/*}"
docker stop kappesundbierdb || true &&
docker rm kappesundbierdb || true &&
docker build -t kappesundbierdb . &&
docker run -d --name kappesundbierdb -p 5432:5432 kappesundbierdb
