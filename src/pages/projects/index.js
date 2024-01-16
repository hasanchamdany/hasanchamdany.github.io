import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import React from "react";
import { getProjectData } from "./../../utils/getMarkdownData";
import { getProjectSlugs } from "./../../utils/getSlugs";
import Image from "next/image";
import backgroundImage from "../../../public/images/background-project-page-png.png";
import ProjectCard from "@/components/Card/ProjectCard";
import dummyProject from "../../../public/images/dummy-project.png";

const Index = ({ projects }) => {
  console.log("ini isi props");
  console.log(projects);

  return (
    <DefaultLayout>
      <div className="relative bg-cover bg-center min-h-screen h-fit">
        <div className="w-full min-h-screen h-fit bg-dark-base relative">
          <div
            className="h-fit w-full bg-project-bg"
            style={{ position: "relative" }}
          >
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
                <button
                  className="rounded-[15px] bg-dark-grey text-white px-3 lg:px-8 py-1 lg:py-2 hover:text-[#FFE603] sliding-button"
                  data-aos="fade-up"
                >
                  <span className="text-lg relative " style={{ zIndex: 2 }}>
                    IT Project
                  </span>
                  <span className="slide"></span>
                </button>
                <button
                  className="rounded-[15px] bg-dark-grey text-white px-3 lg:px-8 py-1 lg:py-2 hover:text-[#FFE603] sliding-button"
                  data-aos="fade-up"
                >
                  <span className="text-lg relative " style={{ zIndex: 2 }}>
                    Video
                  </span>
                  <span className="slide"></span>
                </button>
                <button
                  className="rounded-[15px] bg-dark-grey text-white px-3 lg:px-8 py-1 lg:py-2 hover:text-[#FFE603] sliding-button"
                  data-aos="fade-up"
                >
                  <span className="text-lg relative " style={{ zIndex: 2 }}>
                    Photo
                  </span>
                  <span className="slide"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid justify-center mx-auto w-full max-w-[1426px] h-fit py-10 -translate-y-[120px] blur-background">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-6">
              <ProjectCard
                src={dummyProject}
                title="dummy project"
                desc="ini adalah dummy project untuk web portofolio hasan"
                className="w-full max-w-[420px]"
                url="/"
              />
              <ProjectCard
                src={dummyProject}
                title="dummy project"
                desc="ini adalah dummy project untuk web portofolio hasan"
                className="w-full max-w-[420px]"
                url="/"
              />
              <ProjectCard
                src={dummyProject}
                title="dummy project"
                desc="ini adalah dummy project untuk web portofolio hasan"
                className="w-full max-w-[420px]"
                url="/"
              />
              <ProjectCard
                src={dummyProject}
                title="dummy project"
                desc="ini adalah dummy project untuk web portofolio hasan"
                className="w-full max-w-[420px]"
                url="/"
              />
            </div>
          </div>
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
