import { TbPointFilled } from "react-icons/tb";
import data from "./experienceData"
function Experience() {
  return (
    <div className="w-lg ">
      <div className="w-full">
        {data.map((step, index) => (
          <div key={index} className="flex items-start gap-4 relative h-32">
            {/* Step Indicator */}
            <div className="flex flex-col items-center">
              {
                <div
                  className={`flex items-center justify-center w-4 h-4 rounded-full border-2 border-indigo-500`}
                >
                  <TbPointFilled size={14} />
                </div>
              }
              {index !== data.length - 1 && (
                // the height is not flexible for text height
                <div className="w-0.5 h-32 bg-gray-300"></div>
              )}
            </div>

            {/* Step Content */}
            <div>
              <h3 className={`text-lg font-semibold text-indigo-500`}>
                {step.title}
              </h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Experience;
