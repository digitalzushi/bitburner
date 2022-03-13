import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    if (ns.args[0]) {
        const host = ns.args[0]
        if (ns.serverExists(host)) {
            ns.killall(host)
            ns.deleteServer(host)
            ns.tprintf(`INFO: ${host} has been deleted.`)
        } else {
            ns.tprintf(`WARNING: ${host} does not exist`)
            ns.exit()
        }
    } else {
        ns.tprint('WARNING: Please enter the name of the server you wish to delete.')
        ns.exit()
    }
}