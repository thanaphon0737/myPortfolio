import icons from "./iconData"
function Icon(props) {
    const {title,size} = props
    // console.log(title,size)
    const iconVar = icons.filter(i =>{
        return i.title === title
    } );
    const Component = iconVar[0].icon;
    return (
    <div className="flex gap-2 items-center mx-4">
        
      <Component size={size} />
      <span>{title}</span>
    </div>
  );
}
export default Icon;
