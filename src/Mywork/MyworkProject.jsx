import data from "../data/projectData";
import Icon from "../Components/Content/Icon";
function MyworkProject() {
  return (
    <>
      <div className="flex flex-col">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
          {data.map((item) => (
            <div className="flex flex-col p-4 gap-4">
              <a target="_blank" href={item.url}>
                <img src={item.img} alt={item.title} className="w-full h-[350px] object-cover ease-in-out hover:scale-105 hover:filter transition-all duration-300 rounded-lg mb-4 " />
                <h2>{item.title}</h2>
                <span>Tools : </span>
                <div className="card-tools flex flex-wrap gap-2 mb-2">
                  {item.tools.map((tool) => (
                    <Icon iconSize={24} title={tool.title} />
                  ))}
                </div>
                <div className="card-description">{item.description}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default MyworkProject;
