import { useState } from 'react';

function Modale({ userData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Oppen Modale Button */}
      <button onClick={() => setIsOpen(true)}>En savoir plus</button>

      {/* Modale */}
      {isOpen && (
        <div>
          <div>
            <h2>Mon profil GitHub</h2>
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>

          <div>
            <img src={userData.avatar_url} alt="Avatar" />
            <div>{userData.name}</div>
            <div>{userData.location}</div>
            <div>{userData.bio}</div>
            <div>{userData.public_repos}</div>
            <div>{userData.followers}</div>
            <div>{userData.following}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modale;
