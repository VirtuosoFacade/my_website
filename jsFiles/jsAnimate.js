const frames = ["../assects/master-ball/_a_frm0,30.png", "../assects/master-ball/_a_frm01,30.png", "../assects/master-ball/_a_frm2,30.png",
    "../assects/master-ball/_a_frm3,30.png", "../assects/master-ball/_a_frm4,30.png", "../assects/master-ball/_a_frm5,30.png", "../assects/master-ball/_a_frm6,30.png", "../assects/master-ball/_a_frm7,30.png",
    "../assects/master-ball/_a_frm8,30.png", "../assects/master-ball/_a_frm9,30.png", "../assects/master-ball/_a_frm10,30.png", "../assects/master-ball/_a_frm11,30.png", "../assects/master-ball/_a_frm12,30.png",
    "../assects/master-ball/_a_frm13,30.png", "../assects/master-ball/_a_frm14,30.png", "../assects/master-ball/_a_frm15,30.png", "../assects/master-ball/_a_frm16,30.png", "../assects/master-ball/_a_frm17,30.png",
    "../assects/master-ball/_a_frm18,30.png", "../assects/master-ball/_a_frm19,30.png", "../assects/master-ball/_a_frm20,30.png"
]; // Array of image frames
let currentFrame = 0;

// html icon

function animateFavicon() {
    const favicon = document.getElementById("favicon");
    favicon.href = frames[currentFrame];
    currentFrame = (currentFrame + 1) % frames.length; // Loop through frames
    setTimeout(animateFavicon, 75); // Adjust speed (100ms per frame)
}

animateFavicon();

//for img of div
/*
function animateImage() {
    const animatedImage = document.getElementById("animatedImage");
    animatedImage.src = frames[currentFrame];
    
    currentFrame = (currentFrame + 1) % frames.length; // Loop through frames
    setTimeout(animateImage, 100); // Adjust speed (75ms per frame)
}

animateImage();
*/
