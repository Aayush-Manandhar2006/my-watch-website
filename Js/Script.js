const fullCollection = [ // Full collection of watches
  { img: "../Images/watches/Ap/Ap-26.png", name: "Audemars Piguet - Supersonnerie", originalPrice: "$399,999", discountedPrice: "$349,999" },
  { img: "../Images/watches/Rm/Rm-25.png", name: "Richard Millie - RM025", originalPrice: "$365,000", discountedPrice: "$310,000" },
  { img: "../Images/watches/Pp/Pp-600.png", name: "Patek Philippe - Grand Complications", originalPrice: "$194,190", discountedPrice: "$174,900" },
  { img: "../Images/watches/Ap/Ap-23.png", name: "Audemars Piguet - Selfwinding", originalPrice: "$28,500", discountedPrice: "$25,000" },
  { img: "../Images/watches/Pp/Pp-532.png", name: "Patek Philippe - Perpetual Calendar", originalPrice: "$106,640", discountedPrice: "$95,500" },
  { img: "../Images/watches/Rm/Rm-60.png", name: "Richard Millie - Regatta Flyback Chronograph", originalPrice: "$206,500", discountedPrice: "$185,000" },
  { img: "../Images/watches/Ap/Ap-24.png", name: "Audemars Piguet - Selfwinding Chronograph", originalPrice: "$39,999", discountedPrice: "$35,000" },
  { img: "../Images/watches/Rm/Rm-56.png", name: "Richard Millie - Tourbillon Sapphire", originalPrice: "$1,885,500", discountedPrice: "$1,750,000" },
  { img: "../Images/watches/Pp/Pp-530.png", name: "Patek Philippe - 5303R Grand Complications", originalPrice: "$780,000", discountedPrice: "$720,000" },
  { img: "../Images/watches/Ap/Ap-25.png", name: "Audemars Piguet - Flying Tourbillon", originalPrice: "$195,000", discountedPrice: "$180,000" },
  { img: "../Images/watches/Rm/Rm-33.png", name: "Richard Millie - Calibre RMXP1", originalPrice: "$145,000", discountedPrice: "$130,000" },
  { img: "../Images/watches/Pp/Pp-527.png", name: "Patek Philippe - 5270J Grand Complications", originalPrice: "$195,000", discountedPrice: "$180,000" }
];

function showCollection(brand) { 
  const collectionGrid = document.querySelector(".collection-grid"); 
  const goBackBtn = document.getElementById("goBackBtn");

  collectionGrid.innerHTML = ""; 
  goBackBtn.style.display = "block"; 

  const collections = {
      rm: [
          { img: "../Images/watches/Rm/Rm-25.png", name: "Richard Millie - RM025", originalPrice: "$365,000", discountedPrice: "$310,000" },
          { img: "../Images/watches/Rm/Rm-60.png", name: "Richard Millie - Regatta Flyback Chronograph", originalPrice: "$206,500", discountedPrice: "$185,000" },
          { img: "../Images/watches/Rm/Rm-56.png", name: "Richard Millie - Tourbillon Sapphire", originalPrice: "$1,885,500", discountedPrice: "$1,750,000" },
          { img: "../Images/watches/Rm/Rm-33.png", name: "Richard Millie - Calibre RMXP1", originalPrice: "$145,000", discountedPrice: "$130,000" }
      ],
      pp: [
          { img: "../Images/watches/Pp/Pp-600.png", name: "Patek Philippe - Grand Complications", originalPrice: "$194,190", discountedPrice: "$174,900" },
          { img: "../Images/watches/Pp/Pp-532.png", name: "Patek Philippe - Perpetual Calendar", originalPrice: "$106,640", discountedPrice: "$95,500" },
          { img: "../Images/watches/Pp/Pp-530.png", name: "Patek Philippe - 5303R Grand Complications", originalPrice: "$780,000", discountedPrice: "$720,000" },
          { img: "../Images/watches/Pp/Pp-527.png", name: "Patek Philippe - 5270J Grand Complications", originalPrice: "$195,000", discountedPrice: "$180,000" }
      ],
      ap: [
          { img: "../Images/watches/Ap/Ap-26.png", name: "Audemars Piguet - Supersonnerie", originalPrice: "$399,999", discountedPrice: "$349,999" },
          { img: "../Images/watches/Ap/Ap-23.png", name: "Audemars Piguet - Selfwinding", originalPrice: "$28,500", discountedPrice: "$25,000" },
          { img: "../Images/watches/Ap/Ap-24.png", name: "Audemars Piguet - Selfwinding Chronograph", originalPrice: "$39,999", discountedPrice: "$35,000" },
          { img: "../Images/watches/Ap/Ap-25.png", name: "Audemars Piguet - Flying Tourbillon", originalPrice: "$195,000", discountedPrice: "$180,000" }
      ]
  };

  const selectedCollection = collections[brand];

  selectedCollection.forEach(item => {
      const collectionItem = `
          <div class="collection-item">
              <img src="${item.img}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p><span class="original-price" style="text-decoration: line-through; color: red;">${item.originalPrice}</span> 
                 <span class="discounted-price" style="color: black; font-weight: bold;">${item.discountedPrice}</span></p>
              <button class="learn-more-btn">Learn More</button>
              <button class="add-to-cart-btn" onclick ="addToCart()">Add to Cart</button>
          </div>
      `;
      collectionGrid.innerHTML += collectionItem;
  });
}

