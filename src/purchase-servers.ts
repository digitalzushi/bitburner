import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    const scriptName = 'hack.js'
    const availableMoney = ns.getServerMoneyAvailable('home')
    const serverRamCost = ns.getPurchasedServerCost(serverRam)
    let i = 0
    while (i < ns.getPurchasedServerLimit()) {
        if ((availableMoney >= serverRamCost)) {
            ns.run('purchase-server.js', 1, 'pserv-' + i)
            await ns.scp(scriptName, newHost)
            ns.run('run-hack-server.js', 1, 'joesguns')
            ++i
        }
        await ns.sleep(1000)
    }
}