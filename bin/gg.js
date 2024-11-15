#!/usr/bin/env node

const { execSync } = require("child_process");

function gg_surukoro() {
    execSync("git init", { stdio: "inherit" });
}

function gg_kiobostha() {
    execSync("git status", { stdio: "inherit" });
}

function gg_joma() {
    execSync("git add .", { stdio: "inherit" });
}

function gg_likhefelun() {
    const message = require("readline-sync").question("Enter commit message: ");
    execSync(`git commit -m "${message}"`, { stdio: "inherit" });
}

function gg_pathiye_dao() {
    execSync("git push", { stdio: "inherit" });
}

function gg_tane_ano() {
    execSync("git pull", { stdio: "inherit" });
}

function gg_nokol() {
    const url = require("readline-sync").question("Enter repository URL: ");
    execSync(`git clone ${url}`, { stdio: "inherit" });
}

function gg_pichone_jao() {
    execSync("git log", { stdio: "inherit" });
}

// Define other functions here...

const commands = {
    "surukoro": gg_surukoro,
    "kiobostha": gg_kiobostha,
    "joma": gg_joma,
    "likhefelun": gg_likhefelun,
    "pathiye_dao": gg_pathiye_dao,
    "tane_ano": gg_tane_ano,
    "nokol": gg_nokol,
    "pichone_jao": gg_pichone_jao,
    // Add other commands here...
};

const command = process.argv[2];
if (commands[command]) {
    commands[command]();
} else {
    console.log("Unknown command:", command);
    console.log("Available commands:", Object.keys(commands).join(", "));
}
