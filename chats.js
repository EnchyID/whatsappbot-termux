let command = "";

module.exports = async(chat) => {
    const msg = chat.messages[0];
    const from = msg.key.remoteJid;
    if(!msg.key.fromMe && chat.type === "notify"){
        if(msg.message["conversation"]){
            command = msg.message.conversation;
        }
        if(msg.message["buttonsResponseMessage"]){
            command = msg.message.buttonsResponseMessage.selectedButtonId;
        }
        if(msg.message["listResponseMessage"]){
            command = msg.message.listResponseMessage.title;
        }
        if(msg.message["templateButtonReplyMessage"]){
            command = msg.message.templateButtonReplyMessage.selectedId;
        }
        if(msg.message["extendedTextMessage"]){
            command = msg.message.extendedTextMessage.text;
        }
        if(msg.message["reactionMessage"]){
            command = msg.message.reactionMessage.text;
        }
        switch(command){
            case "/start":
                sock.sendMessage(from, {text: "Pesannya"});
            break;
            case "test":
                sock.sendMessage(from, {text: "Testing"});
            break;
            //tambah lagi apa...
            //case:
            //sock....
            //break;
        }
        return;
    }
}
