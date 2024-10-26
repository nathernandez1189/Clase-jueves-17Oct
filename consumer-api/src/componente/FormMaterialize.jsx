import React, { useEffect } from 'react';
import M from 'materialize-css';

function FormMaterialize() {
  useEffect(() => {
    const elems = document.querySelectorAll('#autocomplete-input');
    const instances = M.Autocomplete.init(elems, {
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250',
      },
    });
    console.log(instances); // Verifica si se inicializa
  }, []);

  return (
    <div className="row">
      <div className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">textsms</i>
            <input type="text" id="autocomplete-input" className="autocomplete" />
            <label htmlFor="autocomplete-input">Autocomplete</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormMaterialize;
