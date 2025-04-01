function showCard() {
  setTimeout(() => {
    const card = document.getElementById("card_container");
    card.style.opacity = "1";
    card.style.display = "block";
  }, show_card_duration);
}
