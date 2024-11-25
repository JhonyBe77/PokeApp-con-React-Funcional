import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import '../../styles/components/_SearchForm.scss'; 

const SearchForm = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  // Debounce
  const debouncedSearch = debounce((query) => {
    if (query.trim() === '') {
      return; //si el input está vacío
    }
    onSearch(query);
  }, 2000); 

  // useEffect para manejar la búsqueda con debounce cada vez que cambie el input
  useEffect(() => {
    debouncedSearch(inputValue);

    // para evitar múltiples llamadas
    return () => {
      debouncedSearch.cancel();
    };
  }, [inputValue]);

  // Maneja los cambios en el input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Maneja el clic en el botón de búsqueda
  const handleSearchClick = () => {
    if (inputValue.trim() !== '') {
      onSearch(inputValue); // Búsqueda haciendo click con el botón
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Busca un Pokémon..."
        value={inputValue}
        onChange={handleInputChange}
        style={{
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          flex: '1',
        }}
      />
      <button
        onClick={handleSearchClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchForm;
