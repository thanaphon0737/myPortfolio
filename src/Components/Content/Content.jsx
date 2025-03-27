
import ListIcon from "./ListIcon";
import Experience from "./Experience";
import Project from "./Project";
import Landing from "./Landing";
function Content() {
  return (
    <>
      <div className="content grow flex flex-col items-center justify-center  gap-y-10 my-16">
        <Landing />
        <ListIcon />

        <Experience />

        <Project />
      </div>
    </>
  );
}
export default Content;
