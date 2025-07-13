import Marquee from "react-fast-marquee";
import icons from "./iconData";
import Icon from "./Icon";
import { Element } from "react-scroll";
function ListIcon() {
  const iconSize = 60;
  const half_index = Math.floor(icons.length / 2);
  const iconFirst = icons.slice(0, half_index);
  const iconLast = icons.slice(half_index, icons.length);

  return (
    <div className="w-full mx-auto">
      <Element name="listIcon">
        <h1 className="place-self-start my-4">
          My Tech Stack: Tools & Technologies I Work With
        </h1>
        <Marquee pauseOnHover={true} gradient={false} speed={60}>
          {iconFirst.map((icon,index) => {
            return <Icon key={index} iconSize={iconSize} title={icon.title} />;
          })}
        </Marquee>
        <Marquee pauseOnHover={true} gradient={false} speed={60}>
          {iconLast.map((icon,index) => {
            return <Icon key={index} iconSize={iconSize} title={icon.title} />;
          })}
        </Marquee>
      </Element>
    </div>
  );
}
export default ListIcon;
