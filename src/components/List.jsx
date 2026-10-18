function List({ list = [] }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Lista rowerów</h1>
          <table className="table table-striped table-hover mt-3">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nazwa</th>
                <th scope="col">Kolor</th>
                <th scope="col">Cena</th>
                <th scope="col">Rodzaj</th>
              </tr>
            </thead>
            <tbody>
              {list.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-3">
                    Brak rowerów na liście
                  </td>
                </tr>
              ) : (
                list.map((item, index) => (
                  <tr key={item.id || index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.color}</td>
                    <td>{item.price} zł</td>
                    <td>{item.model}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default List;
