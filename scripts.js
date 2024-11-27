function viewProduct(title, image, description, link) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-link').href = link;
    document.getElementById('product-modal').classList.remove('hidden');
  }
  
  function closeModal() {
    document.getElementById('product-modal').classList.add('hidden');
  }

  
  document.addEventListener('click', (e) => {
    const modal = document.getElementById('product-modal');
    if (!modal.classList.contains('hidden') && !e.target.closest('.modal-content')) {
      closeModal();
    }
  });
  