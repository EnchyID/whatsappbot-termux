# Buttons Message
``` ts
sock.sendMessage(id, {
    text: "This is my text!",
    footer: "Footer This!",
    buttons: [{
        buttonId: "1",
        buttonText: {displayText: "Button 1"}
    }, {
        buttonId: "2",
        buttonText: {displayText: "Button 2"}
    }, {
        buttonId: "3",
        buttonText: {displayText: "Button 3"}
    }],
    headerType: 1
});
```
