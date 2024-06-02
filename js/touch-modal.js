(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-btn]"),
    closeModalBtn: document.querySelector("[data-modal-close-btn]"),
    modal: document.querySelector("[data-modal-touch]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
