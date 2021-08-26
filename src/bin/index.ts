#!/usr/bin/env node

import chalk from "chalk";
import { Runner } from "../api/api";
import { CommandLineOption, parse } from "ts-command-line-args";
import { CliArguments } from "../api/interfaces";
import { UnitTestClass } from "abap-adt-api";
import asciifyImage from "asciify-image";
import path from "path";
const args = parse<CliArguments>(
    {
        ADT_URL: {
            type: String,
            description: "Path to your system, ie: https://localhost:50001",
            optional: true,
        },
        ADT_USER: { type: String, description: "Username", optional: true },
        ADT_PASS: { type: String, description: "Password", optional: true },
        ADT_CLIENT: { type: String, description: "Client", optional: true },
        ADT_LANG: { type: String, description: "Language", optional: true },
        skip_image: { type: Boolean, description: "Skip the ABAP's Not Dead image", optional: true },
        ABAP_PACKAGE: {
            type: String,
            description: "Abap Package",
            optional: true,
        },
        ABAP_CLASS: {
            type: String,
            description: "Abap Class name",
            optional: true,
        },
        help: {
            type: Boolean,
            optional: true,
            alias: "h",
            description: "Prints this usage guide",
        },
    },
    {
        helpArg: "help",
        headerContentSections: [
            {
                header: "Abap Test Runner CLI",
                content: "This CLI can run ABAP Unit tests in packages.",
            },
        ],
        footerContentSections: [
            { header: "Footer", content: `License: Derived Beer-ware License` },
        ]
    }
);
const imagePath = path.join(__dirname, "..", "/assets/abap.jpg");
asciifyImage(
    imagePath,
    {
        fit: "box",
        width: "90%",
        height: 75,
    },
    async function (err, asciified) {
        if (err || !asciified) {
            throw err;
            return;
        }
        if (args.skip_image === undefined || !args.skip_image)
        console.log(asciified);

        // console.log(chalk.blue(boxen(data, {padding: 1, borderStyle: "classic"})))
        try {
            const runner = new Runner(args);
            const unitTest: UnitTestClass[] = await runner.run_test(args);
            const errors =
                unitTest.filter(
                    (test) =>
                        test.testmethods.filter(
                            (testmethod) => testmethod.alerts.length > 0
                        ).length > 0
                ).length > 0;
            if (errors) {
                console.log(chalk.red("Error: Unit tests failed!"));
                unitTest.forEach((test) => {
                    test.testmethods.forEach((method) => {
                        method.alerts.forEach((alert) => {
                            alert.details.forEach((detail, index) => {
                                let color: chalk.Chalk;
                                switch (index) {
                                    case 1:
                                        color = chalk.redBright;
                                        break;

                                    default:
                                        color = chalk.white;
                                        break;
                                }
                                console.log(color(detail));
                            });
                        });
                    });
                });
            } else {
                console.log(chalk.bold.green("All unit tests passed!"));
            }
        } catch (error) {
            console.log(chalk.red(error));
            throw error
        }
    }
);
