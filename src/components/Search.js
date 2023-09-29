import "../styles/layout/Search.scss";

const Search = ({ searchText, handleSearchText }) => {
  const handleSearchInput = (ev) => {
    handleSearchText(ev.target.value);
  };
  return (
    <form className="search">
      <input
        className="search__input"
        type="search"
        name="search"
        id="search"
        placeholder="Buscar en Twitter"
        onChange={handleSearchInput}
      />
    </form>
  );
};

export default Search;
