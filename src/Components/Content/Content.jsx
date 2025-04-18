
import ListIcon from "./ListIcon";
import Experience from "./Experience";
import Project from "./Project";
import Landing from "./Landing";
function Content() {
  return (
    <>
      <div className="w-xs md:w-xl lg:w-4xl flex flex-col gap-y-10 my-16  mx-auto items-center">
        <Landing />
        <ListIcon />

        <Experience />

        <Project />
      </div>
    </>
  );
}
export default Content;
