import { useEffect, useState } from "react"
import "./FilterForm.css"
import { Form } from "react-router-dom"
import { getAllTypes } from "../../../../services/getAllTypes";

const FilterForm = ({ nameInitial, typeInitial  }) => {
    const [types, setTypes] = useState([]);
    const [pokemonName, setPokemonName] = useState(nameInitial);
    const [typeValue, setTypeValue] = useState(typeInitial)

    const handleChange = (e) => {
        const newValue = e.target.value;
        setPokemonName(newValue);
    };

    const handleTypeChange = (e) => {
        const newTypeValue= e.target.value;
        setTypeValue(newTypeValue);
    }

    useEffect(() => {
        const loadTypes = async () => {
            const typesList = await getAllTypes();
            setTypes(typesList);
        };

        loadTypes();
    },[]);

    useEffect(() => {
        setPokemonName(nameInitial);
    }, [nameInitial]);

    useEffect(() => {
        setTypeValue(typeInitial);
    }, [typeInitial]);

  return (
    <Form className="form">
        <div className="form-input_container">
            <input 
            value={pokemonName}
            onChange={handleChange}
            type="text"
            placeholder="Search by name"
            name="pokemonName"
            className="form_input-name"
            />

            <select 
            className="form_input-type"
            value={typeValue}
            onChange={handleTypeChange}
            name="pokemonType" >
                <option value={""}>All</option>
                {types.map((type) => (
                    <option 
                    key={type.id}
                    value={type.id}
                    >
                        {type.name.charAt([0]).toUpperCase() + type.name.replace(type.name[0], "")}
                    </option>
                ))}
            </select>
            <button className="form_btn">Search</button>
        </div>
        
    </Form>
  )
}

export default FilterForm