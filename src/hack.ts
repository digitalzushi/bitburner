import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    const host = ns.args[0];
    const security = ns.getServerMinSecurityLevel(host) + 5;
    const money = ns.getServerMaxMoney(host) * 0.75;
    if (ns.fileExists("BruteSSH.exe", "home")) {
        ns.brutessh(host);
    }
    if (!ns.hasRootAccess) {
        ns.nuke(host);
    }
    while (true) {
        if (ns.getServerSecurityLevel(host) > security) {
            await ns.weaken(host);
        } else if (ns.getServerMoneyAvailable(host) < money) {
            await ns.grow(host);
        } else {
            await ns.hack(host);
        }
    }
}