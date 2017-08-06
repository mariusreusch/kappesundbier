cd "${0%/*}"
docker build -t cooksql . && docker run -d -p 3306:3006 cooksql
