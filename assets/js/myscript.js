const openModalButton = document.getElementById("open-modal-button");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButton.addEventListener("click", () => {
    openModal(modal);
  });
  
  overlay.addEventListener("click", () => {
    const modal = document.querySelector(".subscribeModal.active");
    closeModal(modal);
  });
  
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".subscribeModal");
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    console.log("open");
    modal.classList.add("active");
    overlay.classList.add("active");
  }
  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
  
function restaurantChoice(){
    let restaurant = document.getElementById("restaurant-list").value;
    let adress = document.getElementById("adress");
    let restaurantImg = document.getElementById("restaurant-img");
    let restaurantLink = document.getElementById("restaurantLink");
    restaurant = parseInt(restaurant);
    restaurantImg.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.9270521105796!2d4.437695215729751!3d50.40519707946908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c227637e52f8cd%3A0xc86e426105b5a0e5!2sE6K%20-%20Square%20des%20Martyrs%201%2C%206000%20Charleroi!5e0!3m2!1sfr!2sbe!4v1600872311903!5m2!1sfr!2sbe";
    adress.innerHTML = "KELLER - Square des Martyrs 1, 6000 Charleroi";
    switch (restaurant){
        case 0:
          adress.innerHTML = "KELLER - Square des Martyrs 1, 6000 Charleroi";
          restaurantImg.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.9270521105796!2d4.437695215729751!3d50.40519707946908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c227637e52f8cd%3A0xc86e426105b5a0e5!2sE6K%20-%20Square%20des%20Martyrs%201%2C%206000%20Charleroi!5e0!3m2!1sfr!2sbe!4v1600872311903!5m2!1sfr!2sbe";
          break;
        case 1:
          adress.innerHTML = "Cantersteen 10, 1000 Bruxelles";
          restaurantImg.src = src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.2335829397703!2d4.355091250886594!3d50.84535866661197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c47fce0ba71d%3A0x2f634768a374d3b0!2sCantersteen%2010%2C%201000%20Bruxelles!5e0!3m2!1sfr!2sbe!4v1600872954627!5m2!1sfr!2sbe";
        
          break; 
    }
}