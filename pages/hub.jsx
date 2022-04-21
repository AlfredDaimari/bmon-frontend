import { useState } from 'react'
import Image from 'next/image'

import Ermion from '../public/ermion.png'
import Emhyr from '../public/emhyr.png'
import Avalach from '../public/avalach.png'
import Triss from '../public/triss.png'

import Coin from '../public/money.png'
import Swords from '../public/swords.png'
import Metal from '../public/metal.png'
import RaiseHand from '../public/raise-hand.png'
import Death from '../public/death.png'

import Check from '../public/check.png'
import Cross from '../public/delete-button.png'
import DownArrow from '../public/down-arrow.png'
import Think from '../public/thinking.png'

// example data below VVVV

// asset data
const asset_data = [{ "Key": "1", "item": { "asset_type": "melee", "name": "geralt of rivia", "price": 1000, "type": "astforsale", "value": 10 } },
{ "Key": "10", "item": { "asset_type": "ranged", "name": "keira metz", "price": 600, "type": "astforsale", "value": 6 } },
{ "Key": "11", "item": { "asset_type": "ranged", "name": "sabrina glevissig", "price": 500, "type": "astforsale", "value": 5 } },
{ "Key": "12", "item": { "asset_type": "ranged", "name": "yennefer of vengerberg", "price": 700, "type": "astforsale", "value": 7 } },
{ "Key": "13", "item": { "asset_type": "ranged", "name": "merigold of meribor", "price": 700, "type": "astforsale", "value": 7 } },
{ "Key": "14", "item": { "asset_type": "ranged", "name": "cynthia", "price": 1000, "type": "astforsale", "value": 10 } },
{ "Key": "15", "item": { "asset_type": "siege", "name": "zerrikanian fire scorpion", "price": 2000, "type": "astforsale", "value": 10 } },
{ "Key": "16", "item": { "asset_type": "siege", "name": "arachas behemoth", "price": 1200, "type": "astforsale", "value": 6 } },
{ "Key": "17", "item": { "asset_type": "siege", "name": "siege technician", "price": 1200, "type": "astforsale", "value": 6 } },
{ "Key": "18", "item": { "asset_type": "siege", "name": "rotten mangonel", "price": 1600, "type": "astforsale", "value": 8 } },
{ "Key": "19", "item": { "asset_type": "siege", "name": "morvran voorhis", "price": 1600, "type": "astforsale", "value": 8 } },
{ "Key": "2", "item": { "asset_type": "melee", "name": "ciri of cintra", "price": 900, "type": "astforsale", "value": 9 } },
{ "Key": "20", "item": { "asset_type": "special", "name": "bitting frost", "price": 1000, "type": "astforsale", "value": 0 } },
{ "Key": "21", "item": { "asset_type": "special", "name": "impenetrable fog", "price": 2000, "type": "astforsale", "value": 0 } },
{ "Key": "22", "item": { "asset_type": "special", "name": "torrential rain", "price": 2000, "type": "astforsale", "value": 0 } },
{ "Key": "23", "item": { "asset_type": "special", "name": "scorch", "price": 2000, "type": "astforsale", "value": 0 } },
{ "Key": "24", "item": { "asset_type": "special", "name": "decoy", "price": 2000, "type": "astforsale", "value": 0 } },
{ "Key": "3", "item": { "asset_type": "melee", "name": "letho of gulet", "price": 600, "type": "astforsale", "value": 6 } },
{ "Key": "4", "item": { "asset_type": "melee", "name": "zoltan chivay", "price": 400, "type": "astforsale", "value": 4 } },
{ "Key": "9", "item": { "asset_type": "melee", "name": "vernon roche", "price": 400, "type": "astforsale", "value": 4 } }]

// voting data
const vote_data = [{ "Key": "65", "item": { "info": { "name": "dandelion", "type": "melee", "value": "4" }, "status": "unaccepted", "type": "assetreq", "voters": [] } },
{ "Key": "66", "item": { "alias": "lakhan", "info": "https://www.google.com", "status": "accepted", "type": "gmakereq", "voters": ["x509::/OU=org1/OU=client/OU=department1/CN=lk1::/C=US/ST=North Carolina/L=Durham/O=org1.example.com/CN=ca.org1.example.com"] } },
{ "Key": "67", "item": { "alias": "lakhan", "flaggers": [], "info": "https://www.google.com", "status": "accepted", "type": "gmaker" } }]

