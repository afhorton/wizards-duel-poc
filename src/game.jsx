import { useState, useEffect } from 'react';

const Game = () => {
    const [isPlayersTurn, setIsPlayersTurn] = useState(true);

    
    //This controls whether or not the game ends.
    //Game ends when either hero or enemy's hp reaches zero.
    const [heroAlive, setHeroAliveDiv] = useState(true);
    const [enemyAlive, setEnemyAlive] = useState(true);


// Hero and Enemy States
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

    // Hero Spells
    const vineWhip = () => {
        let dmg = 20;
        let mpCost = 10;
        setEnemy({ ...enemy, hp: enemy.hp - dmg });
        setHero({...hero, mp: hero.mp - mpCost})
        setIsPlayersTurn(false);
    }
 
     const razorLeaf = () => {
       let dmg = 30;
       let mpCost = 20;
       setEnemy({ ...enemy, hp: enemy.hp - dmg });
       setHero({ ...hero, mp: hero.mp - mpCost });
       setIsPlayersTurn(false);
     };
     
     const solarBeam = () => {
       let dmg = 40;
       let mpCost = 30;
       setEnemy({ ...enemy, hp: enemy.hp - dmg });
       setHero({ ...hero, mp: hero.mp - mpCost });
       setIsPlayersTurn(false);
     };

      const reManaHero = () => {
        let mpGain = 20;
        setHero({ ...hero, mp: hero.mp + mpGain });
        setIsPlayersTurn(false);
      };

       const reGenHero = () => {
         let mpCost = 20;
         let hpGain = 30;
         setHero({
           ...hero,
           mp: hero.mp - mpCost,
           hp: hero.hp + hpGain,
         });
         setIsPlayersTurn(false);
       };

       //Enemy Spells 
    const enemySpells = [
        
        function ember (){
        let dmg = 20;
        let mpCost = 10;
        setHero({ ...hero, hp: hero.hp - dmg });
        setEnemy({ ...enemy, mp: enemy.mp - mpCost });
      },

      function flamethrower () {
        let dmg = 30;
        let mpCost = 20;
        setHero({ ...hero, hp: hero.hp - dmg });
        setEnemy({ ...enemy, mp: enemy.mp - mpCost });
      },

      function fireblast () {
        let dmg = 40;
        let mpCost = 30;
        setHero({ ...hero, hp: hero.hp - dmg });
        setEnemy({ ...enemy, mp: enemy.mp - mpCost });
      },

      function punch () {
        let dmg = 10;
        let mpCost = 0;
        setHero({ ...hero, hp: hero.hp - dmg });
        setEnemy({ ...enemy, mp: enemy.mp - mpCost });
      },

      function reManaEnemy () {
        let mpGain = 20;
         setEnemy({ ...enemy, mp: enemy.mp + mpGain });
      },

    
         function reGenEnemy () {
           let mpCost = 20;
           let hpGain = 30;
           setEnemy({ ...enemy, mp: enemy.mp - mpCost, hp: enemy.hp + hpGain});
         }
        ];

    // useEffect() controlling how enemy attacks at random
    useEffect(
        () => {
            if (!isPlayersTurn) {
                const randomEnemyAttackIndex = Math.floor(Math.random() * enemySpells.length);
                enemySpells[randomEnemyAttackIndex]();
                setIsPlayersTurn(true);
            }
        }, [isPlayersTurn]);

    useEffect(() => {
             if (hero.hp <= 0) {
               setHeroAliveDiv(false)
             }
                if (enemy.hp <= 0) {
                setEnemyAlive(false);
                }
           }, [hero.hp, enemy.hp]);


    return (
      <div>
        <h1>Fight!</h1>
        <div>
         {heroAlive === true && <div id="heroDiv">
            <h2>{hero.name}</h2>
            <p>HP: {hero.hp}</p>
            <p>MP: {hero.mp}</p>
            <button onClick={vineWhip}>Vine Whip</button>
            <button onClick={razorLeaf}>Razor Leaf</button>
            <button onClick={solarBeam}>Solar Beam</button>
            <button onClick={reManaHero}>Re-Mana</button>
            <button onClick={reGenHero}>Re-Gen</button>
          </div> ||
          heroAlive === false &&
          <h2>Slain!</h2> 
          }
         { enemyAlive === true && <div id="enemyDiv">
            <h2>{enemy.name}</h2>
            <p>HP: {enemy.hp}</p>
            <p>MP: {enemy.mp}</p>
          </div> || enemyAlive === false && 
          <h2>Slain!</h2>
          }
        </div>
      </div>
    );
}

export default Game;