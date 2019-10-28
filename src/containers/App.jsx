import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Lists from '../components/Lists';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #e6e6eb;
    }    
`;

const App = () => {
    return (
        <div>
            <GlobalStyle/>            
            <Lists />
        </div>
    );
}

export default App;