import React, { useState } from 'react'
import { useRouter } from 'next/router'


const Create = (props) => {
    const [value, changeValue] = useState("")
    // send value to backend on enter
    const router = useRouter();

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
                                fetch(`http://localhost:4001/register/${value}`, {
                                    method: "POST",
                                    mode: "cors"
                                })
                                    .then((res) => {
                                        if (res.status == 200) {
                                            props.changeAccount(value)
                                            router.push('/hub')
                                        } else {
                                            router.push("/")
                                            alert("error: user already exists")
                                        }
                                    })
                                    .catch((e) => {
                                        console.log(e)
                                    })
                                // check if user_exists, if not create account, then update the account value
                            }
                        }} />
            </div>
        </div>
    )
}


export default Create;