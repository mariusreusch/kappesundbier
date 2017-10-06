cd "${0%/*}"
docker stop cooksql || true &&
docker rm cooksql || true &&
docker build -t cooksql . &&
docker run -d --name cooksql -p 3306:3306 cooksql
