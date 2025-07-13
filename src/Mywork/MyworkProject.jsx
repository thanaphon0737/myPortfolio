import data from "../data/projectData";
import Icon from "../Components/Content/Icon";
import TiltedCard from "../Components/ReactBits/TiltedCard";
function MyworkProject() {
  return (
    <>
      <div className="flex flex-col">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
          {data.map((item,index) => (
            <div key={index} className="flex flex-col p-4 gap-4">
              <a target="_blank" href={item.url}>
                {/* <img src={item.img} alt={item.title} className="w-full h-[350px] object-cover ease-in-out hover:scale-105 hover:filter transition-all duration-300 rounded-lg mb-4 " />
                 */}
                <TiltedCard
                  key={index}
                  imageSrc={item.img}
                  altText={item.title}
                  captionText={item.title}
                  containerHeight="350px"
                  containerWidth="100%"
                  imageHeight="350px"
                  imageWidth="100%"
                  rotateAmplitude={30}
                  scaleOnHover={1.0}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  
                />
                <h2>{item.title}</h2>
                <span>Tools : </span>
                <div className="card-tools flex flex-wrap gap-2 mb-2">
                  {item.tools.map((tool, index) => (
                    <Icon key={index} iconSize={24} title={tool.title} />
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
