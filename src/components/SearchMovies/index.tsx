import { FormSearchMovies } from "./styles";
import { useFormSearch } from "../../hooks/useFormSearch";

export const SearchMovies = () => {
  const { handleSubmit, inputChange } = useFormSearch();

  return (
    <FormSearchMovies onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Busque um filme..."
        onChange={inputChange}
      />
    </FormSearchMovies>
  );
};
