import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    const fileList = ['botnet.js', 'infiltrate.js']
    for (const server of serverList) {
        const scanServer = ns.scan(server)
        await ns.tprintf(`INFO: botnet spread to ${server}\nServers connected to ${server}: ${scanServer}`)
        // for (const file of fileList) {
        //     if (!ns.fileExists(file, server)) {
        //         await ns.scp(file, 'home', server)
        //         await ns.exec(file, server)
        //     }
        // }
    }
}
