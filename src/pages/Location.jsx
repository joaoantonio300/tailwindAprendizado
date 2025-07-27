import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Layout from "../Layout/Layout";

const title = "Aonde estamos?";
const subtitle = "Saiba aonde nos procurar";

const Location = () => {
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    if (!mapContainer) return;
  
    const map = L.map(mapContainer).setView([-23.55052, -46.633308], 13);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    }).addTo(map);
  
    L.marker([-23.55052, -46.633308])
      .addTo(map)
      .bindPopup("Estamos aqui!")
      .openPopup();
  
    return () => {
      map.remove(); // limpa o mapa ao desmontar o componente
    };
  }, []);

  return (
    <Layout title={title} subtitle={subtitle}>
      <div className="flex justify-center mt-9">
        <div className="w-[80%] h-[350px] z-0 rounded-[20px]" id="map"></div>
      </div>
      <div className="w-[100%] flex justify-center mt-9">
        <div className="w-[80%] flex flex-col items-center">

        <div>
          <h1 className="font-semibold">Localização</h1>
          <p className="text-xs ml-5 w-[90%]">Rua Direita do Santo Antônio, 2 - Santo Antônio Além do Carmo, Salvador - BA 40301-280</p>
        </div>
        <div>
          <h1 className="font-semibold mt-5">Horário</h1>
          <p className="text-xs ml-5 w-[90%]">Aberto: terça a sábado, das 12:00 às 22:00</p>
        </div>

        <button className="w-[30%] bg-black text-xs text-white rounded-[20px] p-1 m-5">Ir no maps</button>
        </div> 
       </div>
    </Layout>
  );
};

export default Location;
