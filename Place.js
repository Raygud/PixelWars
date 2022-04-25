let x = "Red";
let paint = "Red";


let Users = [
    "2dada",
     "dsaasd",
     "Red",
     "adsas",
     "Red",
     "raygud",
     "Red",
     "aaasdd",
     "Red"
]

let UsersInfo = [
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

for(let i = 1; i <= 5000 ; i++){
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

    for(let i = 0; i < Users.length; i++){
        if(message.includes("Color") && tags.username.toLocaleLowerCase() == Users[i].Name.toLocaleLowerCase()){
            
            Users[i].Color = message.substr(6,message.length+1)
            console.log(message.substr(6,message.length+1))
            paint = Users[i].Color 
            
        }
    }
    console.log(x)

    if(!Users.includes(tags.username)){
        UsersInfo.push({Name:tags.username,
                    Color: x})
                    console.log(UsersInfo)
    }
    
    if(message.startsWith("P".toLocaleLowerCase()) || message.startsWith("P"))
    {

        console.log("P"+message.substr(0,0))
        document.getElementById("Place"+message.substr(1,message.length)).style.backgroundColor = paint
        
    }
 
    console.log(Users)
});
					
