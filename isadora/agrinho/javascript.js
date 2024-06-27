
document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([-15.793889, -47.882778], 4); // Defina a visualização inicial do mapa

    // Adicione um layer do OpenStreetMap ao mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Adicione marcadores ou polígonos para representar pontos de interesse relacionados ao tema
    var marker = L.marker([-22.9068, -43.1729]).addTo(map);
    marker.bindPopup("<b>Rio de Janeiro</b><br>Exemplo de local urbano.");

    var polygon = L.polygon([
        [-22.9068, -43.1729],
        [-22.9035, -43.1895],
        [-22.9109, -43.2343]
    ]).addTo(map);
    polygon.bindPopup("<b>Área urbana do Rio de Janeiro</b><br>Exemplo de poluição urbana.");

   
});
