import { useState } from 'react';
import {
  UserRound,
  UsersRound,
  MapPin,
  MessageSquare,
  Box,
} from 'lucide-react';
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

      {/* Modale */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 text-white flex justify-center items-center p-6 z-50">
          <article
            className="bg-gray-800 flex flex-col max-w-3xl max-h-[80vh] overflow-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="p-4 flex flex-row justify-between border-b border-gray-600">
              <h2 id="modal-title">Mon profil GitHub</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 cursor-pointer hover:text-white"
                aria-label="Fermer la modale"
              >
                X
              </button>
            </div>

            {/* Body */}
            <div className="px-6 pt-6 grid grid-cols-1 md:grid-cols-2">
              <img
                src={userData.avatar_url}
                alt={`Avatar GitHub de ${userData.name}`}
                className="object-cover"
              />

              <div>
                <div className="border-b border-gray-600 p-2 flex flex-row">
                  <UserRound className="mr-2" />
                  <a
                    href="https://github.com/github-john-doe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-500"
                  >
                    {userData.name}
                  </a>
                </div>

                <div className="border-b border-gray-600 p-2 flex flex-row">
                  <MapPin className="mr-2" />
                  {userData.location}
                </div>

                <div className="border-b border-gray-600 p-2 flex flex-row">
                  <MessageSquare className="mr-2" />
                  {userData.bio}
                </div>

                <div className="border-b border-gray-600 p-2 flex flex-row">
                  <Box className="mr-2" />
                  <span>Repositories : {userData.public_repos}</span>
                </div>

                <div className="border-b border-gray-600 p-2 flex flex-row">
                  <UsersRound className="mr-2" />
                  <span>Followers : {userData.followers}</span>
                </div>

                <div className="p-2 flex flex-row mb-6">
                  <UsersRound className="mr-2" />
                  <span>Following : {userData.following}</span>
                </div>
              </div>
            </div>

            {/* Footer */}
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
