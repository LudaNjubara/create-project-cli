import * as chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';
import { log } from './logging-utils';

export function createProjectDir(name: string): string {
    const projectPath = path.join(process.cwd(), name);

    if (fs.existsSync(projectPath)) {
        // Directory already exists, throw an error
        log(chalk.red(`Directory ${projectPath} already exists`));

        throw new Error(`Directory ${projectPath} already exists`);
    } else {
        // Create the directory
        fs.mkdirSync(projectPath);

        log(chalk.green(`Directory ${projectPath} created`));
    }

    return projectPath;
}