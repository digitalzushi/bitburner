import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    /*
    things to when restarting with augmentations
    run infiltrate script

    */
    await ns.run('watcher.js')
    await ns.run('infiltrate.js')
    await ns.run('botnet.js')
    await ns.run('purchase-servers.js')

    // check number of available threads
    const scriptRAM = ns.getScriptRam('hack.js')
    const maxRAM = ns.getServerMaxRam('home')
    const usedRAM = ns.getServerUsedRam('home')
    const homeHackThreads = Math.floor((maxRAM - usedRAM) * 0.85 / scriptRAM) // save 15% RAM for other scripts
    const homeHackThread = Math.floor(homeHackThreads / 60)
    let i = 0
    while (i < 60) {
        await ns.run('hack.js', homeHackThread, 'joesguns', i)
        await ns.sleep(1000)
        ++i
    }
    //await ns.purchaseTor()
    
}