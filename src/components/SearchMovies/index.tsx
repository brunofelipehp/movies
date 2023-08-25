import { FormSearchMovies } from "./styles";
import { useFormSearch } from "../../hooks/useFormSearch";

export const SearchMovies = () => {
  const {search, handleSubmit, inputChange } = useFormSearch();

  return (
    <FormSearchMovies onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Busque um filme..."
        onChange={inputChange}
        value={search}
      />
    </FormSearchMovies>
  );
};
