import { NS } from '@ns'
import { deepScan } from '/deep-scan'

export async function main(ns : NS) : Promise<void> {
    const serverList = deepScan(ns)
    for (const server of serverList) {
        // ns.tprint(server)
        ns.run('infiltrate.js', 1, server)
        await ns.sleep(100)
    }
}