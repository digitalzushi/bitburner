import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    //
    const zeroPortServer = ["n00dles", "foodnstuff", "sigma-cosmetics", 
    "joesguns", "hong-fang-tea", "harakiri-sushi"];

    const onePortServer = ["iron-gym"];

    for (const host of ns.scan("home")) {
        await ns.scp("infiltrate.js", host);
        await ns.run("infiltrate.js", 1, host);
    }
}