images = ["cover.jpg","download.png", "download (1).png", "mom.png", "images.jpg", "Untitled (1).png"];
text = ["Family Book","Me", "Ariana, my sister", "My Mom", "My Dad", "My Grandmother"]
var i = 0;

function next() {
    document.getElementById("image").src = images[i+1];
    document.getElementById("text").innerHTML = text[i+1];
    i++
    if(i>=6) {
        i=0;
        document.getElementById("image").src = "cover.jpg";
        document.getElementById("text").innerHTML = "Family Book";
        
    }
}