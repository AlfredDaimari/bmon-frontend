import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Metal from '../public/metal.png'

import Swords from '../public/swords.png'
import Coin from '../public/money.png'

const lakhan_assets = [{ "Key": "25", "item": { "name": "zoltan chivay", "type": "melee", "value": 4 } },
{ "Key": "26", "item": { "name": "vernon roche", "type": "melee", "value": 5 } },
{ "Key": "27", "item": { "name": "keira metz", "type": "ranged", "value": 6 } },
{ "Key": "28", "item": { "name": "sabrina glessivig", "type": "ranged", "value": 5 } },
{ "Key": "29", "item": { "name": "yennefer of vengerberg", "type": "ranged", "value": 7 } },
{ "Key": "30", "item": { "name": "arachas behemoth", "type": "siege", "value": 6 } },
{ "Key": "31", "item": { "name": "siege technician", "type": "siege", "value": 6 } },
{ "Key": "32", "item": { "name": "biting frost", "type": "special", "value": 10 } },
{ "Key": "33", "item": { "name": "impenetrable fog", "type": "special", "value": 10 } },
{ "Key": "34", "item": { "name": "torrential rain", "type": "special", "value": 0 } },
{ "Key": "35", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "36", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "37", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "38", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "39", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "40", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "41", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "42", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "43", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "44", "item": { "name": "floren", "type": "currency", "value": 1 } }]

const toon_assets = [{ "Key": "25", "item": { "name": "zoltan chivay", "type": "melee", "value": 4 } },
{ "Key": "26", "item": { "name": "vernon roche", "type": "melee", "value": 5 } },
{ "Key": "27", "item": { "name": "keira metz", "type": "ranged", "value": 6 } },
{ "Key": "28", "item": { "name": "sabrina glessivig", "type": "ranged", "value": 5 } },
{ "Key": "29", "item": { "name": "yennefer of vengerberg", "type": "ranged", "value": 7 } },
{ "Key": "35", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "36", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "37", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "41", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "42", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "43", "item": { "name": "floren", "type": "currency", "value": 1 } },
{ "Key": "44", "item": { "name": "floren", "type": "currency", "value": 1 } }]


// for displaying assets
const Assets = (props) => {

    var invs = []
    console.log(props)

    props.assets.forEach(item => {
        if (item["item"]["type"] != "currency") {
            invs.push(
                <div key={item["Key"]} className='my-2 w-1/2 p-4 border-y-2 border-x-4 
                border-solid border-x-sky-500 border-y-sky-600 text-white bg-sky-200 
                hover:bg-sky-600
                transition-colors duration-300 space-y-2 rounded-xl'>
                    <p className='w-full text-center'>
                        {item["item"]["name"]} ({item["Key"]})
                    </p>
                    <div className='flex justify-evenly'>
                        <div className='flex space-x-2'>
                            <div className='w-6 h-6'>
                                <Image src={Metal} layout='intrinsic' />
                            </div>
                            <p>{item["item"]["type"]}</p>
                        </div>
                        <div className='flex space-x-2'>
                            <div className='w-6 h-6'>
                                <Image src={Swords} layout='intrinsic' />
                            </div>
                            <p>{item["item"]["value"]}</p>
                        </div>
                    </div>
                </div>)
        }
    })
    const amt_coins = props.assets.length - invs.length

    return (
        <div className="w-full pb-12 flex flex-col space-y-4 items-center">
            {invs}
            <div key="coins" className='w-1/2 p-4 border-y-2 border-x-4
                border-solid border-x-sky-500 border-y-sky-600 text-white bg-sky-200 hover:bg-sky-600
                transition-colors duration-300 space-y-2 rounded-xl'>
                <p className='w-full text-center'>
                    florens
                </p>
                <div className='flex space-x-2 justify-center'>
                    <div className='w-6 h-6'>
                        <Image src={Coin} layout='intrinsic' />
                    </div>
                    <p>{amt_coins}</p>
                </div>
            </div>
        </div>
    )
}

