import React from 'react'

import './App.css'

// import development & proudction json
import development from './environment-variables-json/development.config'
import production from './environment-variables-json/production.config'


import Way1ProcessEnvName from './Way1-environment-var-name'

// importing way 2 : using json keys boolean
import JsonKeysBoolean from './Way2-json-key-boolean'




function App() {
  return (
    <div className="App"> 

      {/* hide or show way 1 or mode 2 to check either of them , i am showing mway 1 by default*/}

      <h1>way 1</h1>
      <Way1ProcessEnvName development={development} production={production} />

      {/* <h1>way 2</h1>
      <JsonKeysBoolean /> */}

    </div>
  );
}

export default App;
