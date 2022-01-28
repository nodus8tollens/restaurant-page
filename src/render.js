export function render() {
    const content = document.querySelector('#content');

    const header = document.createElement('header');
    header.innerText = "Welcome to my restaurant";
    content.appendChild(header);

    const image = document.createElement('img');
    image.src = '../src/image.jpg';
    content.appendChild(image);

    const para = document.createElement('p');
    para.innerText = "This cozy restaurant has left the best impressions! " +
        "Hospitable hosts, delicious dishes, beautiful presentation, " +
        "wide wine list and wonderful dessert. I recommend to everyone! I " +
        "would like to come back here again and again.";
    content.appendChild(para);
}

