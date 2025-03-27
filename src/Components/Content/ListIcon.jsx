import Marquee from "react-fast-marquee";
import icons from './iconData'
function ListIcon() {
  const iconSize = 60;


  return (
    <div className="mt-12 w-96">
        <h1 className="place-self-start my-4">My Tech Stack: Tools & Technologies I Work With</h1>
      <Marquee pauseOnHover={true} gradient={false} speed={60}>

        {icons.map(icon => {
            const Icon = icon.icon
            return (
                <div className="flex gap-2 items-center mx-4">
                <Icon size={iconSize}/>
                <span>{icon.title}</span>
                </div>
            )
        })}
      </Marquee>
    </div>
  );
}
export default ListIcon;
