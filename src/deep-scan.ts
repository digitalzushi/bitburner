import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    deepScan(ns)
}

export function deepScan(ns : NS) : Array {
    const serverList = ['home']
    for (const server of serverList) {
        const connectedServerList = ns.scan(server)
        for (const nextServer of connectedServerList) {
            if (!serverList.includes(nextServer) && !nextServer.includes('pserv-')) { 
                serverList.push(nextServer)
            }
        }
    }
    return serverList.splice(1, serverList.length)
}