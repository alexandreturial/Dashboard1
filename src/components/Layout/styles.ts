import styled from 'styled-components';

export const Container = styled.div`
    display: grid;

    grid-template-columns: auto; 
    grid-template-rows: auto;  

    grid-template-areas:
    'CT';

    height: 100vh;
    width: 100vw;
    min-width: 315px;

    @media(min-width: 700px){
    
        grid-template-columns: 250px auto; 
        grid-template-rows: auto;  

        grid-template-areas:
        'AS CT';
    }
`;


