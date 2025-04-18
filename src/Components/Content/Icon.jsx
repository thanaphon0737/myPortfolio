import icons from "./iconData"
function Icon(props) {
    const {title,iconSize} = props
    // console.log(title,size)
    const iconVar = icons.filter(i =>{
        return i.title === title
    } );
    const Component = iconVar[0].icon;
    return (
    <div className="flex flex-row gap-1 items-center mx-4">
        
      <Component size={iconSize} />
      <span>{title}</span>
    </div>
  );
}
export default Icon;
