import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFormSearch = () => {
    const [search, setSearch] = useState<string>("");

    const navigate = useNavigate()

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!search) return
    
        navigate(`/search?q=${search}`)
    
        setSearch("")
        
      }


      const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setSearch(event.target.value);
      }

      return {search, handleSubmit ,inputChange}
}