import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const SearchForm = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  // Debounce function to handle search
  const debouncedSearch = debounce((query) => {
    if (query.trim() === '') {
      return; // No se realiza búsqueda si el input está vacío
    }
    onSearch(query);
  }, 2000); // 2000ms = 2 segundos

  // useEffect para manejar la búsqueda con debounce cada vez que cambie el input
  useEffect(() => {
    debouncedSearch(inputValue);

    // Cleanup para evitar múltiples llamadas en caso de desmontaje
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
      onSearch(inputValue); // Búsqueda manual al hacer clic en el botón
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
