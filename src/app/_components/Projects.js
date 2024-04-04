import { ProjectCard } from "./ProjectCard";
import dataJson from "@/data/projects.json";

export const Projects = () => {
  return (
    <section className="flex flex-col items-center py-6 gap-10">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-600">
          پروژه ها
        </h2>
        <p className="text-content-gray text-base md:text-lg lg:text-xl">
          چیزهایی که تا الان خلق کرده ایم
        </p>
      </div>
      <div className="flex gap-8 flex-wrap">
        {!!dataJson &&
          dataJson?.projects &&
          dataJson.projects.length > 0 &&
          dataJson.projects.map((item) => (
            <div className="w-full md:w-[47%] xl:w-[31%]" key={item.id}>
              <ProjectCard {...item} />
            </div>
          ))}
      </div>
    </section>
  );
};
