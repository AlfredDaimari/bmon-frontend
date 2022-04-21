import React, { useState } from 'react'


const Create = (props) => {
    const [value, changeValue] = useState("")
    // send value to backend on enter

    return (
        <div className='bg-slate-200 h-screen w-screen flex items-center justify-center'>
            <div>
                <p className='bungee text-sky-400 text-lg bungee font-bold'>create account?</p>
                <input className="bungee text-lg text-sky-400
                 bg-slate-200 focus:outline-none border-b-2 border-sky-400 
                 caret-sky-400" onChange={(e) =>
                        changeValue(e.target.value)} onKeyPress={(e) => {
                            if (e.key == "Enter") {
                                // use this portion to send userName to backend  
                                // check if user_exists, if not create account, then update the account value
                            }
                        }} />
            </div>
        </div>
    )
}


export default Create;