// for displaying a player
const Player = (props) => {
    var coins = 0
    var total = 0

    props.assets.forEach(item => {
        if (item["item"]["type"] == "currency") {
            coins += 1
        } else {
            total += item["item"]["value"]
        }
    })

    return (
        <div className='px-8 py-4 w-fit bg-gradient-to-r from-blue-500 to-sky-400 
        rounded-lg cursor-pointer' onClick={() => props.changeShow(props.name)}>
            <p className='text-xl font-bold'>{props.name}</p>
            <div className="flex space-x-2">
                <div className='w-6 h-6'>
                    <Image src={Coin} layout='intrinsic' />
                </div>
                <p>{coins}</p>
            </div>
            <div className="flex space-x-2">
                <div className='w-6 h-6'>
                    <Image src={Swords} layout='intrinsic' />
                </div>
                <p>{total}</p>
            </div>
        </div>)
}

// for displaying all online players in the hub
const Players = (props) => {
    var plys = []

    for (let i in props.players) {

        if (i != props.account && i != "") {
            console.log(i)
            plys.push(
                <div key={i}>
                    <Player name={i} assets={props.players[i]} changeShow={props.changeShow} />
                </div>)
        }
    }

    console.log("rendering-players")

    return (
        <div className="w-full flex space-x-4 flex-wrap justify-start">
            {plys}
        </div>
    )
}

