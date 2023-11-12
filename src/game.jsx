import React, { useState, useEffect } from 'react';

const Game = () => {
    const [hero, setHero] = useState({
        name: "Greendolf",
        hp: 100,
        mp: 100,
        attack: 10,
        defense: 10
    });

    const [enemy, setEnemy] = useState({
        name: "Reddolf",
        hp: 100,
        mp: 100,
        attack: 10,
        defense: 10
    });

    const vineWhip = () => {
        let dmg = 20;
        let mpCost = 10;
        setEnemy({ ...enemy, hp: enemy.hp - dmg });
        setHero({...hero, mp: hero.mp - mpCost})
    }
 
     const razorLeaf = () => {
       let dmg = 30;
       let mpCost = 20;
       setEnemy({ ...enemy, hp: enemy.hp - dmg });
       setHero({ ...hero, mp: hero.mp - mpCost });
     };
     
     const solarBeam = () => {
       let dmg = 40;
       let mpCost = 30;
       setEnemy({ ...enemy, hp: enemy.hp - dmg });
       setHero({ ...hero, mp: hero.mp - mpCost });
     };

      const ember = () => {
        let dmg = 20;
        let mpCost = 10;
        setEnemy({ ...hero, hp: hero.hp - dmg });
        setHero({ ...enemy, mp: enemy.mp - mpCost });
      };

      const flamethrower = () => {
        let dmg = 30;
        let mpCost = 20;
        setEnemy({ ...hero, hp: hero.hp - dmg });
        setHero({ ...enemy, mp: enemy.mp - mpCost });
      };

      const fireblast = () => {
        let dmg = 40;
        let mpCost = 30;
        setEnemy({ ...hero, hp: hero.hp - dmg });
        setHero({ ...enemy, mp: enemy.mp - mpCost });
      };
    return (
      <div>
        <h1>Fight!</h1>
        <div>
          <div>
            <h2>{hero.name}</h2>
            <p>HP: {hero.hp}</p>
            <p>MP: {hero.mp}</p>
            <button onClick={vineWhip}>Vine Whip</button>
            <button onClick={razorLeaf}>Razor Leaf</button>
            <button onClick={solarBeam}>Solar Beam</button>
          </div>
          <div>
            <h2>{enemy.name}</h2>
            <p>HP: {enemy.hp}</p>
            <p>MP: {enemy.mp}</p>
            {}
          </div>
        </div>
      </div>
    );
}