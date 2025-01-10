
// Represents a tag for the projects section.
// For example, a tag that says: React
function TechTag({name}){
    return (
        <p className="py-2 px-4 rounded-xl text-indigo-400 bg-indigo-950">{name}</p>
    );
}

export default TechTag