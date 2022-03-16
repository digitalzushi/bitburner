import { NS } from '@ns'
import { deepScan } from '/deep-scan'

export async function main(ns : NS) : Promise<void> {
    const serverList = deepScan(ns)
    const threads = 100
    for (const server of serverList) {
        if (ns.hasRootAccess(server)) {
            const files = ns.ls(server)
            for (const file of files) {
                if (RegExp('contract-\\d+').test(file)) {
                    ns.tprintf(`INFO: ${file} found on ${server}`)
                    ns.run('solve-contract.js', threads, server, file)
                }
                await ns.sleep(1000)
            }
        }
    }
}