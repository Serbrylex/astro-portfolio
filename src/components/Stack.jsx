import { 
    SiAstro, SiDjango, SiJavascript, SiPython,
    SiMongodb, SiScrapy, SiJest, SiCypress, SiSelenium
} from "react-icons/si";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaGitAlt, FaGithub, FaGitlab, FaCss3Alt } from "react-icons/fa6";

const Stack = () => {
    const size = '27px'
    const stack = [
        {
            icon: <SiAstro size={size}/>,
            title: "Astro",
        },
        {
            title: "React",
            icon: <FaReact size={size}/>,
        },
        {
            title: "Next js",
            icon: <RiNextjsFill size={size}/>,
        },
        {
            title: "Django",
            icon: <SiDjango size={size}/>,
        },
        {
            title: ".Net",
            icon: null,
        },
        {
            title: "C#",
            icon: null,
        },
        {
            title: "JavaScript",
            icon: <SiJavascript  size={size}/>,
        },
        {
            title: "Python",
            icon: <SiPython size={size}/>,
        },
        {
            title: "SQL",
            icon: null,
        },
        {
            title: "Mongo DB",
            icon: <SiMongodb size={size}/>,
        },
        {
            title: "Responsive",
            icon: <IoPhonePortraitOutline size={size}/>,
        },
        {
            title: "Scraping",
            icon: <SiScrapy size={size}/>,
        },
        {
            title: "Git",
            icon: <FaGitAlt size={size}/>,
        },
        {
            title: "GitHub",
            icon: <FaGithub size={size}/>,
        },
        {
            title: "GitLab",
            icon: <FaGitlab size={size}/>,
        },
        {
            title: "HTML5",
            icon: <FaHtml5 size={size}/>,
        },
        {
            title: "CSS",
            icon: <FaCss3Alt size={size}/>,
        },
        {
            title: "Jest",
            icon: <SiJest size={size}/>,
        },
        {
            title: "Cypress",
            icon: <SiCypress size={size}/>,
        },
        {
            title: "Selenium",
            icon: <SiSelenium size={size}/>,
        }
    ];

    return (
        <>
        {
            stack.map((item, idx) => (
                <div key={idx} className="text-xs sm:text-xl flex flex-col items-center justify-center rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                    {item.icon}
                    <span className="text-gray-600 text-center">{item.title}</span>
                </div>
            ))
        }
        </>
    )
}

export default Stack