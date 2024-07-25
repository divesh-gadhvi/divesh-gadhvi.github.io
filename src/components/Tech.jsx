import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/constants";

const Tech = () => {

  const groupedTechnologies = technologies.reduce((acc, technology) => {
    const { category } = technology;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(technology);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedTechnologies).map(([category, techs]) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-bold mb-5 text-center">{category}</h2>
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {techs.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
                <h6 className='text-[14px] max-w-3xl leading-[30px] text-center'>{technology.name}</h6>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
