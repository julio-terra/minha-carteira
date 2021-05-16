import React, { createContext, useState, useContext } from 'react';

interface IBarContext {
    oppen: boolean;
    oppens(): void;
    closes(): void;
}

const BarContext = createContext<IBarContext>({} as IBarContext);

const BarProvider: React.FC = ({ children }) => {
    
    const [oppen, setoppen] = useState<boolean>(() => {
        const isoppen = localStorage.getItem('@minha-carteira:oppen');

        return !!isoppen;
    });

    const oppens = () => {
        localStorage.setItem('@minha-carteira:oppen', 'true');
        setoppen(true);
    }

    const closes = () => {
        localStorage.removeItem('@minha-carteira:oppen');
        setoppen(false);
    }

    return (
        <BarContext.Provider value={{oppen, oppens, closes}}>
            {children}
        </BarContext.Provider>
    );
}

function useBar():IBarContext {
    const context = useContext(BarContext);

    return context;
}

export {BarProvider, useBar}