// inventory data
const inv_data = [{ "Key": "25", "item": { "name": "zoltan chivay", "type": "melee", "value": 4 } },
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

//trade requests
const trd_data = [{ "Key": "65", "item": { "cro_items": ["25", "33", "44", "43"], "cro_items_info": [{ "Key": "25", "item": { "name": "zoltan chivay", "type": "melee", "value": 4 } }, { "Key": "33", "item": { "name": "impenetrable fog", "type": "special", "value": 10 } }], "cro_usr": "lakhan", "p2_dec": "undecided", "p2_items": ["45", "64", "53"], "p2_items_info": [{ "Key": "45", "item": { "name": "zoltan chivay", "type": "melee", "value": 4 } }, { "Key": "53", "item": { "name": "impenetrable fog", "type": "special", "value": 10 } }], "p2_usr": "lk2", "status": "unaccepted", "type": "tradereq" } },
{ "Key": "67", "item": { "cro_items": ["25", "33", "44", "43"], "cro_items_info": [{ "Key": "25", "item": { "name": "zoltan chivay", "type": "melee", "value": 4 } }, { "Key": "33", "item": { "name": "impenetrable fog", "type": "special", "value": 10 } }], "cro_usr": "lk1", "p2_dec": "undecided", "p2_items": ["45", "64", "53"], "p2_items_info": [{ "Key": "45", "item": { "name": "zoltan chivay", "type": "melee", "value": 4 } }, { "Key": "53", "item": { "name": "impenetrable fog", "type": "special", "value": 10 } }], "p2_usr": "lakhan", "status": "unaccepted", "type": "tradereq" } }]


// =========================================== code starts below ==================================

const TradeItems = (props) => {

    const [show, changeShow] = useState(false)

    const items = props.items.map(item => {
        return (
            <div key={item["Key"]} className='w-full text-sky-400 p-4 border-y-2 border-x-4 
                border-solid border-x-sky-500 border-y-sky-600 hover:text-white hover:bg-sky-200 
                transition-colors duration-300 space-y-2 rounded-xl'>
                <p className='w-full text-center'>
                    {item["item"]["name"]}
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
            </div>
        )
    })

    return (
        <div className='w-7/12 space-y-2' onMouseEnter={() => { changeShow(true) }} onMouseLeave={() => changeShow(false)}>
            <div className="w-full flex justify-center space-x-2">
                <p>{props.title}</p>
                <div className='w-6 h-6'>
                    <Image src={DownArrow} layout='intrinsic' />
                </div>
            </div>
            {show && items}
            {show &&
                (
                    <div key={"floren" + (Date.now() * Math.random()).toString()} className='w-full text-sky-400 p-4 border-y-2 border-x-4 
                border-solid border-x-sky-500 border-y-sky-600 hover:text-white hover:bg-sky-200 
                transition-colors duration-300 space-y-2 rounded-xl'>
                        <p className='w-full text-center'>
                            floren
                        </p>
                        <div className='flex justify-evenly'>
                            <div className='flex space-x-2'>
                                <div className='w-6 h-6'>
                                    <Image src={Metal} layout='intrinsic' />
                                </div>
                                <p>currency</p>
                            </div>
                            <div className='flex space-x-2'>
                                <div className='w-6 h-6'>
                                    <Image src={Coin} layout='intrinsic' />
                                </div>
                                <p>{props.coins}</p>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}


// trade requests (change the for and of depending on the user)
const TradeReqs = (props) => {

    var myRequests = [];
    var revRequests = []

    trd_data.forEach(item => {
        if (item["item"]["cro_usr"] == props.account) {
            myRequests.push(item)
        } else {
            revRequests.push(item)
        }
    })
    const myTradeReqs = myRequests.map((item) => {

        return (
            <div key={item["Key"]} className='w-1/2 space-y-2 flex flex-col items-center border-4 
            border-sky-600 border-solid p-4 hover:bg-sky-100 rounded-xl
            transition-colors duration-300'>
                <p className='text-md font-semibold underline'>order-{item["Key"]}</p>
                <TradeItems items={item["item"]["cro_items_info"]} title="my items" coins={(item["item"]["cro_items"].length - item["item"]["cro_items_info"].length).toString()} />
                <TradeItems items={item["item"]["p2_items_info"]} title="their items" coins={(item["item"]["p2_items"].length - item["item"]["p2_items_info"].length).toString()} />
                <div className='flex space-x-2 justify-center'>
                    <p>status </p>
                    <div className='w-6 h-6'>
                        <Image src={item["status"] == "unaccepted" ? Check : Cross} layout='intrinsic' />
                    </div>
                </div>
            </div>
        )
    })

    const revTradeReqs = revRequests.map(item => {

        // add function to accept the request

        return (
            <div key={item["Key"]} className='w-1/2 space-y-2 flex flex-col items-center
        border-4 border-sky-600 border-solid p-4 hover:bg-sky-100 rounded-xl
        transition-colors duration-300'>
                <p className='text-md font-semibold underline'>order-{item["Key"]}</p>

                <TradeItems items={item["item"]["cro_items_info"]} title="their items"
                    coins={(item["item"]["cro_items"].length - item["item"]["cro_items_info"].length).toString()} />
                <TradeItems items={item["item"]["p2_items_info"]} title="my items"
                    coins={(item["item"]["p2_items"].length - item["item"]["p2_items_info"].length).toString()} />

                <div className='w-full flex justify-evenly'>
                    <div className='flex space-x-2 justify-center'>
                        <p>status </p>
                        <div className='w-6 h-6'>
                            <Image src={item["status"] == "unaccepted" ? Check : Cross} layout='intrinsic' />
                        </div>
                    </div>
                    <div className='flex space-x-2 justify-center'>
                        <p>decision </p>
                        <div className='w-6 h-6'>
                            {item["item"]["p2_dec"] == "no" && <Image src={Cross} layout='intrinsic' />}
                            {item["item"]["p2_dec"] == "yes" && <Image src={Check} layout='intrinsic' />}
                            {item["item"]["p2_dec"] == "undecided" && <Image src={Think} layout='intrinsic' />}
                        </div>
                    </div>
                    {item["item"]["p2_dec"] == "undecided" && (
                        <div className='flex space-x-2 justify-center cursor-pointer'>
                            <p>accept</p>
                            <div className='w-6 h-6'>
                                <Image src={RaiseHand} layout='intrinsic' />
                            </div>
                        </div>)}
                </div>
            </div>)
    })

    return (
        <div className='flex bungee'>
            <div className='w-1/2 flex flex-col items-center mt-4 text-sky-500'>
                <p className='w-full text-center text-2xl'>wanna trade?</p>
                <Image src={Triss} layout='intrinsic' />
            </div>
            <div className='w-1/2 flex flex-col overflow-scroll h-screen items-center py-10 space-y-4'>
                <p className='text-xl text-sky-500 underline text-center font-bold'>sent requests</p>
                {myTradeReqs}
                <p className='text-xl text-sky-500 underline text-center font-bold'>received requests</p>
                {revTradeReqs}
            </div>
        </div>
    )
}

// list of assets to buy
const AssetL = (props) => {

    // query for assets (use promises)
    // asset_data -> get from backend
    // click on coin to buy

    const asts = asset_data.map(item => (
        <div key={item["Key"]} className='my-2 w-1/2 text-sky-400 p-4 border-y-2 border-x-4 
        border-solid border-x-sky-500 border-y-sky-600 hover:text-white hover:bg-sky-200 
        transition-colors duration-300 space-y-2 rounded-xl'>

            <p className='w-full text-center'>
                {item["item"]["name"]}
            </p>

            <div className='flex justify-evenly'>
                <div className='flex space-x-2'>
                    <div className='w-6 h-6'>
                        <Image src={Metal} layout='intrinsic' />
                    </div>
                    <p>{item["item"]["asset_type"]}</p>
                </div>
                <div className='flex space-x-2'>
                    <div className='w-6 h-6'>
                        <Image src={Swords} layout='intrinsic' />
                    </div>
                    <p>{item["item"]["value"]}</p>
                </div>
                <div className='flex space-x-2 cursor-pointer'>
                    <div className='w-6 h-6'>
                        <Image src={Coin} layout='intrinsic' />
                    </div>
                    <p>{item["item"]["price"]}</p>
                </div>
            </div>
        </div>)
    )

    return (
        <div className='flex bungee'>
            <div className='w-1/2 flex flex-col items-center mt-4 text-sky-500'>
                <p className='w-full text-center text-2xl'>wha' assets do ye needs?</p>
                <Image src={Ermion} layout='intrinsic' />
            </div>
            <div className='flex flex-col overflow-scroll h-screen w-1/2 items-center py-10'>
                {asts}
            </div>
        </div>
    )
}

// list of voting requests
const VoteReqs = (props) => {

    // get all voting requirements
    const vts = vote_data.map(item => {

        // make the requests
        if (item["item"]["type"] == "assetreq") {
            const itemR = item["item"]["info"]
            return (
                <div key={item["Key"]} className='my-2 w-1/2 text-sky-400 p-4 border-y-2 border-x-4 
                    border-solid border-x-sky-500 border-y-sky-600 hover:text-white hover:bg-sky-200 
                    transition-colors duration-300 space-y-2 rounded-xl'>
                    <p className='w-full text-center text-xl underline font-bold'>asset request</p>
                    <p className='w-full text-center pt-4'>
                        {itemR["name"]}
                    </p>
                    <div className='flex justify-evenly'>
                        <div className='flex space-x-2'>
                            <div className='w-6 h-6'>
                                <Image src={Metal} layout='intrinsic' />
                            </div>
                            <p>{itemR["type"]}</p>
                        </div>
                        <div className='flex space-x-2'>
                            <div className='w-6 h-6'>
                                <Image src={Swords} layout='intrinsic' />
                            </div>
                            <p>{itemR["value"]}</p>
                        </div>
                        <div className='flex space-x-2'>
                            <div className='w-6 h-6'>
                                <Image src={Coin} layout='intrinsic' />
                            </div>
                            <p>{Math.max(itemR["value"] * 400, 400)}</p>
                        </div>
                    </div>
                    <div className='flex space-x-2 justify-center'>
                        <p>status </p>
                        <div className='w-6 h-6'>
                            <Image src={item["status"] == "unaccepted" ? Check : Cross} layout='intrinsic' />
                        </div>
                    </div>
                    <div className='flex space-x-2 cursor-pointer justify-center pt-4'>
                        <div className='w-6 h-6'>
                            <Image src={RaiseHand} layout='intrinsic' />
                        </div>
                        <p>vote</p>
                    </div>
                </div>
            )
        } else if (item["item"]["type"] == "gmakereq") {
            const itemR = item["item"]
            return (
                <div key={item["Key"]} className='my-2 w-1/2 text-sky-400 p-4 border-y-2 border-x-4 
                border-solid border-x-sky-500 border-y-sky-600 hover:text-white hover:bg-sky-200 
                transition-colors duration-300 space-y-2 rounded-xl'>
                    <p className='w-full text-center text-xl underline font-bold'>maker request</p>
                    <p className='w-full text-center pt-2'>
                        <a href={itemR["info"]}>{itemR["alias"]}</a>
                    </p>
                    <div className='flex space-x-2 justify-center'>
                        <p>status </p>
                        <div className='w-6 h-6'>
                            <Image src={item["status"] == "unaccepted" ? Check : Cross} layout='intrinsic' />
                        </div>
                    </div>
                    <div className='flex space-x-2 cursor-pointer justify-center pt-4'>
                        <div className='w-6 h-6'>
                            <Image src={RaiseHand} layout='intrinsic' />
                        </div>
                        <p>vote</p>
                    </div>
                </div>
            )

        } else {
            const itemR = item["item"]
            return (
                <div key={item["Key"]} className='my-2 w-1/2 text-sky-400 p-4 border-y-2 border-x-4 
                border-solid border-x-sky-500 border-y-sky-600 hover:text-white hover:bg-sky-200 
                transition-colors duration-300 space-y-2 rounded-xl'>
                    <p className='w-full text-center text-xl underline font-bold'>punish</p>
                    <p className='w-full text-center pt-2'>
                        <a href={itemR["info"]}>{itemR["alias"]}</a>
                    </p>
                    <div className='flex space-x-2 justify-center'>
                        <p>status </p>
                        <div className='w-6 h-6'>
                            <Image src={item["status"] == "unaccepted" ? Check : Cross} layout='intrinsic' />
                        </div>
                    </div>
                    <div className='flex space-x-2 cursor-pointer justify-center pt-4'>
                        <div className='w-6 h-6'>
                            <Image src={Death} layout='intrinsic' />
                        </div>
                        <p>hacka</p>
                    </div>
                </div>
            )
        }
    })

    return (
        <div className='flex bungee'>
            <div className='w-1/2 flex flex-col items-center mt-4 text-sky-500'>
                <p className='w-full text-center text-2xl'> there is but one punishment for traitors!</p>
                <Image src={Emhyr} layout='intrinsic' />
            </div>
            <div className='flex flex-col overflow-scroll h-screen w-1/2 items-center py-10'>
                {vts}
            </div>
        </div>
    )
}

//inventory
const Inventory = (props) => {

    const items = props.items.filter(item => item["item"]["name"] != "floren")
    const amt_coins = props.items.length - items.length

    const invs = items.map(item => (<div key={item["Key"]} className='my-2 w-1/2 text-sky-400 p-4 border-y-2 border-x-4 
        border-solid border-x-sky-500 border-y-sky-600 hover:text-white hover:bg-sky-200 
        transition-colors duration-300 space-y-2 rounded-xl'>
        <p className='w-full text-center'>
            {item["item"]["name"]}
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
    )

    return (
        <div className='flex bungee'>
            <div className='w-1/2 flex flex-col items-center mt-4 text-sky-500'>
                <p className='w-full text-center text-2xl'>cometh to see thy wares?</p>
                <Image src={Avalach} layout='intrinsic' />
            </div>
            <div className='flex flex-col overflow-scroll h-screen w-1/2 items-center py-10'>
                {invs}
                <div key="coins" className='w-1/2 text-sky-400 p-4 border-y-2 border-x-4
                border-solid border-x-sky-500 border-y-sky-600 hover:text-white hover:bg-sky-200 
                transition-colors duration-300 space-y-2'>
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
        </div>

    )
}

const NavBar = (props) => {
    return (
        <div className='flex justify-center bungee text-sky-500'>
            <div className='w-1/4 text-center border-b-4 border-solid border-sky-500
            hover:text-white hover:bg-sky-300 transition-colors duration-300 cursor-pointer'
                onClick={() => props.changeNav(0)}>handel</div>
            <div className='w-1/4 text-center border-b-4 border-l-2 border-solid cursor-pointer
             border-sky-500 hover:text-white hover:bg-sky-300 transition-colors duration-300'
                onClick={() => props.changeNav(1)}>kopa </div>
            <div className='w-1/4 text-center border-b-4 border-l-2 border-solid
            border-sky-500 hover:text-white hover:bg-sky-300 transition-colors duration-300 cursor-pointer'
                onClick={() => props.changeNav(2)}>rosta </div>
            <div className='w-1/4 text-center border-b-4 border-l-2 border-solid
            border-sky-500 hover:text-white hover:bg-sky-300 transition-colors duration-300 cursor-pointer'
                onClick={() => props.changeNav(3)}>lager</div>
        </div>
    )
}

const Hub = (props) => {
    const [nav, changeNav] = useState(1)
    const [items, changeItems] = useState(inv_data)

    return (
        <div className='bg-gradient-to-l from-slate-200 to-sky-200 h-screen w-screen overflow-hidden bungee'>
            <NavBar changeNav={changeNav} />
            {nav == 0 && <TradeReqs account={props.account} />}
            {nav == 1 && <AssetL account={props.account} />}
            {nav == 2 && <VoteReqs account={props.account} />}
            {nav == 3 && <Inventory items={items} />}
            <audio src='/merchantmusic.mp3' controls autoPlay loop className='fixed bottom-4 left-4'></audio>
        </div>)
}

export default Hub