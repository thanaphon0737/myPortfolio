import Marquee from "react-fast-marquee";
import Icon from "./Icon";
import data from "../../data/projectData";
function Project() {
  console.log(data);
  return (
    <div className="w-full" id="project">
      <h1 className="text-3xl font-bold mb-4">My work</h1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {data.map((item) => (
            <div className="card flex flex-col">
              <a target="_blank" href={item.url}>
                <img
                  src={item.img}
                  className="w-full h-[200px] object-cover ease-in-out hover:scale-105 hover:filter transition-all duration-300 rounded-lg place-self-center mb-4 "
                  alt={item.title}
                />
                <div className="card-info">
                  <div className="card-title">{item.title}</div>
                  <div className="card-tools flex flex-wrap gap-2 mb-2">
                    {item.tools.map((tool) => (
                      <Icon iconSize={24} title={tool.title} />
                    ))}
                  </div>
                  <div className="card-description">{item.description}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
    </div>
  );
}
export default Project;
