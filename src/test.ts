import { NS } from '@ns'
import { deepEqual } from 'assert'
import { deepScan } from '/deep-scan'

export async function main(ns : NS) : Promise<void> {
    //
    // const host = ns.args[0]
    ns.exec('solve-contract.js', 'n00dles', 1)
}