function showFullCollection() {
  const collectionGrid = document.querySelector(".collection-grid");
  const goBackBtn = document.getElementById("goBackBtn");

  collectionGrid.innerHTML = ""; 
  goBackBtn.style.display = "none";

  fullCollection.forEach(item => {
      const collectionItem = `
          <div class="collection-item">
              <img src="${item.img}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p><span class="original-price" style="text-decoration: line-through; color: red;">${item.originalPrice}</span> 
                 <span class="discounted-price" style="color: black; font-weight: bold;">${item.discountedPrice}</span></p>
              <button class="learn-more-btn">Learn More</button>
              <button class="add-to-cart-btn" onclick ="addToCart()">Add to Cart</button>
          </div>
      `;
      collectionGrid.innerHTML += collectionItem;
  });
}




// JavaScript to handle the modal
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('productModal');
  const closeBtn = document.querySelector('.close-btn');
  const modalTitle = document.getElementById('modalTitle');
  const modalSpecs = document.getElementById('modalSpecs');
  const reviewsList = document.getElementById('reviewsList');
  const reviewForm = document.getElementById('reviewForm');
  const reviewInput = document.getElementById('reviewInput');

  // Sample data for watch specifications and reviews
  const watchData = {
      "Supersonnerie": {
          specs: "Material: Titanium, Movement: Manual Winding, Power Reserve: 60 hours",
          reviews: ["⭐⭐⭐⭐ (7)"]
      },
      "RM025": {
          specs: "Material: Carbon, Movement: Automatic, Power Reserve: 50 hours",
          reviews: ["⭐⭐⭐⭐ (2)"]
      },
      "Grand Complications": {
          specs: "Material: Alloy, Movement: Automatic, Power Reserve: 70 hours",
          reviews: ["⭐⭐⭐⭐⭐ (10)"]
      },
      "Selfwinding": {
          specs: "Material: Platinum, Movement: Manual, Power Reserve: 90 hours",
          reviews: ["⭐⭐⭐⭐ (4)"]
      },
      "Perpatual Calendar": {
          specs: "Material: Gold, Movement: Automatic, Power Reserve: 40 hours",
          reviews: ["⭐⭐⭐⭐ (6)"]
      },
      "Regatta Flyback Chronograph": {
          specs: "Material: Brass, Movement: Manual, Power Reserve: 80 hours",
          reviews: ["⭐⭐⭐⭐ (6)"]
      },
      "Selfwinding Chronograph": {
          specs: "Material: Carbon, Movement: Automatic, Power Reserve: 60 hours",
          reviews: ["⭐⭐⭐⭐ (8)"]
      },
      "Tourbillon Sapphire": {
          specs: "Material: Sapphire, Movement: Manual, Power Reserve: 40 hours",
          reviews: ["⭐⭐⭐⭐⭐ (1)"]
      },
      "5303R Grand Complications": {
          specs: "Material: Sillicon, Movement: Automatic, Power Reserve: 90 hours",
          reviews: ["⭐⭐⭐⭐ (2)"]
      },
      "Flying Tourbillon": {
          specs: "Material: Diamond, Movement: Manual, Power Reserve: 70 hours",
          reviews: ["⭐⭐⭐⭐ (5)"]
      },
      "Calibre RMXP1": {
          specs: "Material: Carbon, Movement: Manual, Power Reserve: 60 hours",
          reviews: ["⭐⭐⭐⭐ (16)"]
      },
      "5270J Grand Complications": {
          specs: "Material: Leather, Movement: Automatic, Power Reserve: 80 hours",
          reviews: ["⭐⭐⭐⭐ (2)"]
      }, 

  };

  // Function to open the modal
  function openModal(watchName) {
      modal.style.display = 'block';
      modalTitle.textContent = watchName;
      modalSpecs.textContent = watchData[watchName].specs;
      reviewsList.innerHTML = watchData[watchName].reviews;
  }

  // Function to close the modal
  function closeModal() {
      modal.style.display = 'none';
  }

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('learn-more-btn')) {
        const watchName = event.target.closest('.collection-item').querySelector('h3').textContent.split(' - ')[1];
        openModal(watchName);
    }
});


  // Event listener for close button
  closeBtn.addEventListener('click', closeModal);
});


  //function for review validation.
  function reviewvalidation(){
    const review = document.getElementById("reviewInput").value.trim();
    
    if(!review){
        alert("Please enter a review!!!!");
    }
    else {
        alert("Review submitted!!!");
    }
}

//function to throw an alert when user clicks the add to cart button.
function addToCart(){
    alert("Added Successfully!!!!!")
}