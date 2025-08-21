import { useEffect, useState } from 'react';
import Modale from '../components/ui/Modale';
import SkillsProgressBar from '../components/ui/SkillsProgressBar';

function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log('Erreur API GitHub :', err));
  }, []);

  return (
    <main className="">
      {/* Hero */}
      <section
        className="bg-[url('/assets/img/hero-bg.jpg')] bg-cover bg-center h-screen 
        flex flex-col justify-center text-center text-white"
      >
        <div
          className="absolute inset-0 bg-gray-600/50"
          aria-hidden="true"
        ></div>

        <div className="flex flex-col gap-6 p-6 mt-12 z-10">
          <h1 className="text-5xl leading-16">Bonjour, je suis John Doe</h1>
          <h2 className="text-4xl">Développeur web full stack</h2>

          {userData ? (
            <Modale userData={userData} />
          ) : (
            <p role="status">Chargement des données GitHub...</p>
          )}
        </div>
      </section>

      <div className="bg-gray-100 py-12 px-3">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-2xl">
          {/* About */}
          <section className="p-6">
            <h2 className="text-2xl pb-4 border-b-4 border-blue-600">
              A propos
            </h2>
            <div className="flex flex-col gap-4">
              <img
                src="/assets/img/john-doe-about.jpg"
                alt="Image de John Doe"
                className="mt-12"
                loading="lazy"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus conselectur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat? Natus, neque
                at?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus conselectur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat? Natus, neque
                at?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus conselectur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat? Natus, neque
                at?
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="p-6">
            <h2 className="text-2xl pb-4 border-b-4 border-blue-600">
              Mes compétences
            </h2>
            <div className="flex flex-col gap-4 mt-12">
              <SkillsProgressBar label="HTML5" value={90} color="bg-red-700" />
              <SkillsProgressBar label="CSS3" value={80} color="bg-cyan-400" />
              <SkillsProgressBar
                label="JavaScript"
                value={70}
                color="bg-yellow-400"
              />
              <SkillsProgressBar label="PHP" value={60} color="bg-green-700" />
              <SkillsProgressBar label="React" value={50} color="bg-blue-600" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;
