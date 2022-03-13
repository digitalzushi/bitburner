import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    const x = ns.args[0] ? ns.args[0] : 'false'
    ns.tprint(x)
}