import React, {useEffect, useState} from 'react';
import './App.css';
import Table from "./componentes/Table/Table";
import TablePagination from "./componentes/TablePagination/TablePagination";
const pokedex = require('./pokedex.json');
const pokemon = pokedex.pokemon;

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const columnNames = ["num", "name", "height", "weight"];

  useEffect(() => {

    setPokemonList(pokemon);
    setMaxPage(Math.ceil(pokemon.length/pageSize));

  }, []);

  const paginate = (array, pageSize, pageNumber) =>{
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize );
  };

  const changePageSize = (newSize) => {
    setPageSize(newSize);
  };

  const changePageNumber = (newNumber) => {
    setPageNumber(newNumber);
  };




  return (
    <div className="App">
      <Table items={paginate(pokemonList, pageSize, pageNumber)} columnNames={columnNames}/>
      <TablePagination
        pageSize={pageSize}
        pageNumber={pageNumber}
        maxPage={maxPage}
        onChangeSize={changePageSize}
        onChangePage={changePageNumber}
      />
    </div>
  );
}

export default App;
