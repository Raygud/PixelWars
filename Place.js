let a = false
let UserExsists;

let Users = [
    {Name:"2dada",
     Color: "Red"},
     {Name:"sadsd",
     Color: "Red"},
     {Name:"adsas",
     Color: "Red"},
     {Name:"dd",
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
        if(!Users[i].Name.includes(tags.username)){
            
            console.log(!Users[i].Name.includes(tags.username)+" "+Users[i].Name)
            if(!Users[i].Name.includes(tags.username)){
                console.log("User: " + tags.username + " not found")
                a = false
            }
        }
        else{
            console.log("User found at Users[" + i + "].Name") 
            a = true
            break;
        }
    }
    if(a == true){
        console.log("osdko")
    }
    if(a == false){
        console.log("added")
        Users.push({Name: tags.username,
                          Color: "Red"})
                          console.log(Users)
    }
    


    if(message.startsWith("P".toLocaleLowerCase()) && message.replace(/\s+/g, '').length < 6 ){
        console.log(message.substr(1,message.length))
        tags.username
        let indexOfUser = Users.map(object => object.Name).indexOf(tags.username);

        document.getElementById("Place"+message.substr(1,message.length)).style.backgroundColor = Users[indexOfUser].Color
    }

    if(message.toLocaleLowerCase().substr(0,5) == "Color".toLocaleLowerCase()){
        console.log(message.toLocaleLowerCase().substr(0,5))

        ChangeColor(tags.username,message.replace(/\s+/g, '').substr(5,message.length))
    }
    
    
    
});

function ChangeColor(User,Color){

    let indexOfUser = Users.map(object => object.Name).indexOf(User);
    console.log(indexOfUser)

    Users[indexOfUser].Color = Color

}
					
