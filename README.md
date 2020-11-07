# How to Start
- install [env-cmd] (https://www.npmjs.com/package/env-cmd)

# Setup
- Now we need to create other .env files to support development and production environments.
- So we've .env.development and .env.production files.
- add variables like to ``` REACT_APP_NAME=development ``` or ``` REACT_APP_NAME=production ```

# important Note
- You must create custom environment variables beginning with ``` REACT_APP_. ``` Any other variables except ```  NODE_ENV ``` will be ignored.

# package.json configuration
- let's say we've 2 modes/variables "development" && "production"
- these will the configs for these 2 modes 

``` `"`dev-start`":`"env-cmd -f .env.development react-scripts start`"`,
    `"`dev-build`"`: `"`env-cmd -f .env.development react-scripts build`"`,
    `"`prod-start`"`: `"`env-cmd -f .env.production react-scripts start`"`,
    `"`prod-build`"`: `"`env-cmd -f .env.production react-scripts build`"`, ```


# Way 1 using : process.env.REACT_APP_NAME
- this way i am not relying on json file keys to show and hide things. but "process.env.REACT_APP_NAME" either it's development or production
- so i use the name of my variable i added as conditionally render anything i want
``` ``` process.env.REACT_APP_NAME === 'development'?  <h1>development mode</h1> :<h1>not dev</h1> ``` ```
- here i am checking if the environment variable called development i show some code.
- found here /src/Way1-environment-var-name

# Way 2 using JSON keys
1. i create 2 JSON files each one represent the environment i want
2. add keys in both files that i want to show in any of the environments 
3. add value to the key either true or false at the file related to the environment, if we want to use this key as true to show something add value true , vice versa.
4. examples of keys
``` ``` {
    "development_Title": true,
    "production_Title": false
} ``` ```
5. both files found here : /src/environment-variables-json
...development json : /src/environment-variables-json/development.config.json
...production json : /src/environment-variables-json/production.config.json