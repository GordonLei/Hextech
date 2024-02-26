"use client";

/*
This is the menu that displays the Skills information 
*/

//  imports
//    npm packages
import { useState, useEffect } from "react";
//    helper functions
import { objectMapArray } from "@/helper/misc";

//
const basePA = {
  Q: 1,
  W: 1,
  E: 1,
  R: 1,
};

//  Skills Menu component
const SkillsMenu = ({ name, abilities, baseStats }) => {
  //

  //
  const [currentAbilities, setAbility] = useState(fa);
  const [pointAllocation, setPointAllocation] = useState(basePA);
  //
  const fa = parse(name, abilities, basePA, baseStats, baseStats);
  //
  function handleSkillAllocation(key, numPoints) {
    //  console.log(numPoints - 1);
    setPointAllocation({
      ...pointAllocation,
      [key]: numPoints,
    });
  }
  //  update the abilities text when pointAllocation is updated
  useEffect(() => {
    setAbility(
      parse(
        props.championData.name,
        props.championData.abilities,
        pointAllocation,
        currentStats,
        baseStats
      )
    );
  }, [pointAllocation, currentStats]);

  return (
    <div
      className={`${
        overflowScroll
          ? ""
          : " overflow-y-scroll overscroll-y-none overflow-hidden"
      }`}
    >
      {objectMapArray(currentAbilities, (key, value) => {
        return (
          <div key={`${key}_skill`} className="border-t-2 m-4">
            <div key={`${key}_name`}>
              {`${key === "P" ? "Passive" : key}: ${value.name}`}
              {key !== "P" && (
                <select
                  name="level"
                  id="level"
                  key={`${key}_select`}
                  onChange={(event) =>
                    handleSkillAllocation(key, event.target.value)
                  }
                >
                  {Array.from(Array(key === "R" ? 3 : 5).keys()).map(
                    (level) => {
                      return (
                        <option
                          key={`${key}_level_${level + 1}`}
                          value={level + 1}
                        >
                          {level + 1}
                        </option>
                      );
                    }
                  )}
                </select>
              )}
            </div>
            <div key={`${key}_tooltip`}>
              {value.tooltip.map((each, index) => {
                return <div key={`${key}_tooltip_${index}`}>{each}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SkillsMenu;
