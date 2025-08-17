import React, { useEffect, useState } from 'react';
import {
    SiReact, SiTypescript, SiNodedotjs, SiPython, SiDjango,
    SiPostgresql, SiDocker, SiTailwindcss, SiGraphql,
    SiGit,
    SiVercel,
    SiJavascript
} from 'react-icons/si';
import { FaBriefcase } from 'react-icons/fa';
import { FiClock, FiCode } from 'react-icons/fi';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'



const Home = () => {
    const [time, setTime] = useState(
        new Date().toLocaleTimeString('en-US', {
            timeZone: 'Asia/Kolkata',
            hour12: true,
        })
    );

    useEffect(() => {
        document.title = 'Darshan Pandey – Full-stack Developer';
        const timer = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString('en-US', {
                    timeZone: 'Asia/Kolkata',
                    hour12: true,
                })
            );
        }, 1000);
        return () => clearInterval(timer);
    }, []);


    const skills = [
        { name: 'React', icon: <SiReact className="text-cyan-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-emerald-400" /> },
        { name: 'Python', icon: <SiPython className="text-yellow-300" /> },
        { name: 'Django', icon: <SiDjango className="text-emerald-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-white" /> },
        { name: 'Docker', icon: <SiDocker className="text-sky-400" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-300" /> },
        { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
        { name: 'Git', icon: <SiGit className="text-zinc-200" /> },
        { name: 'Vercel', icon: <SiVercel className="text-zinc-200" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'Django Rest Framework', icon: <FiCode className="text-emerald-600" /> },
    ];

    const projects = [
        {
            title: 'GYM Landing Page',
            description: 'A bold, modern landing page for a gym. Clean design, intuitive pricing flow, and built to convert visitors into customers.',
            stack: ['React', 'Django', 'Tailwind'],
            liveUrl: 'https://hashtagrig.com',
        },
        {
            title: 'Website Monitor',
            description: 'A watchdog system for websites — detects crashes, throws alerts, and helps devs sleep peacefully at night.',
            stack: ['React', 'Django', 'Celery', 'Redis'],
            // liveUrl: 'https://example.com',
            // codeUrl: 'https://github.com/example',
        },
        {
            title: 'RIGMeet SBD Powerlifting',
            description: 'Built a live scoring system that tracks SBD lifts, ranks competitors, and runs smoother than a deadlift PR.',
            stack: ['React', 'Django Rest Framework', 'Tailwind'],
            // codeUrl: 'https://github.com/example',
            // liveUrl: 'https://example.com',
        },
        {
            title: 'Water Bottle Tracker',
            description: 'Developed a smart tracker that logs and manages gym water bottle usage, helping GYM manage and organize.',
            stack: ['Django Rest Framework', 'Django', 'Tailwind'],
            // codeUrl: 'https://github.com/example',
            // liveUrl: 'https://example.com',
        },
        {
            title: 'Coffeeandcarb.com',
            description: 'A sleek, user-friendly landing page for a personal training coach, showcasing their services and expertise.',
            stack: ['React', 'Django', 'Tailwind'],
            // codeUrl: 'https://github.com/example',
            // liveUrl: 'https://example.com',
        },
        {
            title: 'Training and Diet Panner',
            description: 'Developed a robust web application for personal trainers to create customized training and diet plans.',
            stack: ['React', 'Django', 'Tailwind'],
            // codeUrl: 'https://github.com/example',
            // liveUrl: 'https://example.com',
        },
    ];


    const ProjectCard = ({ project }) => {
        const iconMap = {
            'React': <SiReact className="text-cyan-400 h-4 w-4" />,
            'TypeScript': <SiTypescript className="text-blue-400 h-4 w-4" />,
            'Node.js': <SiNodedotjs className="text-emerald-400 h-4 w-4" />,
            'Python': <SiPython className="text-yellow-300 h-4 w-4" />,
            'Django': <SiDjango className="text-emerald-600 h-4 w-4" />,
            'PostgreSQL': <SiPostgresql className="text-white h-4 w-4" />,
            'Docker': <SiDocker className="text-sky-400 h-4 w-4" />,
            'Tailwind': <SiTailwindcss className="text-teal-300 h-4 w-4" />,
            'GraphQL': <SiGraphql className="text-pink-500 h-4 w-4" />,
        };

        return (
            <div className="w-full group rounded-xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-700 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white group-hover:text-zinc-300 transition-colors">
                    {project.title}
                </h3>

                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                        <span
                            key={i}
                            className="flex items-center gap-1 rounded-md bg-zinc-800/60 border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 pt-4">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-zinc-300 hover:text-white transition"
                        >
                            🔗 live
                        </a>
                    )}
                    {project.codeUrl && (
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-zinc-300 hover:text-white transition"
                        >
                            💻 Code
                        </a>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[repeating-linear-gradient(0deg,_#111_0px,_#111_1px,_transparent_1px,_transparent_4px)] text-white px-4">

            <main className="w-full pb-6">
                <section className="py-6">
                    <div className="px-6 max-w-3xl mx-auto">
                        <div className="text-justify">
                            <p className="text-white font-light text-lg mb-2 leading-8">
                                Hey, I'm <span className='underline decoration-wavy decoration-pink-600 decoration-2 underline-offset-4 '>Darshan Pandey</span>
                            </p>

                            <p className="text-zinc-300 text-base leading-relaxed">
                                I’m a full-stack developer and a third-year BCA student at Jain University, Bangalore.
                            </p>

                            <p className="text-zinc-300 text-base leading-relaxed mt-4">
                                I got into coding at 12, and I’ve been hooked ever since not because I love buzzwords, but because I genuinely enjoy building things that work, solve problems, and make sense to real people.
                            </p>

                            <p className="text-zinc-300 text-base leading-relaxed mt-4">
                                Outside tech, I powerlift, play chess, and read books that make me question everything. I also have a dog who thinks he runs the place (he might be right).
                            </p>
                            <p className="text-zinc-300 text-base leading-relaxed mt-4">
                                Whether I’m debugging a tough bug or training for a new PR, I’m just trying to get a little better every day.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-6">
                    <div className="px-6 max-w-3xl mx-auto">
                        <div className="mb-6">
                            <p className="text-xl text-white font-bold leading-relaxed">
                                Projects
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((project, index) => (
                                <ProjectCard key={index} project={project} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="max-w-3xl mx-auto px-6">
                        <div className="mb-6">
                            <p className="text-xl text-white font-bold leading-relaxed">
                                Experience
                            </p>
                        </div>
                        <div className="flex flex-col gap-9">

                            <div className="flex items-start gap-4 p-6 border border-zinc-800 rounded-xl bg-zinc-900/60 hover:border-zinc-700 transition-all">
                                <FaBriefcase className="text-zinc-400 mt-1 shrink-0" size={20} />

                                <div className="flex flex-col">
                                    <h3 className="text-white text-base font-semibold">
                                        Full Stack Developer
                                    </h3>
                                    <div className="flex items-center text-zinc-400 text-sm gap-3 mt-1">
                                        <span className="flex items-center gap-1">
                                            <HiOutlineBuildingOffice2 className="text-zinc-500" size={14} />
                                            Royal Iron Gym Corp.
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FiClock className="text-zinc-500" size={14} />
                                            2021 – Present
                                        </span>
                                        
                                    </div>
                                    <p className="text-zinc-300 text-sm mt-3 leading-relaxed">
                                        Shipped full-stack apps including high-converting landing pages, a water bottle tracker, and a live powerlifting meet system built with React, Tailwind, and Django DRF.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section id="contact" className="py-6">
                    <div className="px-6 max-w-3xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-xl font-semibold text-white mb-4">
                                <span className="">
                                    Let's Connect
                                </span>
                            </h2>
                            <p className="text-zinc-300 text-md leading-relaxed">
                                Have a project in mind or want to discuss opportunities? I'm currently available for freelance work and collaborations.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mb-8">
                                <p className="text-zinc-300 mb-4 text-sm">Find me elsewhere:</p>
                                <div className="flex justify-center gap-4">
                                    <a
                                        href="https://github.com/DarshanPandey515"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800/50 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <SiGit className="text-zinc-300 hover:text-white h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://x.com/daarshn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800/50 transition-colors"
                                        aria-label="Twitter"
                                    >
                                        <svg className="text-zinc-300 hover:text-white h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/darshan-pandey"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800/50 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <svg className="text-zinc-300 hover:text-white h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="border-t border-zinc-800 pt-8">
                                <p className="text-zinc-500 text-sm mb-4">
                                    Prefer email? Reach me directly at:
                                </p>
                                <a
                                    href="mailto:pandeydarshan61@gmail.com"
                                    className="text-white hover:text-cyan-400 font-medium transition-colors"
                                >
                                    pandeydarshan61@gmail.com
                                </a>
                                <p className='text-zinc-500 text-sm mt-4'>If you’ve got an idea, want to collaborate, or just wanna talk shop, I’m all ears.</p>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-6">
                    <div className="px-6 max-w-3xl mx-auto">

                        <div className="flex flex-wrap gap-2 mt-4">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="rounded-md bg-zinc-800/60 border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300 flex items-center space-x-2"
                                >
                                    <span>{skill.icon}</span>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <footer className="bg-zinc-900/50 border border-zinc-800 rounded-xl max-w-3xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:mb-0">
                            <span className="text-zinc-400 text-sm">
                                © {new Date().getFullYear()}
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-zinc-400 text-sm">
                                Bengaluru • {time}
                            </span>
                            <a
                                href="#top"
                                className="text-zinc-400 hover:text-white transition-colors text-sm"
                                aria-label="Back to top"
                            >
                                ↑
                            </a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default Home;
