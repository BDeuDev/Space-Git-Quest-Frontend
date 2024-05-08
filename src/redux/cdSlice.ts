// commandSlice.ts (o donde sea que tengas tu slice de Redux)

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommandState {
    cd: string;
    active:boolean;
    // Otros estados de comandos aquí si es necesario
}

const initialState: CommandState = {
    cd: '',
    active:false // Inicializa el estado de "cd" como una cadena vacía
    // Otros estados de comandos inicializados aquí si es necesario
};

const cdSlice = createSlice({
    name: 'cd',
    initialState,
    reducers: {
        cd: (state, action: PayloadAction<{ text: string ,value:boolean}>) => {
            state.active = action.payload.value
            state.cd = action.payload.text; // Actualiza el estado de "cd" con el valor proporcionado
        }
        // Otros reducers para otros comandos aquí si es necesario
    },
});

export const { cd } = cdSlice.actions;

export const selectCdValue = (state: any) => state.cd.cd; // Selector para obtener el valor de "cd" desde el estado de Redux

export default cdSlice.reducer;