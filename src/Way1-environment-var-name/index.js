import React from 'react'


function Way1ProcessEnvName({
    development,
    production
}) {

    let config;

// switch case to check either we're in development or productionc
switch (process.env.REACT_APP_NAME) {
    case 'development':
      config = development
      break;
  
    case 'production':
      config = production
      break;
  }

    return (
        <div>
            <h1 className='font-weight-normal'>{`this way i am not relying on json file keys to show and hide things.
            but "process.env.REACT_APP_NAME" either it's development or production`} </h1>
                {
                    process.env.REACT_APP_NAME === 'development'? 
                    <h1>development mode</h1>
                    :<h1>not dev</h1>
                }
                
                {
                    process.env.REACT_APP_NAME === 'production'? 
                    <h1>production mode</h1>
                    :<h1>not production</h1>
                }
        </div>
    )

}

export default Way1ProcessEnvName