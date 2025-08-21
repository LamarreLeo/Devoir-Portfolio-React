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
      {userData ? (
        <Modale userData={userData} />
      ) : (
        <p>Chargement des données GitHub...</p>
      )}
    </main>
  );
}

export default Home;
