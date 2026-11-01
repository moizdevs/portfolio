import Image from "next/image";
import type { Project } from "@/types";
import { ProjectArt } from "./ProjectArt";

export function ProjectMedia({ project, sizes }: { project: Project; sizes: string }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        sizes={sizes}
        loading="lazy"
        className="object-contain transition duration-700 group-hover:scale-[1.04]"
      />
    );
  }
  return (
    <div className="h-full w-full transition duration-700 group-hover:scale-[1.04]">
      <ProjectArt hue={project.hue} title={project.title} />
    </div>
  );
}
