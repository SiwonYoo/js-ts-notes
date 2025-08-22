export function appendImages(images) {
    const catList = document.querySelector("#cat-list");
    images.forEach((item) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = item.url;
        img.width = 200;
        li.appendChild(img);
        catList?.appendChild(li);
    });
}
