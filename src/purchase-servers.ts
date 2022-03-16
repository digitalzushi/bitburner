import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    const serverRam = ns.args[1] ? ns.args[1] : 4096
    const availableMoney = ns.getServerMoneyAvailable('home')
    const serverRamCost = ns.getPurchasedServerCost(serverRam)
    let i = 0
    while (i < ns.getPurchasedServerLimit()) {
        if ((availableMoney >= serverRamCost)) {
            const host = 'pserv-' + i
            ns.run('purchase-server.js', 1, host)
            // await ns.scp(scriptName, host, 'home')
            // ns.run('run-hack-server.js', 1, 'joesguns')
            ++i
        }
        await ns.sleep(1000)
    }
}