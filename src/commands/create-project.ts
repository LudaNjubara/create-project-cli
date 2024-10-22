import { createProjectDir } from "@/utils/file-utils";
import { Command } from "commander";

export const createProjectCommand = new Command("create-project")
    .description("Create a new project")
    .argument("<name>", "Project name")
    .action((name) => {
        const projectPath = createProjectDir(name);


    });
