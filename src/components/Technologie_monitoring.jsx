import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {follow} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
                         index,
                         description,
                         image,
                     }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[300px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />
                </div>

                <div className='mt-5'>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>

                </div>
            </Tilt>
        </motion.div>
    );
};

const Technologie_monitoring = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>Veille Technologique</p>
                <h2 className={`${styles.sectionHeadText}`}>CGI</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 white-text text-[18px] leading-[30px]'
                >
                    Les images générées par ordinateur (CGI) sont une technologie spécifique
                    ou une application des graphiques informatiques utilisée pour créer ou améliorer
                    des images dans l'art, les médias imprimés, les simulateurs, les vidéos et les jeux
                    vidéo. Ces images peuvent être statiques (c'est-à-dire des images fixes) ou
                    dynamiques (c'est-à-dire des images animées). La CGI désigne à la fois les graphismes
                    informatiques en 2D et (plus fréquemment) les graphismes en 3D, ayant pour but de
                    concevoir des personnages, des mondes virtuels, des scènes ou des effets spéciaux
                    (dans les films, programmes télévisés, publicités, etc.). L'application de la CGI
                    pour créer ou améliorer des animations est appelée animation par ordinateur ou
                    animation CGI.
                </motion.p>
            </div>
            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 white-text text-[18px] leading-[30px]'
                >
                    Avant que la CGI ne devienne omniprésente dans le cinéma,
                    la réalité virtuelle, l'informatique personnelle et les jeux vidéo,
                    l'une des premières applications pratiques de la CGI était la formation
                    en aviation et militaire, notamment avec les simulateurs de vol.
                    Les systèmes visuels développés pour les simulateurs de vol ont également
                    été des précurseurs importants des graphismes informatiques en trois
                    dimensions et des systèmes d'images générées par ordinateur (CGI) actuels.
                    Cela s'explique par l'objectif des simulateurs de vol : reproduire au sol
                    le comportement d'un avion en vol. Une grande partie de cette reproduction
                    reposait sur une synthèse visuelle crédible imitant la réalité.
                    Le Link Digital Image Generator (DIG) de la Singer Company (Singer-Link)
                    était considéré comme l'un des premiers systèmes CGI de première
                    génération au monde. Il s'agissait d'un système en temps réel,
                    capable de 3D, fonctionnant de jour, au crépuscule ou de nuit,
                    utilisé pour les navettes de la NASA, les F-111, les Black Hawk et le B-52.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {follow.map((follow, index) => (
                    <ProjectCard key={`follow-${index}`} index={index} {...follow} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Technologie_monitoring, "Technology_monitoring");
