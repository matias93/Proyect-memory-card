import styled from 'styled-components';

const StyleGame = styled.div`

.game__board {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
}

.game__header {
  text-align: center;
  margin-bottom: 20px;
  border-radius:5px;
}

.score__points {
  margin-top: 20px;
  font-size: 20px;
  color: #6c757d;
  cursor: pointer;
  transition: color 0.3s;
}

.congratulations__message {
  margin-top: 20px;
  text-align: center;
  font-size: 24px;
  color: #198754;
}

.score__points:hover {
  color: #28a745;
}

.text-danger {
  color: #dc3545 !important;
}

.text-success {
  color: #198754 !important;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


`;

export default StyleGame ;