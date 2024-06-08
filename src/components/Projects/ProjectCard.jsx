import React from "react";

import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({project}) => {

  return (
    <div className="w-full h-full lg:flex overflow-auto">
      {/* for image section */}
      <div className="lg:w-1/2 border-4 p-1 rounded-md border-teal-400">
        <img className="w-full h-full" src={project.image} />
      </div>
      {/* for project details section */}
      <div className="lg:w-1/2 md:px-5 mt-5 md:m-0">
        <h1 className="text-left uppercase text-orange-200 font-bold text-2xl font-mono">
          {project.name}
        </h1>
        <p className="text-left mt-5 text-slate-200">
          {project.discription}
        </p>
        <p className="mt-5 flex flex-wrap gap-2">
            {
                project.tech.map((text,index)=>{
                    return (<span key={index} className="bg-slate-800 text-slate-200 me-4 px-2 py-1 rounded-md italic">{`#${text}`}</span>)
                })
            }
        </p>
        <div className="mt-5 flex gap-3">
            <a href={project.github} className="bg-black text-slate-200 text-sm px-2 p-1 flex gap-2 items-center rounded-md h-10 font-mono"><FaGithub size={18} /> Github </a>
            <a href={project.live} className="bg-orange-200 text-slate-800 text-sm px-2 p-1 flex gap-2 items-center rounded-md h-10 font-mono font-bold"><MdArrowOutward size={18} /> Live </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
