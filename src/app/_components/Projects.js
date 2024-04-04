import { ProjectCard } from "./ProjectCard";

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
        {[1, 2, 3, 4, 5, 6, 7, 8].map(({ item }) => (
          <div className="w-full md:w-[47%] lg:w-[31%]" key={item}>
            <ProjectCard />
          </div>
        ))}
      </div>
    </section>
  );
};
