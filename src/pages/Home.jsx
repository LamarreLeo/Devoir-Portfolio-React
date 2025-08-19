import { useEffect, useState } from 'react';
import Modale from '../components/ui/Modale';

function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log('Erreur API GitHub :', err));
  }, []);

  return (
    <main className="mt-12">
      <div className="px-6 py-12 max-w-7xl mx-auto h-screen flex flex-col items-center justify-center">
        {userData ? (
          <Modale userData={userData} />
        ) : (
          <p>Chargement des données GitHub...</p>
        )}
      </div>
    </main>
  );
}

export default Home;
