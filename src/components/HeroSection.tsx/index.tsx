import { useEffect, useState } from 'react';
import { phrasesArr, IPharsesArr } from '../../utils/utilsData';

export const HeroSection = () => {
  const pageMenuList = [
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#' },
    { name: 'Showcase', link: '#' },
    { name: 'Services', link: '#' },
    { name: 'Contact', link: '#' }
  ];

  const [randomInx, setRandomInx] = useState<number>(1);
  const [phrase, setPhrase] = useState<IPharsesArr>(phrasesArr[randomInx]);

  const phraseUpdater = () => {
    setTimeout(() => {
      setRandomInx(Math.floor(Math.random() * phrasesArr.length));
    }, 6000);
  };

  useEffect(() => {
    setPhrase(phrasesArr[randomInx]);
    phraseUpdater();
  }, [randomInx]);

  return (
    <div className="bg-slate-200 flex items-center justify-evenly mx-auto w-10/12 py-36">
      <div className="flex flex-col justify-center items-start gap-4 w-4/12 h-80">
        <div className="">
          <p className="text-3xl">Hi I'm</p>
          <h1 className="text-5xl">Krysthopher Ruiz</h1>
        </div>
        <div className="">
          <p className="text-3xl">Building things for fun and love</p>
          <h1 className="text-2xl">Software Developer</h1>
        </div>
        <li className="list-none flex justify-between w-10/12">
          {pageMenuList.map((elem, inx) => {
            if (pageMenuList.length - 1 > inx) {
              return (
                <>
                  <li key={elem.name}>
                    <a href={elem.link} rel="noopener noreferrer">
                      {elem.name}
                    </a>
                  </li>
                  <div>-</div>
                </>
              );
            } else {
              return (
                <li key={elem.name}>
                  <a href={elem.link} rel="noopener noreferrer">
                    {elem.name}
                  </a>
                </li>
              );
            }
          })}
        </li>
      </div>
      <div className="w-3/12">
        <img
          src="https://res.cloudinary.com/dhkjclfht/image/upload/v1731644512/kj4b5xmcbncfmgjo2tgi.jpg"
          alt="Krysthopher-Ruiz-Portrait"
          className="w-80 h-80 rounded-full object-cover"
        />
      </div>
      <div className="w-3/12">
        <h1 className="font-medium text-xl italic">{phrase.phrase}</h1>
        <p className="text-right italic">{phrase.author}</p>
      </div>
    </div>
  );
};
