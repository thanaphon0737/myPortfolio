import Marquee from "react-fast-marquee";
import Icon from "./Icon";
import data from "../../data/projectData";
function Project() {
  console.log(data);
  return (
    <div className="w-xl">
      <div className="flex flex-col gap-12">
        {data.map((item) => (
          <div className="card flex flex-col gap-4">
            <img
              src={item.img}
              className="object-cover w-full size-96"
              alt={item.title}
            />
            <div className="card-info">
              <div className="card-title">{item.title}</div>
              <div className="card-tools flex">
                {item.tools.map((tool) => (
                  <Icon iconSize={40} title={tool.title} />
                ))}
              </div>
              <div className="card-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Project;
