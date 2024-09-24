var qoute =[
    {'qoute':"You miss 100% of the shots you don't take."
    ,'Auther':"--Wayne Gretzy"
},
{
    'qoute':"Resentment is like drinking poison and waiting for your enemies to die."
    ,'Auther':"--Nelson Mandela"
},
{
    'qoute':"It's not what happens to you, but how you react to it that matters."
    ,'Auther':"--Epictetus"
},
{
    'qoute':"The best revenge is massive success."
    ,'Auther':"--Frank Sinatra"
},
{
    'qoute':"Do not take life too seriously. You will not get out alive."


    ,'Auther':"--Elbert Hubbard"
},
]
function getQoutes(){
var num =Math.floor(Math.random()*qoute.length);

document.getElementById("quote").innerHTML=qoute[num].qoute;
document.getElementById("auther").innerHTML=qoute[num].Auther;

}