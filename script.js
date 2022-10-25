function generate()
{
    var quotes = 
    {
        "-J.R.R. Tolkein" : '"All we have to decide is what to do with the time that is given us."',
        "-Dr Seuss" : '"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You’re on your own. And you know what you know. And YOU are the one who’ll decide where to go…"', 
        "-J.K. Rowling" : '"It matters not what someone is born, but what they grow to be."', 
        "-Oscar Wilde" : '“Be yourself; everyone else is already taken.”', 
        "-Martin Luther King Jr." : '"“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”"', 
        "-Jodi Picoult" : '"You can always edit a bad page. You can’t edit a blank page"',
        "-Malcolm X" : '"If you have no critics, you’ll likely have no success."', 
        "-Norman Vincent Peale" : '"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers, you cannot be successful or happy."',
        "-Jim Rohn" : '"If you are not willing to risk the usual, you will have to settle for the ordinary."', 
        "-Chris Grosser" : '"Opportunities don’t happen. You create them."',
        "-Thomas Edison" : '"I have not failed. I’ve just found 10,000 ways that won’t work."', 
        "-Winston Churchill" : '"If you’re going through hell, keep going."',
        "-Dolly Parton" : '"The way I see it, if you want the rainbow, you gotta put up with the rain."', 
        "-Ray Goforth" : '"There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed."',
        "-Arthur Ashe" : '"Start where you are. Use what you have. Do what you can."', 
        "-Mary Kay Ash" : '"Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve."',
        "-Kevin Kline" : '"People ask, "What’s the best role you’ve ever played?" The next one."', 
        "-Mark Twain" : '"The two most important days in your life are the day you are born and the day you find out why."',
        "-Robert Collier" : '"Success is the sum of small efforts, repeated day-in and day-out."', 
        "-Michael John Bobak" : '"All progress takes place outside the comfort zone."',
        "-Pablo Picasso" : '"Only put off until tomorrow what you are willing to die having left undone."', 
        "-Steve Jobs" : '"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it."',
        "-Carl Bard" : '"Though no one can go back and make a brand-new start, anyone can start from now and make a brand-new ending."',
        "-Mark Twain" : '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."', 
        "-Charles F. Kettering" : '"Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it. I never heard of anyone ever stumbling on something sitting down."', 
        "-Jimmy Spithill" : '"Rarely have I seen a situation where doing less than the other guy is a good strategy."'
    } // Dictionary // 

    var authors = Object.keys(quotes); 

    var author = authors[Math.floor(Math.random() * authors.length)]; 

    var quote = quotes[author]; 

    document.getElementById("quote").innerHTML = quote; 
    document.getElementById("author").innerHTML = author; 
}
