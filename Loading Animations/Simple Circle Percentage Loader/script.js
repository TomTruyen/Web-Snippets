window.onload = (e) => {
    const innerText = document.querySelector(".inner_text");
    let counter = 0;
    setInterval(() => {
        if (counter == 100) {
            clearInterval();
        } else {
            counter += 1;
            innerText.textContent = counter + "%";
        }
    }, 80);
}