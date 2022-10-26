const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
    <div class="nav">
    <img src="img/Fashion Logo.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="Buscar productos">
            <button class="search-btn">Buscar</button>
        </div>
        <a href="#"><img src="img/user.png"></a>
        <a href="#"><img src="img/cart.png"></a>
    </div>
</div>
<ul class="links-container">
  <li class="link-item"><a href="index.html" class="link">Inicio</a><li>
  <li class="link-item"><a href="women.html" class="link">Mujer</a></li>
  <li class="link-item"><a href="men.html" class="link">Hombre</a></li>
  <li class="link-item"><a href="contacto.html" class="link">Contacto</a></li>
 
</ul>
    `;
};

createNav();
