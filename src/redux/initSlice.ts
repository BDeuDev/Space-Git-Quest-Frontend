// commandSlice.ts (o donde sea que tengas tu slice de Redux)

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommandState {
    init?: string;
    called:boolean;
    // Otros estados de comandos aquí si es necesario
}

const initialState: CommandState = {
    init: '',
    called:false // Inicializa el estado de "cd" como una cadena vacía
    // Otros estados de comandos inicializados aquí si es necesario
};

const initSlice = createSlice({
    name: 'init',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<{ text?: string ,value:boolean}>) => {
            state.called = action.payload.value
            state.init = action.payload.text; // Actualiza el estado de "cd" con el valor proporcionado
        }
        // Otros reducers para otros comandos aquí si es necesario
    },
});

export const { init } = initSlice.actions;

export const selectInitValue = (state: any) => state.init.init; // Selector para obtener el valor de "cd" desde el estado de Redux

export default initSlice.reducer;