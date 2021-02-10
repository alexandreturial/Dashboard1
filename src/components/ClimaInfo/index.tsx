import React from 'react';


import {
    FaTemperatureHigh
} from 'react-icons/fa';


import {
    RiArrowUpSLine,
    RiArrowDownSLine
} from 'react-icons/ri';

import { Container } from './styles';

const ClimaInfo: React.FC = () => {
    return (
        <Container>
            <div>
                <header>
                    <FaTemperatureHigh />
                    temperatura
                </header>
                <main>
                    25°C
                </main>
            </div>
            <aside>
                <button style={{ background: "#4B13B6", padding: "5px" }}><RiArrowUpSLine size={25} color="#FFF" /></button>
                <button style={{ background: "#D4CEE5", padding: "5px" }}><RiArrowDownSLine size={25} /></button>
            </aside>
        </Container>
    );
}

export default ClimaInfo;