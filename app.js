const quotes = document.getElementById('quoteslabel');
const btn = document.getElementById('btn');


const listOfQuotes = [
    "When it rains, look for the rainbows. When it’s dark, look for the stars.",
    "Climb the mountain so you can see the world, not so the world can see you.",
    "Happiness is found when you stop comparing yourself to other people.",
    "You are not what has happened to you. You are what you choose to become.",
    "The world will not be destroyed by those who do evil, but by those who watch them without doing anything.",
    "You may have not gone where you intended to go, but you will end up where you need to be.",
    "When you love what you have, you have everything you need.",
    "Good instincts tell you what to do long before your head has figured it out. – Michael Burke",
    "Look for something positive in each day, even if some days you have to look a little harder.",
    "Beautiful things happen when you distance yourself from negativity.",
    "Life is about breaking our personal limits and outgrowing ourselves to live our best lives.",
    "Some days you just have to create your own sunshine.",
    "Sometimes you find yourself in the middle of nowhere, and sometimes in the middle of nowhere, you find yourself.",
    "The way I see it, if you want the rainbow, you gotta put up with the rain. – Dolly Parton",
    "Never get so busy making a living that you forget to make a life.",
    "Impossible is not a fact, it’s an opinion.",
    "You are not what you have done – you are what you have overcome.",
    "The real opportunity for success lies within the person and not in the job. – Zig Ziglar",
    "Your past was never a mistake if you learned from it.",
    "Live like each day is your last! Love like you have never been hurt before! Sing like no one is listening! Dance like no one is watching!",
    "Knowing is not enough; we must apply. Willing is not enough; we must do.",
    "Don’t compare your Chapter 1 to someone else’s Chapter 20.",
    "Dream as if you’ll live forever, live as if you’ll die today. -James Dean",
    "Don’t let a bad day make you feel like you have a bad life.",
    "Intelligence without ambition is a bird without wings.",
    "Fill your mind with truth, your heart with love, your life with service.",
    "You cannot always wait for the perfect time. Sometimes you must dare to jump.",
    "Happiness cannot come from without. It must come from within. – Helen Keller",
    "Once you’ve accepted your flaws, no one can use them against you.",
    "Thank your past for all the lessons, and move on.",
    "Don’t compare your progress with that of others. We all need our own time to travel our own distance.",
    "Don’t let a hard lesson harden your heart.",
    "If you can’t do great big things, do great little things.",
    "Give people a piece of your heart rather than your mind.",
    "Even if you’re on the right track, you’ll get run over if you just sit there. – Will Rogers",
    "Count your blessings, not your problems.",
    "Those who move forward with a happy spirit will find that things always work out.",
    "Mistakes are proof that you’re trying.",
    "One small positive thought in the morning can change your whole day.",
    "In life you are either a passenger or a pilot, it’s your choice. –Unknown",
    "A negative mind will never give you a positive life.",
    "Do what is right, not what is easy.",
    "It always seems impossible until its done. -Nelson Mandela",
    "Surround yourself with those who see greatness in you, even when you don’t see it in yourself.",
    "Sometimes you have to get knocked down lower than you’ve ever been, to stand"
]    


btn.addEventListener('click', ()=>{

    let randomNumber = Math.trunc(Math.random()*listOfQuotes.length)
    quotes.textContent =  "` ' "+  " " +listOfQuotes[randomNumber] + " "  + "` ' " +  " " ;
})