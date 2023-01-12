## Create NodeJS API

1. Create directory for the new API. Directory name should be named after the API separating full words by hyphens and suffixed with `-ms` for microservice.
	```bash
	mkdir api-name-ms
	```

2. Navigate into the newly created directory
	```bash
	cd api-name-ms
	```

3. Add `.gitignore`
	```bash
	touch .gitignore

	echo "# See http://help.github.com/ignore-files/ for more about ignoring files.
			
	# System Files
	.DS_Store
	Thumbs.db
	.vscode
			
	node_modules
			
	.idea
			
	/dist" > .gitignore
	```

4. Initialize node.js project with `package.json` using defaults
	```bash
	npm init -y
	```

5. Install express framework
	```bash
	npm i express
	```

6. Install dev dependencies.
	```bash
	npm i --save-dev typescript @types/express @types/node
	```

7. Create TypeScript configuration file `tsconfig.json`
	```bash
	npx tsc -init
	```

8. Uncomment `rootDir` property of `compilerOptions` in `tsconfig.json` and set the value to `./src`
	```
	"rootDir": "./src",
	```

9. Uncomment `outDir` property of `compilerOptions` in `tsconfig.json` and set the value to `./dist`. This will be your distribution folder that your application is built to.
	```
	"outDir": "./dist",
	```

10. Create the `src` directory
	```bash
	mkdir src
	```

11. Add the following files to create the initial skeleton of the API
    1. router.ts - defines the routes for the API
    2. app.ts - defines how the express application (API) will be configured
    3. index.ts - defines an entry-point for the application

12. *Checkpoint* - at this point the API is ready to be built, started up and start receiving requests
    1. Compile the application to JavaScript: `npx tsc`
    2. Start up the API: `node dist/index.js`
    	- Note that the `node` commend is executing the compiled TypeScript code which is in the dist folder we configured earlier
    3. Making a request to the status endpoint should return a status of "running" and the current timestamp
    	- From the command-line execute: `curl --location --request GET 'http://localhost:4000/sample/status'`
    	- Or open URL directly in browser: http://localhost:4000/sample/status
    4. Press `[Ctrl] + C` to shut down the API

13. Add `start` script to the scripts section of the `package.json` so that you can simply execute `npm start` to start up the API
	```
	"start": "npx tsc && node dist/index.js"
	```

14. Install and configure `nodemon` to detect changes and automatically reload the API
    1. Install: `npm i --save-dev nodemon ts-node`
    2. Create nodemon configuration file: `touch nodemon.json`
    3. Add contents to `nodemon.json`
    	```
    	{
			"watch": ["src"],
			"ext": "js,ts,json",
			"exec": "ts-node --transpile-only src/index.ts",
			"env": {
				"NODE_ENV": "localhost"
			}
    	}
    	```
    4. Add `"dev": "nodemon",` to scripts section of `package.json`
    5. Execute `npm run dev` to start up the application and start watching for changes. When you make a code change and save, the application will reload and reflect your changes.
    6. Press `[Ctrl] + C` to shut down the API

## Things to consider including commenting on
1. Validation
2. Mapping responses
3. Unit Testing
4. Logging (common lib) - what/when
5. Exception handling
6. Docker
7. Steps to create
8. Status enpoint
9. Orchestration Layer
10. Dependency Injection - mention tsyringe
11. Add tracible header…rTracer etc.
12. E2E Testing
11.	Coverage Report
12.	Swagger
14.	Follow and note naming conventions
15.	Curls and/or Postman Collection
16.	Example of using timeouts for API calls
17. Route path naming convention. Hyphenated (/some-endpoint) or ?