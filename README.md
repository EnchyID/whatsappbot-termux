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
# List Message
``` ts
sock.sendMessage(id, {
    text: "This is my text!",
    buttonText: "Menu",
    sections: [{
        title: "Menu Section 1",
        rows: [{
            title: "Section Row 1",
            rowId: "1",
            description: "This is my description section row 1"
        }, {
            title: "Section Row 2",
            rowId: "1",
            description: "This is my description section row 2"
        }]
    }]
});
```

