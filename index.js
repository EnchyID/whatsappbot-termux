const { default: makeWASocket, makeInMemoryStore, useSingleFileAuthState, MessageType } = require("@adiwajshing/baileys");
const pino = require("pino");
const fs = require("fs");
const { state, saveState } = useSingleFileAuthState("./cyclout-md.json");
const store = makeInMemoryStore({logger: pino().child({level: "fatal", stream: "store"})});
const qrcode = require("qrcode-terminal");

async function startSock(){
    const sock = global.sock = makeWASocket({
        logger: pino({level: "fatal"}),
        printQRInTerminal: true,
        browser: ["TermuxBot", "Safari", "1.0.0"],
        auth: state
    });
    store.bind(sock.ev);
    sock.ev.on("qr", (qr) => {
        qrcode.generate(qr, result);
        console.log(result);
    });
    const handler = require("./chats.js");
    //sock.ev.on('chats.set', item => console.log(`recv ${item.chats.length} chats (is latest: ${item.isLatest})`));
    //sock.ev.on('messages.set', item => console.log(`recv ${item.messages.length} messages (is latest: ${item.isLatest})`));
    //sock.ev.on('contacts.set', item => console.log(`recv ${item.contacts.length} contacts`));
    sock.ev.on('messages.upsert', handler);
    //sock.ev.on('messages.update', m => console.log(m));
    //sock.ev.on('message-receipt.update', m => console.log(m));
    //sock.ev.on('presence.update', m => console.log(m));
    //sock.ev.on('chats.update', m => console.log(m));
    //sock.ev.on('contacts.upsert', m => console.log(m));
    sock.ev.on("connection.update", (update) => {
	    const { connection, lastDisconnect } = update;
	    if(connection === "close"){
            startSock();
	    }
     	console.log("connection update", update);
    });
    sock.ev.on("creds.update", saveState);
}

startSock();
