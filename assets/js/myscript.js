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
    restaurantImg.src = "#";
    adress.innerHTML = "";
    restaurantLink.href = "";
    switch (restaurant){
        case 0:
            restaurantImg.src = "assets/img/where.jpg";
            break;
        case 1:
            adress.innerHTML = "KELLER - Square des Martyrs 1, 6000 Charleroi";
            restaurantImg.src = "assets/img/Charleroi.jpg";
            restaurantLink.href ="https://www.google.com/maps/place/E6K+-+Square+des+Martyrs+1,+6000+Charleroi/@50.4052005,4.4376899,17z/data=!3m1!4b1!4m5!3m4!1s0x47c227637e52f8cd:0xc86e426105b5a0e5!8m2!3d50.4051971!4d4.4398839";
            break;
        case 2:
            adress.innerHTML = " Cantersteen 10, 1000 Bruxelles";
            restaurantImg.src = "assets/img/Bruxelles.jpg";
            restaurantLink.href = "https://www.google.com/maps?q=Cantersteen+10,+1000+Bruxelles&um=1&ie=UTF-8&sa=X&ved=2ahUKEwii8aaFjvrrAhVB_KQKHaSJCK0Q_AUoAXoECBAQAw"
            break;
    }
}