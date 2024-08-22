const itemsArray = [
    {
        url: "./images/item-7.jpg",
        name: "Fish Chip",
        rating: "4.5",
        price: 20.00
    },
    {
        url: "./images/item-8.jpg",
        name: "Steak",
        rating: "4.8",
        price: 35.00
    },
    {
        url: "./images/item-9.jpg",
        name: "Beef Salad",
        rating: "4.0",
        price: 25.00
    },
    {
        url: "./images/item-10.jpg",
        name: "Hot Dog",
        rating: "4.7",
        price: 12.00
    },
    {
        url: "./images/item-11.jpg",
        name: "Sushi",
        rating: "4.3",
        price: 28.00
    },
    {
        url: "./images/item-12.jpg",
        name: "Beef Tots",
        rating: "4.8",
        price: 28.00
    },
]


function handleShowMoreProducts() {
    const itemsContainer = document.getElementById('popular-items-container');
    const productButton = document.getElementById('productBtn');
    for (const item of itemsArray) {
        const itemsDivImage = document.createElement('div');

        if (productButton.innerText == "See More Products") {
            productButton.innerHTML = "Show less Products";
            itemsDivImage.classList.add("card", "card-compact", "bg-base-100", "w-full", "shadow-xl")
            itemsDivImage.innerHTML = ` <figure>
        <img class="w-full h-full" src="${item.url}" alt="Gyro Sandwhic" />
    </figure>
    <div class="card-body">
        <div class="flex items-center justify-between">
            <h2 class="card-title text-black font-bold tex-2xl mt-2">${item.name}</h2>
            <div class="flex items-center gap-2">
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
                <p class="text-black font-normal text-lg">${item.rating}</p>
            </div>
        </div>
        <div class="card-actions flex items-center justify-between mt-4">
            <button class="btn bg-primary text-white rounded-full px-5">Add To Cart</button>
            <div>
                <p class="text-black font-medium text-lg">$${item.price}</p>
            </div>
        </div>
    </div>
     `
            productButton.innerHTML = "Show less Products";
            itemsContainer.appendChild(itemsDivImage);
            console.log(itemsDivImage)
        }

        else {
            productButton.innerHTML = "Show More Products";
        }

    }


}



function handleSubscription(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const messageContainer = document.getElementById("message-container")
    const emailParagraph = document.createElement('p');
    emailParagraph.innerText = "Thanks for Subscribing"
    messageContainer.appendChild(emailParagraph);


}
