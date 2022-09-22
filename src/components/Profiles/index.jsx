const Profiles = ({ profiles }) => {
  return (
    <ul>
      {profiles.map((profile, index) => (
        <li key={index}>
          {profile.name} - {profile.email}
        </li>
      ))}
    </ul>
  );
};

export default Profiles;
