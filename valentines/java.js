/* 💖 Personalization */
const herName = prompt("What's your name, beautiful? 💕") || "My Love";
const dateToday = new Date().toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric' });

const text = `Hi ${herName} 💖,

Hey cutie 💛
I’ve been thinking about all the silly, crazy, and sweet memories we’ve made together, and honestly… I don’t know what I did to deserve you 😅 Every laugh, every little moment—it just reminds me how lucky I am to have you.

Also… I know you found out about something hehe 😬 I’m really sorry, Love. I never meant to stress you out, and I promise I’m working on being better (for us, and for me too).

But even with all my mess-ups, I just want you to know I’m super thankful for you for accepting me even tho you found out something blah blah, for your patience, your love, and just… you. You make my world brighter, and I love you more than words can even handle ❤️

Kani nga ${dateToday},
ikaw gihapon akong pili on 💕
Will you stay as my Valentine? 🌹`;

let index = 0, done = false;

function acceptLove() {
    if(done) return;
    done = true;

    document.getElementById("choices").style.display = "none";
    document.getElementById("title").innerText = "You said YES 💍💖";

    const msg = document.getElementById("message");
    msg.style.display = "block";
    document.getElementById("sign").style.display = "block";
    document.getElementById("shareBtn").style.display = "block";

    explodeHearts();
    typeText(msg);
}

function typeText(el) {
    if(index < text.length) {
        el.innerHTML += text[index] === "\n" ? "<br>" : text[index];
        index++;
        setTimeout(() => typeText(el), 32);
    }
}

/* 💥 Fireworks Hearts */
function explodeHearts() {
    for(let i=0;i<30;i++){
        const h = document.createElement("div");
        h.className = "fire-heart";
        h.style.left = "50%";
        h.style.top = "50%";
        h.style.setProperty("--x", (Math.random()*400-200) + "px");
        h.style.setProperty("--y", (Math.random()*-400) + "px");
        document.body.appendChild(h);
        setTimeout(()=>h.remove(), 1000);
    }
}

/* 😏 No Button Dodge */
const noBtn = document.getElementById("noBtn");
noBtn.onclick = () => {
    noBtn.style.transform =
        `translate(${Math.random()*80-40}px,${Math.random()*80-40}px)`;
};

/* 📩 Messenger Share */
function shareMessenger(){
    const url = encodeURIComponent(location.href);
    window.open(`https://www.facebook.com/dialog/send?link=${url}`, "_blank");
}

/* 💕 Floating Hearts */
function createHeart(){
    const h = document.createElement("div");
    h.className = "heart";
    h.style.left = Math.random()*100 + "vw";
    h.style.animationDuration = (Math.random()*4+4) + "s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),8000);
}
setInterval(createHeart,220);