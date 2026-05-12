import {
    FiMapPin,
    FiBriefcase,
    FiAward,
    FiArrowRight,
} from "react-icons/fi";

import developer from "../assets/developer.jpeg";

export default function DeveloperSection() {

    const techStack = [
        "JavaScript", "React", "TypeScript", "Node.js", "Express.js",
        "MongoDB", "Tailwind CSS", "Bootstrap", "Material UI", "DaisyUI",
        "Swiper.js", "GSAP", "Webflow", "Git"
    ];

    const stats = [
        { label: "PROJECTS", value: "40+" },
        { label: "CLIENTS", value: "15+" },
        { label: "EXPERIENCE", value: "3+ yrs" },
        { label: "COFFEE", value: "∞" },
    ];

    return (
        <section className="py-20 bg-slate-50 text-slate-900">

            <div className="container mx-auto px-6 max-w-6xl">

                {/* HERO */}
                <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">

                    {/* IMAGE */}
                    <div className="relative flex justify-center lg:justify-start">

                        <div className="relative w-[380px] aspect-square rounded-[36px] overflow-hidden border border-black/5 shadow-lg bg-white">

                            <img
                                src={developer}
                                alt="Developer"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute bottom-5 left-5 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-black/5 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-xs font-medium text-slate-700">
                                    Available for projects
                                </span>
                            </div>

                        </div>

                        <div className="absolute -inset-6 bg-blue-200/40 blur-3xl rounded-full -z-10"></div>

                    </div>

                    {/* TEXT */}
                    <div>

                        <span className="text-blue-600 uppercase tracking-[4px] text-sm font-semibold">
                            Meet the Developer
                        </span>

                        <h1 className="text-5xl font-bold mt-4 leading-tight">
                            Hi, I'm <span className="text-blue-600">SHEIKH SADI</span>
                        </h1>

                        <p className="text-slate-600 mt-6 text-lg leading-relaxed max-w-xl">
                            A full-stack developer & UI designer building modern,
                            fast and scalable web applications for startups and businesses.
                        </p>

                        {/* INFO */}
                        <div className="mt-8 flex flex-wrap gap-6 text-slate-600 text-sm">

                            <div className="flex items-center gap-2">
                                <FiMapPin className="text-blue-600" />
                                Dhaka, Bangladesh
                            </div>

                            <div className="flex items-center gap-2">
                                <FiBriefcase className="text-blue-600" />
                                Freelance Developer
                            </div>

                            <div className="flex items-center gap-2">
                                <FiAward className="text-blue-600" />
                                CSE Graduate
                            </div>

                        </div>

                        {/* BUTTONS */}
                        <div className="flex gap-4 mt-10">

                            <a
                                href="mailto:support@techzone.com"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-medium transition"
                            >
                                Hire Me
                            </a>

                            <button className="border border-slate-200 hover:border-blue-500 px-7 py-3 rounded-xl font-medium transition">
                                View Portfolio
                            </button>

                        </div>

                    </div>

                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">

                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-black/5 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition"
                        >
                            <h4 className="text-3xl font-bold text-blue-600">
                                {stat.value}
                            </h4>
                            <p className="text-slate-500 mt-2 text-xs tracking-wider uppercase">
                                {stat.label}
                            </p>
                        </div>
                    ))}

                </div>

                {/* CONTENT */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20">

                    {/* ABOUT */}
                    <div className="bg-white border border-black/5 p-10 rounded-[28px] shadow-sm">

                        <h3 className="text-2xl font-bold mb-6">About Me</h3>

                        <div className="space-y-4 text-slate-600 leading-relaxed">

                            <p>
                                I am <span className="text-slate-900 font-semibold">SHEIKH SADI</span>,
                                a full-stack developer focused on modern web applications.
                            </p>

                            <p>
                                I build responsive, fast and scalable applications using
                                React, Node.js and modern UI frameworks.
                            </p>

                            <p>
                                My goal is to deliver clean UI/UX and production-ready systems.
                            </p>

                        </div>

                    </div>

                    {/* TECH STACK */}
                    <div className="bg-white border border-black/5 p-10 rounded-[28px] shadow-sm">

                        <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>

                        <div className="flex flex-wrap gap-3">

                            {techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 bg-slate-100 border border-black/5 rounded-xl text-sm text-slate-700 hover:border-blue-400 transition"
                                >
                                    {tech}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>

                {/* CTA */}
                <div className="bg-blue-600 text-white p-12 rounded-[36px] text-center">

                    <h2 className="text-3xl font-bold mb-4">
                        Have a project in mind?
                    </h2>

                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Let's build something modern, fast and impactful together.
                    </p>

                    <a
                        href="mailto:support@techzone.com"
                        className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:scale-105 transition"
                    >
                        Start a Project <FiArrowRight />
                    </a>

                </div>

            </div>

        </section>
    );
}