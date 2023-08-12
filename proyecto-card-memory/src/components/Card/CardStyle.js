import styled from 'styled-components';

const StyleCard = styled.div`
.card {
  width: 100px;
  height: 150px;
  perspective: 1000px;
  cursor: pointer;
  margin: 10px;
}

.card__inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.card.flipped .card__inner {
  transform: rotateY(180deg);
}

.card__front,
.card__back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__front {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
}

.card__back {
  background-color: #ddd;
  transform: rotateY(180deg);
}


`;

export default StyleCard;