import React from 'react';
import StyleCard from './CardStyle';

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const Card = ({ imageUrl, altText, onClick, flipped }) => {
    return (
        <StyleCard>
            <div className="col-md-3 col-sm-6 col-12 mb-4">
                <div className={`card ${flipped ? 'flipped' : ''}`} onClick={onClick}>
                    <div className="card__inner">
                        <div className="card__front">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Card Front"
                                className="card-img-top"
                            />
                        </div>
                        <div className="card_back">
                            <img src={imageUrl} alt={altText} className="card-img-top" />
                        </div>
                    </div>
                </div>
            </div>
        </StyleCard>
    );
};

export default Card;
