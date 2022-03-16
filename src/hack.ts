import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    /**
     * Syntax: run hack.js [HOST]
     */
    const host = ns.args[0];
    const security = ns.getServerMinSecurityLevel(host) + 5;
    const money = ns.getServerMaxMoney(host) * 0.75;
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