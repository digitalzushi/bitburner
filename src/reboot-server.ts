import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    const host = ns.args[0]
    const target = ns.args[1] ? ns.args[1] : 'joesguns'
    if (ns.serverExists(host)) {
        ns.killall(host)
        ns.run('infiltrate.js', 1, target)
        await ns.run('run-hack-server.js', 1, host, target)
    }
}