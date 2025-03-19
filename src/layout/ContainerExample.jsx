const ContainerExample = () => {
    return (
      <div>
        <div className="container-sm bg-primary text-white p-3 mb-3">
          Ini `.container-sm` (Mulai fixed di `sm`)
        </div>
  
        <div className="container-md bg-success text-white p-3 mb-3">
          Ini `.container-md` (Mulai fixed di `md`)
        </div>
  
        <div className="container-lg bg-danger text-white p-3 mb-3">
          Ini `.container-lg` (Mulai fixed di `lg`)
        </div>
  
        <div className="container-fluid bg-dark text-white p-3">
          Ini `.container-fluid` (Selalu full-width)
        </div>
      </div>
    );
  };
  
  export default ContainerExample;