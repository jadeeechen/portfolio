import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const WorkCard = ({ img, name, description, onClick, wip }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const darkGradient = "linear-gradient(135deg, rgba(248,107,223,0.75) 0%, rgba(107,107,248,0.75) 100%)";
  const lightGradient = "linear-gradient(135deg, rgba(248,107,223,0.35) 0%, rgba(107,107,248,0.35) 100%)";

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300"
        style={{ height: "270px" }}
      >
        {wip && (
          <div className="absolute top-0 left-0 z-10" style={{
            width: 0, height: 0,
            borderStyle: "solid",
            borderWidth: "80px 80px 0 0",
            borderColor: "rgba(100, 100, 100, 0.75) transparent transparent transparent",
          }}>
            <span style={{
              position: "absolute",
              top: "-62px",
              left: "10px",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              transform: "rotate(-45deg)",
              letterSpacing: "0.05em",
            }}>WIP</span>
          </div>
        )}
        {img ? (
          <img
            alt={name}
            className="h-full w-full object-contain hover:scale-110 transition-all ease-out duration-300"
            src={img}
          />
        ) : (
          <div
            className="h-full w-full flex flex-col items-center justify-center px-6 text-center hover:scale-110 transition-all ease-out duration-300"
            style={{ background: mounted && theme === "dark" ? darkGradient : lightGradient }}
          >
            <h2 className="text-2xl font-semibold text-white drop-shadow-md">{name}</h2>
            <p className="mt-2 text-sm text-white opacity-80 drop-shadow-sm">{description}</p>
          </div>
        )}
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
