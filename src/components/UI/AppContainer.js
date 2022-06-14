import styled from 'styled-components';
import img from '../../assets/images/bg_image.jpg';

const AppContainer = styled.div`
background-image: linear-gradient( to top right, rgba(11, 10, 10, 0.38), rgba(11, 10, 10, 0.19)), url(${img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
width: 100vw;

`

export default AppContainer;
