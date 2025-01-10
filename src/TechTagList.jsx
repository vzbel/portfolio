import TechTag from "./TechTag.jsx";

// A list of tags for a project's technologies
function TechTagList({tagNames}){
    return (
        <div className="flex flex-wrap gap-3">
            {/* Create tag markup for each tagname  */}
            {tagNames.map(name => <TechTag name={name} />)}
        </div>
    );
}

export default TechTagList