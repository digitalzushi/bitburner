import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    /**
     * Syntax: run reboot-all-servers.js [HOST]
     * 
     * Runs the 'run-hack-server.js' file on HOST for all player owned servers.
     */
    const target = ns.args[0] ? ns.args[0] : 'joesguns'
    let n = 0
    while (n < 25) {
        const host = 'pserv-' + n
        if (ns.serverExists(host)) {
            ns.killall(host)
            await ns.run('run-hack-server.js', 1, host, target)
        }
        ++n
        // await ns.sleep(60000)
    }
}