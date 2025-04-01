import data from "../data/projectData";
import Icon from "../Components/Content/Icon";
function MyworkProject() {
  return (
    <>
      <div className="flex flex-col w-xl">
        <div className="flex flex-col gap-12">
          {data.map((item) => (
            <div className="flex flex-col p-4 gap-4">
              <a target="_blank" href={item.url}>
                <img src={item.img} alt={item.title} className="size-lg" />
                <h2>{item.title}</h2>
                <span>Tools : </span>
                <div className="card-tools flex ">
                  {item.tools.map((tool) => (
                    <Icon iconSize={40} title={tool.title} />
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
