Steps to setup NodeJS API

	1. Create directory for the new API. Directory name should be named after the API separating full words by hyphens and suffixed with -ms for microservice
		a. mkdir api-name-ms
	2. Navigate into the newly created directory to run the subsequent commands in.
		a. cd api-name-ms
	3. Add .gitignore
		a. touch .gitignore
		echo "# See http://help.github.com/ignore-files/ for more about ignoring files.
		
		# System Files
		.DS_Store
		Thumbs.db
		.vscode
		
		node_modules
		
		.idea" > .gitignore
	4. Initialize node.js project with package.json using defaults.
		a. npm init -y
	5. Install express framework
		a. npm i express
	6. Install dev dependencies.
		a. npm i --save-dev typescript @types/express @types/node
	7. Create TypeScript configuration (currently defaults to es2016). Creates tsconfig.json file.
		a. npx tsc -init
	8. Uncomment rootDir property of compilerOptions in tsconfig.json and set the value to ./src
		1. "rootDir": "./src"
	9. Uncomment rootDir property of compilerOptions in tsconfig.json and set the value to ./src. This will be your distribution folder that your application is build to.
		1. "outDir": "./dist"
	10. Create the src rootDir directory.
		1. mkdir src
	11. Add the following files to create the initial skeleton of the API
		1. router.ts - defines the routes for the API
		2. app.ts - defines how the express application (API) will be configured
		3. index.ts - defines an entry-point for the application
	12. Checkpoint - at this point the API is ready to be built, started up and start receiving requests
		1. Compile the application to JavaScript: npx tsc
		2. Start up the API: node dist/index.js
			i. Note that the node commend is executing the compiled TypeScript code which is in the dist folder we configured earlier.
		3. Making a request to the status endpoint should return a status of "running" and the current timestamp.
			i. From the command-line execute: curl --location --request GET 'http://localhost:4000/sample/status'
			ii. Or open URL directly in browser: http://localhost:4000/sample/status
		4. Press [Ctrl] + C to shut down the API
	13. Add start script to the scripts section of the package.json so that you can simply execute npm start to start up the API.
		1. "start": "npx tsc && node dist/index.js"
	14. Install and configure nodemon to detect changes and automatically reload the API
		1. Install: npm i --save-dev nodemon ts-node
		2. Create nodemon configuration file: touch nodemon.json
		3. Add contents to nodemon.json
		{
		    "watch": ["src"],
		    "ext": "js,ts,json",
		    "exec": "ts-node --transpile-only src/index.ts",
		    "env": {
		        "NODE_ENV": "localhost"
		    }
		}
		4. Add "dev": "nodemon", to scripts section of package.json.
		5. Execute npm run dev to start up the application and start watching for changes.
			i. When you make a code change and save it, the application will reload and reflect your changes.
		6. Press [Ctrl] + C to shut down the API
