import { useState } from "react";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        console.log(name, email);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="nome"
                onChange={event => setName(event.target.value)} 
            />
            <input 
                type="email" 
                placeholder="email" 
                onChange={event => setEmail(event.target.value)} 
            />

            <button type="submit">Cadastrar</button>
        </form>
    )
}

export default Register;