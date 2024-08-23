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
        name: "Spaghetti",
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

const itemsContainer = document.getElementById('popular-items-container');
const productMoreButton = document.getElementById('product-more-button');
const productLessButton = document.getElementById('product-less-button');


function handleShowMoreProducts() {
    for (const item of itemsArray) {
        const itemsDivImage = document.createElement('div');
        itemsDivImage.classList.add("card", "card-compact", "rounded-[35px]", "bg-base-100", "w-full", "shadow-xl")
        itemsDivImage.innerHTML = ` <figure>
        <img class="w-full h-full" src="${item.url}" alt="${item.name}" />
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
          <button class="btn bg-primary text-white rounded-full px-5 hover:bg-orange-500 border-none">Add To Cart</button>
          <div>
            <p class="text-black font-medium text-lg">$${item.price}</p>
          </div>
        </div>
      </div>
       `
        itemsContainer.appendChild(itemsDivImage);
    }
    productMoreButton.style.display = "none";
    productLessButton.style.display = "block";
}

function handleShowLessProducts() {
    while (itemsContainer.children.length > 6) {
        itemsContainer.removeChild(itemsContainer.lastChild);
    }
    productMoreButton.style.display = "block";
    productLessButton.style.display = "none";
}


function handleSubscription(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const messageContainer = document.getElementById("message-container")
    const subscribeButton = document.getElementById('subscribe-btn');
    const emailParagraph = document.createElement('p');
    messageContainer.innerHTML = " ";

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
        emailParagraph.innerText = "Thanks for Subscribing";
        emailParagraph.style.color = "rgb(22 163 74)"
        messageContainer.appendChild(emailParagraph);
        // subscribeButton.disabled = true;

    }
    else {
        emailParagraph.innerText = "Please enter valid email";
        emailParagraph.style.color = "red"
        messageContainer.appendChild(emailParagraph);
    }
}
