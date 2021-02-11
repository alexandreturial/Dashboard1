import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    
    grid-template-columns: auto; 
    grid-template-rows: auto;  

    grid-template-areas:
    'CT';
    min-width: 315px;

    @media(min-width: 700px){
        
        grid-template-columns: 1fr 6fr; 
        grid-template-rows: auto;  

        grid-template-areas:
        'AS CT';
    }
`;


