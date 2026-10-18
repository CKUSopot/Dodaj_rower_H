import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const [listaRowerow, setListaRowerow] = useState([
    {
      id: 1,
      name: "Kros 1",
      price: 1220,
      color: "Zielony",
      model: "Gravel",
    },
    {
      id: 2,
      name: "Kros 2",
      price: 3420,
      color: "Biały",
      model: "miejski",
    },
  ]);

  // Додаємо новий велосипед до попереднього масиву
  const dodajNowyRower = (nowyRower) => {
    setListaRowerow((prevLista) => [
      ...prevLista,
      {
        ...nowyRower,
        id:
          prevLista.length > 0
            ? Math.max(...prevLista.map((r) => r.id)) + 1
            : 1,
      },
    ]);
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Katalog Rowerów</h1>
      <Form add={dodajNowyRower} />
      <hr className="my-4" />
      <List list={listaRowerow} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
