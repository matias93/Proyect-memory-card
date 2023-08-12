import styled from 'styled-components';

const StyleApp = styled.div`

body {
  background-color: #f5f5f5;
  font-family: 'Helvetica Neue', sans-serif;
}

.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}


.text-center {
  text-align: center;
}

.mt-4 {
  margin-top: 1rem;
}

p {
  margin: 0;
  font-size: 1.2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #0056b3;
}


`;

export default StyleApp;