Step 1 (Getting started): 
- npm init
- npm install express
- npm install nodemon --save-dev
- go to scripts in package.json
	- make function: "start": "nodemon index.js", under test function
	- now you can start your project during development with "npm run start"


Step 2 (Creating home page): 
- index.json
	- app.use(express.static('public'))
		- all assets will be in public directory
		- also remember to create public directory
	- app.get('/', (request, response) => {
			response.sendFile(path.resolve(__dirname, 'pages/index.html'))
		})
		- do not forget to require module path
		- to use home directory create folder pages and inside file index.html
			- in index.html copy from your desired template (I used Agency theme from startbootstrap.com) your index.html content
			- move assets from your template in your public folder
Step 3