// Trading modal
const Trade = (props) => {

    const [inputs, changeInputs] = useState({
        player: "",
        myItems: "",
        playerItems: "",
        myCoins: 0,
        playerCoins: 0,
    })

    const socket = props.socket



    const setupItems = () => {

        // all items for user
        let myItems = []

        // all items for user to trade with
        let playerItems = []

        // ! code has no error checking, so user has to be perfect in input

        // entering userItems
        if (inputs.myItems != "") {
            myItems = inputs.myItems.split(",")
        }
        if (inputs.playerItems != "") {
            playerItems = inputs.playerItems.split(",")
        }

        let total_coin = 0

        for (let item of props.assets) {
            if (total_coin != inputs.myCoins && item["item"]["type"] == "currency") {
                myItems.push(item["Key"])
                total_coin += 1
            }
        }


        total_coin = 0
        for (let item of props.users[inputs.player]) {
            if (total_coin != inputs.playerCoins && item["item"]["type"] == "currency") {
                console.log("yes")
                playerItems.push(item["Key"])
                total_coin += 1
            }
        }

        console.log(JSON.stringify(myItems), JSON.stringify(playerItems))

        return { myItems, playerItems }

    }

    const sendTradeReq = () => {
        // send trade to the backend, on success, emit the  requirement
        const items = setupItems()

        fetch(`http://localhost:4001/trade/${props.account}/${inputs.player}/
        ${JSON.stringify(items["myItems"])}/${JSON.stringify(items["playerItems"])}`, {
            method: 'POST',
            mode: "cors"
        }).then((resp) => {
            if (resp.status == 200) {
                console.log(resp)
                socket.emit("client:tradereq", inputs.player)
                props.changeTrade(!props.trade)
            } else {
                console.log(resp)
            }
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <div className='fixed w-fit h-fit space-y-2 p-6 transform -translate-x-1/2 -translate-y-1/2 
                left-1/2 top-1/2 bg-white rounded-3xl border-2 border-dashed border-sky-400'>

            {/*
            Below the user will create a request that he wants to send the other user
            */}

            <div className="w-full h-5/6 flex flex-col items-center justify-center space-y-2">
                <input className='w-22 p-2' placeholder='player' onChange={
                    (e) => {
                        changeInputs({
                            ...inputs,
                            player: e.target.value
                        })
                    }}></input>
                <input className='w-22 p-2' placeholder='your items (id)' onChange={
                    (e) => {
                        changeInputs({
                            ...inputs,
                            myItems: e.target.value
                        })
                    }}></input>
                <input className='w-22 p-2' placeholder='player items (id)' onChange={
                    (e) => {
                        changeInputs({
                            ...inputs,
                            playerItems: e.target.value
                        })
                    }}></input>
                <input className='w-22 p-2' placeholder='your total coins' onChange={
                    (e) => {
                        changeInputs({
                            ...inputs,
                            myCoins: parseInt(e.target.value)
                        })
                    }}></input>
                <input className='w-22 p-2' placeholder='player total coins' onChange={
                    (e) => {
                        changeInputs({
                            ...inputs,
                            playerCoins: parseInt(e.target.value)
                        })
                    }}></input>
            </div>

            <button className='text-center relative w-fit p-2 left-1/2 
                    transform -translate-x-1/2 bg-sky-400 rounded-xl 
                    hover:bg-slate-200 hover:text-sky-400 transition-all duration-200 
                   ' onClick={sendTradeReq}>
                create request
            </button>
        </div>)
}



export default function GTHub(props) {
    const [users, updateUsers] = useState({})
    const [show, changeShow] = useState("players")
    const [trade, changeTrade] = useState(false)
    const [assets, changeAssets] = useState([])

    const socket = props.socket;
    const router = useRouter();
    const emitClientDisconnect = () => socket.emit("client:disconnect", props.account)


    useEffect(() => {

        // use changeAssets to get the new assets from backend

        if (props.account == "") {
            router.push("/")
        }

        fetch(`http://localhost:4001/query/${props.account}/4`, {
            method: 'POST',
            mode: "cors"
        }).then((resp) => {
            if (resp.status == 200) {
                console.log(resp)
                return resp.json()
            } else {
                console.log(resp)
            }
        }).then((dat) => {
            // sending client info to server
            socket.emit("client:info", { account: props.account, assets: dat })
            changeAssets(dat)

        }).catch((e) => {
            console.log(e)
        })

        // first emit that user is in the gathering hub
        socket.emit("client:new_connect", props.account)

        // on receiving a trade request
        socket.on("client:tradereq", account => {
            if (account == props.account) {
                alert("New trade request! check hub")
            }
        })

        // update users in gathering hub
        socket.on("client:update-users", users => updateUsers(users))

        // adding event listener before unload
        window.addEventListener("beforeunload", emitClientDisconnect)

        console.log('hub:useEffect running')    // check useEffect run

        return () => {
            window.removeEventListener("beforeunload", emitClientDisconnect)
        }

    }, [])

    return (
        <div className='w-screen h-screen bg overflow-hidden'>
            {/*
            Headers for the gathering hub
            */}
            <div className='flex w-full space-x-8 relative left-2 top-2 mb-4 h-10'>
                <p className='text-2xl font-bold text-white underline decoration-sky-400 
                cursor-pointer' onClick={() => {
                        socket.emit("client:disconnect", props.account)
                        router.push("/hub")
                    }}>back to hub</p>
                <p className='text-2xl font-bold text-white relative underline 
                decoration-sky-400 cursor-pointer' onClick={
                        () => {
                            changeShow("players")
                        }
                    }>
                    online
                </p>

                <p className='text-2xl font-bold text-white relative underline 
                decoration-sky-400 cursor-pointer' onClick={() => { changeTrade(!trade) }}>
                    trade
                </p>
            </div>

            {
                /*
                Headers for the navigation in the gathering hub
                */
            }

            <div className='w-full flex h-full'>
                <div className='w-1/2 border-r-4 border-white border-solid overflow-scroll scrolly 
                text-white  underline decoration-sky-400 font-bold'>
                    <p className='text-center text-lg'>my assets</p>
                    <Assets assets={assets} />
                </div>
                {show == "players" && (
                    <div className='w-1/2 border-l-4 border-white border-solid overflow-scroll scrolly 
                    text-white  underline decoration-sky-400 font-bold p-4'>
                        <p className='text-center text-lg mb-4'>players</p>
                        <Players players={users} account={props.account} changeShow={changeShow} />
                    </div>
                )}
                {show != "players" && (
                    <div className='w-1/2 border-l-4 border-white border-solid overflow-scroll scrolly 
                    text-white  underline decoration-sky-400 font-bold'>
                        <p className='text-center text-lg'>{show} assets</p>
                        <Assets assets={users[show] != undefined ? users[show] : []} />
                    </div>
                )}
            </div>

            {trade &&
                <Trade account={props.account} changeTrade={changeTrade} trade={trade} socket={socket} assets={assets} users={users} />
            }

            <audio src='/gathering_hub.mp3' controls autoPlay loop className='fixed bottom-4 left-4'></audio>
        </div>
    )
}

