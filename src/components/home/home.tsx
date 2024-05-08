import { useRef, useState, useEffect, RefObject } from 'react';

import { icons, texts } from "../../gateways/icons";
import SectionLink from "../header/sectionLink";
import useIntersection from '../../hooks/useIntersection';
import { highlightedPoints } from "../../gateways/highLightedPoints";
import { githubFacts } from '../../gateways/githubFacts';
import Section1 from './section1';
import Section2 from './section2';
import Section0 from './section0';


const Home = () => {
    const mainRef = useRef<HTMLDivElement>(null);

    const [currentSection, setCurrentSection] = useState<number>(0);

    const [isIntersecting1, ref1] = useIntersection({
        threshold: 0.6
    });
    const [isIntersecting2, ref2] = useIntersection({
        threshold: 0.6
    });
    const [isIntersecting3, ref3] = useIntersection({
        threshold: 0.6
    });
    const sections = [
        ref1 as RefObject<HTMLDivElement>,
        ref2 as RefObject<HTMLDivElement>,
        ref3 as RefObject<HTMLDivElement>
    ];

    const intersectings = [
        isIntersecting1,
        isIntersecting2,
        isIntersecting3
    ];

    const scrollToSection = (index: number) => {
        if (sections[index].current) {
            sections[index].current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        intersectings.map((value, index) => {
            if (value) {
                setCurrentSection(index);
            }
        });
    });

    return (
        <main ref={mainRef} className="h-screen w-full bg-[#0d1117] font-orbitron">
            <header className='fixed glassmorphism-xl-header h-[65px] top-0 w-full border-b-[2px] border-[#30363d] flex flex-row items-center justify-end z-30'>
                <nav className="flex flex-row items-end justify-end mr-1">
                    {icons.map((icono, index) => (
                        <SectionLink key={index + 1} icon={icono} onclick={() => scrollToSection(index)} text={texts[index]} active={currentSection === index} />
                    ))}
                </nav>
            </header>
            <section ref={sections[0]} className=" h-full w-full flex flex-col justify-center items-center">
                <Section0/>
            </section>
            <section ref={sections[1]} className="h-full w-full flex flex-col justify-center items-center">
                <Section1 text={highlightedPoints} />
            </section>
            <section ref={sections[2]} className="h-full w-full flex flex-col justify-center items-center">
                <Section2 text={githubFacts}/>
            </section>
        </main>
    );
}

export default Home;
