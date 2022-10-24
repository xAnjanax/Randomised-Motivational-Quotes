function generate()
{
    var quotes = 
    {
        "-J.R.R. Tolkein" : '"All we have to decide is what to do with the time that is given us."',
        "-Dr Seuss" : '"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You’re on your own. And you know what you know. And YOU are the one who’ll decide where to go…"', 
        "-J.K. Rowling" : '"It matters not what someone is born, but what they grow to be."', 
        "-Oscar Wilde" : '“Be yourself; everyone else is already taken.”', 
        "-Martin Luther King Jr." : '"“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”"'
    } // Dictionary // 

    var authors = Object.keys(quotes); 

    // console.log(authors); // "won't print for some reason" // 

    var author = authors[Math.floor(Math.random() * authors.length)]; 

    var quote = quotes[author]; 

    document.getElementById("quote").innerHTML = quote; 
    document.getElementById("author").innerHTML = author; 
}
