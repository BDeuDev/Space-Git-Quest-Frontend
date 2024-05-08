// commandSlice.ts (o donde sea que tengas tu slice de Redux)

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommandState {
    status?: string;
    called:boolean;
    // Otros estados de comandos aquí si es necesario
}

const initialState: CommandState = {
    status: '',
    called:false // Inicializa el estado de "cd" como una cadena vacía
    // Otros estados de comandos inicializados aquí si es necesario
};

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        status: (state, action: PayloadAction<{ text?: string ,value:boolean}>) => {
            state.called = action.payload.value
            state.status = action.payload.text; // Actualiza el estado de "cd" con el valor proporcionado
        }
        // Otros reducers para otros comandos aquí si es necesario
    },
});

export const { status } = statusSlice.actions;

export const selectStatusValue = (state: any) => state.status.status; // Selector para obtener el valor de "cd" desde el estado de Redux

export default statusSlice.reducer;