const achievements = require('../assets/data/achievements.json'); // Credits to colon, Slightly modified by Wylie for vault
const fs = require("fs");


const GameToName = {
    "gd": "Geometry Dash",
    "meltdown": "Geometry Dash Meltdown",
    "world": "Geometry Dash World",
    "subzero": "Geometry Dash Subzero"
}

let table = `
| Internal ID | How to unlock | Game | Reward |
|:------------|:--------------|:-----|:-------|
`;

achievements.forEach(item => {
    table += `| \`${item.trueID}\` | ${item.achievedDescription} | ${GameToName[item.game]} | ${item.rewardType} (${item.rewardID}) |\n`;
});

fs.writeFileSync("achievements_table.md", table);