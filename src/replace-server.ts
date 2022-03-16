import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    /**
     * Syntax: run replace-server.js [SERVER] [RAM] [TARGET]
     * 
     * Replaces selected server. Name and RAM required, but target optional as it 
     * allows you to run a new targeted hack if you wanted.
     */
    const serverName = ns.args[0]
    const ram = ns.args[1]
    const currentServerRam = ns.getServerMaxRam(serverName)
    const target = ns.args[2] ? ns.args[2] : 'joesguns'
    if (ram) {
        // TO-DO
        // replace current running scripts via PID
        if (ram > currentServerRam) {
            await ns.run('del-server.js', 1, serverName)
            await ns.run('purchase-server.js', 1, serverName, ram)
            await ns.run('run-hack-server.js', 1, serverName, target)
        } else {
            ns.tprintf(`ERROR: Upgrade ${serverName} higher than ${currentServerRam} GB`)
            ns.exit()
        }
    } else {
        ns.tprintf(`ERROR: Enter a RAM value in gigabytes`)
        ns.exit()
    }
}