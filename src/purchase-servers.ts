import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    const ram = 1024;
    const scriptName = "hack.js";
    const toServer = "joesguns";
    let i = 0;
    let newHost;

    while (i < ns.getPurchasedServerLimit()) {
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            newHost = ns.purchaseServer("pserv-" + i, ram);
            await ns.scp(scriptName, newHost);
            for (let n = 0; i < 4; i++) {
                await ns.sleep(5000);
                await ns.exec(scriptName, newHost, 96, toServer, n);
            }
            ++i;
        }
        await ns.sleep(1000);
    }
}