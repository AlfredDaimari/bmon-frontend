import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

export default function GTHub() {
    const [response, updateResponse] = useState("")
    const [socket, changeSocket] = useState(io('http://localhost:4001'))

    useEffect(() => {

        socket.on("connect", () => {
            console.log("client:connected to backend")
        })

        socket.on("client:message", msg => console.log("msg:" + msg))

        socket.on("client:disconnect", () => {
            console.log();
        });

        console.log('re-rendering')

    }, [])

    return (
        <div className='w-screen h-screen bg flex items-center justify-center'>
            <audio src='/gthub.mp3' controls autoPlay loop className='fixed bottom-4 left-4'></audio>
            <div className='text-6xl' onClick={() => {
                const num = parseInt(Math.random() * 1000)
                console.log("num")
                socket.emit("message", num)
            }}> Help a click!</div>
        </div>
    )
}

