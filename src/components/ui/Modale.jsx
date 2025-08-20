import { useState } from 'react';

function Modale({ userData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Oppen Modale Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
      >
        En savoir plus
      </button>

      {/* A FAIRE :  */}

      {/* Modale */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 text-white flex justify-center items-center p-6 z-50">
          <article className="bg-gray-800 flex flex-col max-w-3xl max-h-[90vh] overflow-auto">
            <div className="p-4 flex flex-row justify-between border-b border-gray-600">
              <h2>Mon profil GitHub</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 cursor-pointer hover:text-white"
              >
                X
              </button>
            </div>

            <div className="px-6 pt-6 flex flex-col lg:flex-row">
              <img
                src={userData.avatar_url}
                alt={`Avatar GitHub de ${userData.name}`}
                className="object-cover"
              />
              <div>
                <div className="border-b border-gray-600 p-2 flex flex-row">
                  {userData.name}
                </div>
                <div className="border-b border-gray-600 p-2 flex flex-row">
                  {userData.location}
                </div>
                <div className="border-b border-gray-600 p-2 flex flex-row">
                  {userData.bio}
                </div>
                <div className="border-b border-gray-600 p-2 flex flex-row">
                  <span>Repositories : {userData.public_repos}</span>
                </div>
                <div className="border-b border-gray-600 p-2 flex flex-row">
                  <span>Followers : {userData.followers}</span>
                </div>
                <div className="p-2 flex flex-row mb-6">
                  <span>Following : {userData.following}</span>
                </div>
              </div>
            </div>

            <footer className="px-6 py-4 flex flex-row justify-end border-t border-gray-600">
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-lg"
              >
                Fermer
              </button>
            </footer>
          </article>
        </div>
      )}
    </div>
  );
}

export default Modale;
