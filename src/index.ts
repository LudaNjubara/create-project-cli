#!/usr/bin/env node

import { createProjectCommand } from "./commands/create-project";

function main() {
    createProjectCommand.parse(process.argv);
}

main();