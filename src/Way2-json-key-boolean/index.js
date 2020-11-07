import React from 'react'

// import development json
import development from '../environment-variables-json/development.config'
// import production json
import production from '../environment-variables-json/production.config'

function JsonKeysBoolean() {

    return (

        <div className='way2-container'>
            <h2 className='width-400 text-align-c margin-center font-weight-normal'>
                attempting to print the key "development_Title" from &nbsp;
                <b>development.config.json</b> & <b>production.config.json</b>
                &nbsp; at &nbsp; <b>mode development</b>
            </h2>


            <h2 className='h2-title'>Development Mode</h2>
            {
                development.development_Title === true ? 
                <h3>this text is shown because the key development_Title has value true at development file </h3>
                :
                <h3>sorry you're in development Mode</h3>
            }

            <h2 className='h2-title'>Production Mode</h2>
            {
                production.development_Title === true ? 
                <h3>title from production mode</h3>
                :
                <h3>this text is shown because the key development_Title has value false at production file </h3>
            }
        </div>

    )
}

export default JsonKeysBoolean