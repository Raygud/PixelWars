let Users = [
    {Name:"2dada",
     Color: "Red"},
     {Name:"dsaasd",
     Color: "Red"},
     {Name:"adsas",
     Color: "Red"},
     {Name:"raygud",
     Color: "Red"},
     {Name:"aaasdd",
     Color: "Red"},
]

for(let i = 0; i <= 5049 ; i++){
const node = document.createElement("td");
document.getElementById("PlaceContainer").appendChild(node);
node.setAttribute("id", "Place"+i);
}



const client = new tmi.Client({
	channels: [ 'raygud' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// "Alca: Hello, World!"
    console.log(tags.username + ": " + message)
    
    if(!Users.includes(tags.username)){
        Users.push({Name:tags.username,
                    Color: "Red"})
    }
    
    if(message.startsWith("P".toLocaleLowerCase()) || message.startsWith("P"))
    {
        console.log("P"+message.substr(0,0))



        document.getElementById("Place"+message.substr(1,message.length)).style.backgroundColor = "red"
    }

    for(let i = 0; i < Users.length; i++){
        if(tags.username.toLocaleLowerCase() == Users[i].Name.toLocaleLowerCase()){
            console.log(Users[i])
            Users[i].Color = "Green"
        }
    }
    console.log(Users)
});
					
