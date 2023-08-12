import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import StyleGame from './GameStyle';
import getAnimalCards from '../../enpoint/enpoint';

const GameBoard = () => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [errorCount, setErrorCount] = useState(0);
    const [successCount, setSuccessCount] = useState(0);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const inputName = window.localStorage.getItem('player');
        if (!inputName) {
            const newPlayer = window.prompt('Ingrese Nombre Del Jugador:');
            if (newPlayer) {
                setUsername(newPlayer)
                window.localStorage.setItem('player', newPlayer);
            }
        } else {
            setUsername(inputName);
        }

        getAnimalCards().then(animalImages => {
            const duplicateImages = [...animalImages, ...animalImages];
            duplicateImages.sort(() => Math.random() - 0.5);
            setCards(duplicateImages.map(imageUrl => ({ imageUrl, flipped: false })));
        });
    }, []);



    /**
     * 
     * @param {*} index 
     */
    const handleCardClick = (index) => {
        if (flippedCards.length < 2) {
            const newCards = [...cards];
            newCards[index].flipped = true;
            setCards(newCards);
            setFlippedCards([...flippedCards, { index, imageUrl: newCards[index].imageUrl }]);

            if (flippedCards.length === 1) {
                if (flippedCards[0].imageUrl === newCards[index].imageUrl) {
                    setMatchedCards([...matchedCards, flippedCards[0].imageUrl]);
                    setSuccessCount(successCount + 1);
                } else {
                    setTimeout(() => {
                        const resetCards = [...cards];
                        resetCards[index].flipped = false;
                        resetCards[flippedCards[0].index].flipped = false;
                        setCards(resetCards);
                        setErrorCount(errorCount + 1);
                    }, 1000);
                }
                setFlippedCards([]);
            }
        }
    };

    return (
        <StyleGame>
            <div className="game__board">
                <div className="game__header bg-light p-4">
                    <h3 className="text-center mb-4">Memory Game</h3>
                    <div className="score__points">
                        Player: <span className="text-primary">{username}</span> | Errores: <span className="text-danger">{errorCount}</span> | Aciertos: <span className="text-success">{successCount}</span>
                    </div>
                </div>
                <div className="cards">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            imageUrl={card.imageUrl}
                            altText={`Animal ${index + 1}`}
                            onClick={() => handleCardClick(index)}
                            flipped={card.flipped || matchedCards.includes(card.imageUrl)}
                        />
                    ))}
                </div>
            </div>
        </StyleGame>

    );
};

export default GameBoard;
