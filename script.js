let count = 0;

function changeMessage() {
    document.getElementById("message").innerText =
        "Button clicked! JavaScript is working 🎉";
}

function increment() {
    count++;
    document.getElementById("count").innerText = count;
}
