#!/usr/bin/env node

const { execSync } = require("child_process");
const readline = require("readline-sync");

// Function definitions
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
    const message = readline.question("Enter commit message: ");
    execSync(`git commit -m "${message}"`, { stdio: "inherit" });
}

function gg_pathiye_dao() {
    execSync("git push", { stdio: "inherit" });
}

function gg_tane_ano() {
    execSync("git pull", { stdio: "inherit" });
}

function gg_nokol() {
    const url = readline.question("Enter repository URL: ");
    execSync(`git clone ${url}`, { stdio: "inherit" });
}

function gg_pichone_jao() {
    execSync("git log", { stdio: "inherit" });
}

function gg_shakha_koro() {
    execSync("git branch", { stdio: "inherit" });
}

function gg_badalkoro() {
    const branch = readline.question("Enter branch name: ");
    execSync(`git checkout ${branch}`, { stdio: "inherit" });
}

function gg_lukie_rakho() {
    execSync("git stash", { stdio: "inherit" });
}

function gg_ber_koro() {
    execSync("git stash pop", { stdio: "inherit" });
}

function gg_jora_dao() {
    const branch = readline.question("Enter branch to merge: ");
    execSync(`git merge ${branch}`, { stdio: "inherit" });
}

function gg_biday() {
    const file = readline.question("Enter file to remove: ");
    execSync(`git rm ${file}`, { stdio: "inherit" });
}

function gg_tag_koro() {
    const tag = readline.question("Enter tag name: ");
    execSync(`git tag ${tag}`, { stdio: "inherit" });
}

function gg_tag_mitiao() {
    const tag = readline.question("Enter tag to delete: ");
    execSync(`git tag -d ${tag}`, { stdio: "inherit" });
}

function gg_bhashao() {
    execSync("git rebase", { stdio: "inherit" });
}

function gg_piche_jao() {
    execSync("git reset", { stdio: "inherit" });
}

function gg_kheyal_theke_jao() {
    execSync("git reset --hard", { stdio: "inherit" });
}

function gg_dorja_kholo() {
    execSync("git fetch", { stdio: "inherit" });
}

function gg_ferot_ano() {
    execSync("git restore .", { stdio: "inherit" });
}

function gg_dosh_dao() {
    const file = readline.question("Enter file to blame: ");
    execSync(`git blame ${file}`, { stdio: "inherit" });
}

function gg_ulto_koro() {
    const commit = readline.question("Enter commit to revert: ");
    execSync(`git revert ${commit}`, { stdio: "inherit" });
}

function gg_kaj_koro() {
    const commit = readline.question("Enter commit to cherry-pick: ");
    execSync(`git cherry-pick ${commit}`, { stdio: "inherit" });
}

function gg_durey_dekho() {
    execSync("git remote -v", { stdio: "inherit" });
}

function gg_notun_bondhu() {
    const name = readline.question("Enter remote name: ");
    const url = readline.question("Enter remote URL: ");
    execSync(`git remote add ${name} ${url}`, { stdio: "inherit" });
}

function gg_bondhu_biday() {
    const name = readline.question("Enter remote name to remove: ");
    execSync(`git remote remove ${name}`, { stdio: "inherit" });
}

function gg_puran_dakho() {
    execSync("git reflog", { stdio: "inherit" });
}

function gg_parthokko() {
    execSync("git diff", { stdio: "inherit" });
}

function gg_ekoi_koro() {
    execSync("git merge --squash", { stdio: "inherit" });
}

// Command mapping
const commands = {
    "surukoro": gg_surukoro,
    "kiobostha": gg_kiobostha,
    "joma": gg_joma,
    "likhefelun": gg_likhefelun,
    "pathiye_dao": gg_pathiye_dao,
    "tane_ano": gg_tane_ano,
    "nokol": gg_nokol,
    "pichone_jao": gg_pichone_jao,
    "shakha_koro": gg_shakha_koro,
    "badalkoro": gg_badalkoro,
    "lukie_rakho": gg_lukie_rakho,
    "ber_koro": gg_ber_koro,
    "jora_dao": gg_jora_dao,
    "biday": gg_biday,
    "tag_koro": gg_tag_koro,
    "tag_mitiao": gg_tag_mitiao,
    "bhashao": gg_bhashao,
    "piche_jao": gg_piche_jao,
    "kheyal_theke_jao": gg_kheyal_theke_jao,
    "dorja_kholo": gg_dorja_kholo,
    "ferot_ano": gg_ferot_ano,
    "dosh_dao": gg_dosh_dao,
    "ulto_koro": gg_ulto_koro,
    "kaj_koro": gg_kaj_koro,
    "durey_dekho": gg_durey_dekho,
    "notun_bondhu": gg_notun_bondhu,
    "bondhu_biday": gg_bondhu_biday,
    "puran_dakho": gg_puran_dakho,
    "parthokko": gg_parthokko,
    "ekoi_koro": gg_ekoi_koro,
};

// Command execution
const command = process.argv[2];
if (commands[command]) {
    commands[command]();
} else {
    console.log("Unknown command:", command);
    console.log("Available commands:", Object.keys(commands).join(", "));
}
