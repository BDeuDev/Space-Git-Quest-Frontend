// commandSlice.ts (o donde sea que tengas tu slice de Redux)

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommandState {
    call:boolean;
    // Otros estados de comandos aquí si es necesario
}

const initialState: CommandState = {
    call:false // Inicializa el estado de "cd" como una cadena vacía
    // Otros estados de comandos inicializados aquí si es necesario
};

const pushSlice = createSlice({
    name: 'push',
    initialState,
    reducers: {
        push: (state, action: PayloadAction<{value:boolean}>) => {
            state.call = action.payload.value
        }
        // Otros reducers para otros comandos aquí si es necesario
    },
});

export const { push } = pushSlice.actions;

export const selectPushValue = (state: any) => state.push.push; // Selector para obtener el valor de "cd" desde el estado de Redux

export default pushSlice.reducer;