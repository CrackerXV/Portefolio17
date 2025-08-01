import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { follow } from "../constants";
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
             className='bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] h-[420px] flex flex-col justify-between'
            >
                <div className='relative w-full h-[200px] sm:h-[300px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />
                </div>

                <div className='mt-5'>
                    <p className='mt-2 text-secondary text-[14px] sm:text-[16px] line-clamp-3'>{description}</p>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Technologie_monitoring = () => {
    return (
        <div className="px-4 sm:px-0">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>Veille Technologique</p>
                <h2 className={`${styles.sectionHeadText}`}>CGI</h2>
            </motion.div>

            <div className='w-full flex flex-col'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 white-text text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px]'
                >
                    Les images générées par ordinateur (CGI) sont une technologie spécifique ou une application
                    des graphiques informatiques utilisée pour créer ou améliorer des images dans l'art,
                    les médias imprimés, les simulateurs, les vidéos et les jeux vidéo. Ces images peuvent être
                    statiques (c’est-à-dire des images fixes) ou dynamiques (images animées). La CGI désigne à la fois
                    les graphismes informatiques en 2D et (plus fréquemment) en 3D, pour concevoir personnages,
                    mondes virtuels, scènes ou effets spéciaux.
                </motion.p>
            </div>

            <div className='w-full flex flex-col'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 white-text text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px]'
                >
                    Avant que la CGI ne devienne omniprésente dans le cinéma, la réalité virtuelle, l'informatique
                    personnelle et les jeux vidéo, l'une des premières applications pratiques était la formation
                    militaire, notamment avec les simulateurs de vol. Le Link Digital Image Generator (DIG) de
                    Singer-Link était l’un des premiers systèmes CGI en temps réel utilisés pour les navettes NASA,
                    F-111, Black Hawk et B-52.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap justify-center gap-7'>
                {follow.map((follow, index) => (
                    <ProjectCard key={`follow-${index}`} index={index} {...follow} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Technologie_monitoring, "Technology_monitoring");
