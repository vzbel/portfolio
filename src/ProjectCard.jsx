// A card to represent a portfolio project.
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import TechTag from "./TechTag.jsx";
import TechTagList from "./TechTagList.jsx"

function ProjectCard({url, thumbnail, name, description, tagNames}){
    return (
        <div className="p-1 flex-1"> 
            {/* Proj. image and link */}
            <a href={url} target="_blank" className="gap-1 text-xl underline block mb-3">
                <img src={thumbnail} alt="" width={700} className="block w-full mb-5"/>

                {/* Link */}
                <h3 className="flex gap-2">
                    {name}
                    <ArrowTopRightOnSquareIcon className="size-5"/>
                </h3>
            </a>

            {/* Project desc. */}
            <p className="text-slate-300 mb-5 max-w-full">{description}</p>

            {/* Technologies used in Project*/}
            <TechTagList tagNames={tagNames}/>
        </div>
    );
}

export default ProjectCard
