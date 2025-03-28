import Marquee from "react-fast-marquee";
import icons from "./iconData";
import Icon from "./Icon";
import data from "./projectData";
function Project() {
    console.log(data)
  return (
    <div className="w-lg">
      {data.map((item) => (
        <div className="card">
          <img
            src={item.img}
            className="object-cover w-full size-96"
            alt={item.title}
          />
          <div className="card-info">
            <div className="card-title">{item.title}</div>
            <div className="card-tools flex">
                {item.tools.map(tool =>(
                    <Icon iconSize={40} title={tool.title}/>
                ))}
            </div>
            <div className="card-description">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Project;
