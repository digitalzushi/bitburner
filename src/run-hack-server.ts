import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    /**
     * Syntax: run run-hack-server.js [HOST] [TARGET] 
     * 
     * Defaults to joesguns if no target is selected
    */
    const host = ns.args[0]
    const target = ns.args[1] ? ns.args[1] : 'joesguns'
    const availableRam = Math.floor(ns.getServerMaxRam(host) - ns.getServerUsedRam(host))
    const totalThreads = Math.floor(availableRam / ns.getScriptRam('hack.js'))
    const processes = 60
    const threads = Math.floor(totalThreads / processes)
    if (ns.args[0] && ns.args[1]) {
        if (!ns.fileExists('hack.js', host)) {
            await ns.scp('hack.js', 'home', host)
        }
        ns.tprintf(`INFO: Starting hack on ${target} from ${host} with ${threads} threads on ${processes} processes`)
        let j = 0
        while (j < 60) {
            await ns.exec('hack.js', host, threads, target, j)
            await ns.sleep(1000)
            ++j
        }
    }
}