import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import React from "react";
import { getProjectData } from "./../../utils/getMarkdownData";
import { getProjectSlugs } from "./../../utils/getSlugs";
import Image from "next/image";
import backgroundImage from "../../../public/images/background-project-page-png.png";

const Index = ({ projects }) => {
  console.log("ini isi props");
  console.log(projects);

  return (
    <DefaultLayout>
      <div className="relative bg-cover bg-center h-screen">
        <div className="w-full h-screen bg-dark-base relative">
          <div className="h-fit w-full bg-project-bg" style={{ position: "relative" }}>
            <div
              style={{
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "406px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.2,
              }}
            >
              {/* Content with opacity effect */}
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex justify-center gap-4 text-xl text-white">
                <button className="bg-dark-grey shadow-xl rounded-full">
                  <p className="py-2 px-8">
                    IT Project
                    </p>
                    </button>
                <button className="bg-dark-grey shadow-xl rounded-full">
                  <p className="py-2 px-8">
                    Video
                    </p>
                    </button>
                <button className="bg-dark-grey shadow-xl rounded-full">
                  <p className="py-2 px-8">
                    Photo
                    </p>
                    </button>
              </div>
            </div>
          </div>
          <h1 className="text-white">asdlkhadlkhadklh</h1>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Index;

export async function getStaticProps() {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectData(slug));
  console.log(projects);

  return {
    props: {
      projects,
    },
  };
}
