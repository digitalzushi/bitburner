import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    /** 
     * Syntax: run purchase-server [SERVER] [RAM]
     * 
     * Defaults to 4096 GB RAM
    */
    const serverName = ns.args[0]
    const serverRam = ns.args[1] ? ns.args[1] : 4096
    const availableMoney = ns.getServerMoneyAvailable('home')
    const serverRamCost = ns.getPurchasedServerCost(serverRam)
    if (ns.serverExists(serverName)) {
        ns.tprintf(`ERROR: ${serverName} already exists!`)
        ns.exit()
    } else {
        ns.tprint(serverRam)
        if (availableMoney >= serverRamCost) {
            await ns.purchaseServer(serverName, serverRam)
        }
    }
}