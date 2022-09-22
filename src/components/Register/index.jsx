import { useState } from "react";
// profiles = []
// setProfiles()

// [joao, lucas, gabriel].filter(name => name !== lucas)
// [joao, gabriel];

const Register = ({ setProfiles }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(name, email);
    // const n = [1,2,3]
    // [...n, 5, 6] -> [1,2,3,5,6]

    // setProfiles([...profiles, { name, email }]);
    setProfiles((previousProfiles) => 
        [...previousProfiles, { name, email }]
    );
    setName('');
    setEmail('');


  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};

export default Register;
