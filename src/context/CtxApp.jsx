import React, { useState } from "react";
import { createContext } from "react";

const Context = createContext();

export default function CtxApp({ children }) {
    const [endereco, setEndereco] = useState("Avenida Paulista")

    return (
        <Context.Provider
            value={{ endereco, setEndereco }}
        >
            {children}
        </Context.Provider>
    );
}

export { Context, CtxApp };
