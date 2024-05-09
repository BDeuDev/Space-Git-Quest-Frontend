import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cd } from '../../../redux/cdSlice';
import { planets } from '../../../gateways/planets';
import { ls } from '../../../redux/lsSlice';
import { init } from '../../../redux/initSlice';
import { status } from '../../../redux/statusSlice';

interface OutputLine {
    type: 'command' | 'output' | 'error';
    text: string;
}

const Terminal: React.FC = () => {
    //@ts-ignore
    const cds = useSelector((state) => state.cd);
    //@ts-ignore
    const ini = useSelector((state) => state.init);
    //@ts-ignore
    const stat = useSelector((state) => state.status);
    const [current, setCurrent] = useState('');
    const [output, setOutput] = useState<OutputLine[]>([]);
    const [input, setInput] = useState<string>('');
    const [command, setCommand] = useState<string>('');
    const consoleRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const commands: { [key: string]: (arg: string) => string } = {
        echo: (arg: string) => arg,
        greet: () => 'Hello, User!',
        clear: () => '',
        help: () => `Available commands: ${command}`,
        //@ts-ignore
        ls: () => {
            dispatch(init({ value: false }));
            dispatch(cd({ text: '', value: false }));
            dispatch(ls({ value: true }));
            return "<== Planetas Disponibles";
        },
        //@ts-ignore
        cd: (arg: string) => {
            dispatch(init({ value: false }));
            dispatch(ls({ value: false }));
            if (arg) {
                if (planets.includes(arg)) {
                    dispatch(cd({ text: arg, value: true }));
                    return arg
                } else {
                    dispatch(cd({ text: arg, value: false }));
                }
            } else {
                dispatch(cd({ text: arg, value: false }));
            }
        },
        "git init": () => {
            dispatch(cd({ text: cds.cd, value: false }));
            dispatch(ls({ value: false }));
            setCurrent(cds.cd);
            if (current === cds.cd && cds.cd) {
                return `Actualmente ya te encuentras en ${current}`;
            } else {
                if (cds.cd) {
                    dispatch(init({ text: cds.cd, value: true }));
                    dispatch(status({ text: cds.cd, value: false }));
                    return `Viajando a ${cds.cd}`;
                } else {
                    return 'Seleccione un planeta primero [cd nombre]';
                }
            }

        },
        "git status": () => {
            dispatch(ls({ value: false }));
            dispatch(init({ text: cds.cd, value: false }));
            dispatch(cd({ text: cds.cd, value: false }));
            dispatch(status({ text: cds.cd, value: true }));
            return `Actualmente te encuentras en ${stat.status}`;
        },
        "git add": () => "git add func",
        "git push": () => "Inicializando",
    };

    useEffect(() => {
        setCommand(Object.keys(commands).join(', '))
        if (consoleRef.current) {
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
        }
    })

    const handleCommand = (command: string): void => {
        let param: string;
        if (command[0].startsWith('g')) {
            param = '|';
        } else {
            param = ' ';
        }
        const [cmd, ...args] = command.split(param); 
        if (commands[cmd]) {
            const result = commands[cmd](args.join(param)); 
            setOutput((prevOutput) => [
                ...prevOutput,
                { type: 'command', text: `$ ${command}` },
                { type: 'output', text: result },
            ]);
        } else {
            setOutput((prevOutput) => [
                ...prevOutput,
                { type: 'error', text: `Command not found: ${cmd}` },
            ]);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (input.trim() === 'clear') {
            setOutput([]); 
        } else {
            handleCommand(input);
        }
        setInput('');
    };

    return (

        <div className='fixed bottom-[1%] left-[60%] font-orbitron p-2 bg-slate-950 right-[3%] z-50 shadow-2xl' >
            <div className='absolute bottom-0 left-0 w-full h-auto min-h-32 max-h-32 overflow-y-scroll mb-10 p-4 bg-slate-950 text-white' ref={consoleRef}>
                {output.map((line, index) => (
                    <div key={index} className={`${line.type}fixed bottom-[50%] text-green-800 font-semibold text-lg`}>
                        {line.text}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className='flex flex-row items-center justify-center'>
                <span className='text-yellow-400 block text-center justify-center'>$-</span>
                <input className='w-full  bg-slate-950 outline-none text-yellow-400'
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    autoFocus
                />
            </form>
        </div>
    );
};

export default Terminal;
