start:
	npm start
build:
	rm -rf dist
	NODE_ENV=production npx webpack