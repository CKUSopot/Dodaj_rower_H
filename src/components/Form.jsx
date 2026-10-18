import { useState } from "react";

function Form({ add }) {
  const [rower, setRower] = useState({
    name: "",
    price: 0,
    color: "",
    model: "",
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setRower((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof add === "function") {
      add(rower);
    }
    // Скидання форми до початкового стану
    setRower({
      name: "",
      price: 0,
      color: "",
      model: "",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Dodaj rower</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-field mb-3">
              <label htmlFor="nazwaRoweru" className="form-label">
                Nazwa roweru
              </label>
              <input
                type="text"
                name="name"
                id="nazwaRoweru"
                value={rower.name}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field mb-3">
              <label htmlFor="modelRoweru" className="form-label">
                Model roweru
              </label>
              <input
                type="text"
                name="model"
                id="modelRoweru"
                value={rower.model}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field mb-3">
              <label htmlFor="kolorRoweru" className="form-label">
                Kolor roweru
              </label>
              <input
                type="text"
                name="color"
                id="kolorRoweru"
                value={rower.color}
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="form-field mb-3">
              <label htmlFor="cenaRoweru" className="form-label">
                Cena roweru
              </label>
              <input
                type="number"
                name="price"
                id="cenaRoweru"
                value={rower.price}
                className="form-control"
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className="form-field">
              <button type="submit" className="btn btn-primary mt-2 mb-3">
                Dodaj rower
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
