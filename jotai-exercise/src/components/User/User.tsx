import { useAtom } from "jotai"
import { firstnameAtom, lastnameAtom, ageAtom, hobbiesAtom } from "../../atoms/user.atom"
import type { FormEvent } from "react"
import { useState } from "react"

const User = () => {
    const [firstName, setFirstName] = useAtom(firstnameAtom)
    const [lastName, setLastName] = useAtom(lastnameAtom)
    const [age, setAge] = useAtom(ageAtom)
    const [hobbies, setHobbies] = useAtom(hobbiesAtom)

    const [firstNameInput, setFirstNameInput] = useState("")
    const [lastNameInput, setLastNameInput] = useState("")
    const [ageInput, setAgeInput] = useState<number>(18)
    const [selectedHobbies, setSelectedHobbies] = useState<string[]>([])

    const Hobbies = ["Books", "Sports", "Movies", "Games", "Cooking"];
    
    const handleHobbyChange = (hobby: string) => {
        setSelectedHobbies((prev) =>
          prev.includes(hobby) ? prev.filter((h) => h !== hobby) : [...prev, hobby]
        );
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setFirstName(firstNameInput);
        setLastName(lastNameInput);
        setAge(ageInput);
        setHobbies(selectedHobbies);

        setFirstNameInput("");
        setLastNameInput("");
        setAgeInput(18);
        setSelectedHobbies([]);
    };

    return (
    <div>
        <div>
            <h2>User Information:</h2>
            <h3><span>Name: {firstName} {lastName}</span></h3>
            <h3>Age: {age}</h3>
            <h3>Hobbies: {hobbies.join(", ")}</h3>
        </div>

        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    value={firstNameInput} 
                    onChange={e => setFirstNameInput(e.target.value)} 
                    placeholder="Enter your firstname"
                />
                <input 
                    type="text" 
                    value={lastNameInput} 
                    onChange={e => setLastNameInput(e.target.value)} 
                    placeholder="Enter your lastname"
                />
                <input 
                    type="number" 
                    value={ageInput} 
                    onChange={e => setAgeInput(Number(e.target.value))} 
                    placeholder="18"
                />
            </div>
            <div>
                {Hobbies.map((hobby) => (
                    <label key={hobby}>
                        <input
                            type="checkbox"
                            checked={selectedHobbies.includes(hobby)}
                            onChange={() => handleHobbyChange(hobby)}
                        />
                        {hobby}
                    </label>
                ))}
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default User