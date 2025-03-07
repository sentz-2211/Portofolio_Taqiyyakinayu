// components.js

function loadComponent(url, containerId) {
    fetch(url)
      .then(response => response.text()) // Ambil konten HTML dari URL
      .then(data => {
        document.getElementById(containerId).innerHTML = data; // Tempelkan konten ke dalam container
      })
      .catch(error => console.error(`Error loading ${url}:`, error)); // Tangani jika terjadi error
  }
  
  // Memuat Navbar dan Footer
  loadComponent('navbar.html', 'navbar-container');
  loadComponent('footer.html', 'footer-container');
  