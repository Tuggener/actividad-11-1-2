const API = "https://taylor-swift-api.sarbo.workers.dev/albums"

function mostrarInfo(albums){
    const card = document.createElement("div");
    card.className = "tarjeta"
    card.innerHTML = `
        <div class="ctarjeta">
          <p>
          Titulo: ${albums.title}
          <br>
          Fecha: ${albums.release_date}
          </p>
        </div>
      `;
    return card;
};

fetch(API)
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud fallo');
    }
    return response.json();
  })
  .then(data => {
    const div = document.getElementById("informacion");
    data.forEach(album => {
        const albumElement = mostrarInfo(album); 
        div.appendChild(albumElement); 
      });
    console.log(data);
  })
  .catch(error => {
    console.error('Se produjo un error:', error);
  });