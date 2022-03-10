import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    //infiltrate.js is intended to be used to run all port programs as needed.
    const fileList = ["BruteSSH.exe", "FTPCrack.exe", "relaySMTP.exe", "HTTPWorm.exe", "SQLInject.exe"]
    const serverList = ns.scan("home");
    for (const host of serverList) { // cycle servers connected to home
        if (!ns.hasRootAccess(host)) { // checking for root access
            let openedPorts = 0
            const requiredPorts = ns.getServerNumPortsRequired(host)
            ns.tprintf(`INFO: Attempting to infiltrate ${host}...`)
            for (const file in fileList) { // cycle through programs
                if (ns.fileExists(fileList[file], "home")) {
                    switch(parseInt(file)) { // need to parseInt() since for loop returns string
                        case 0:
                            ns.brutessh(host)
                            break
                        case 1:
                            ns.ftpcrack(host)
                            break
                        case 2:
                            ns.relaysmtp(host)
                            break
                        case 3:
                            ns.httpworm(host)
                            break
                        case 4:
                            ns.sqlinject(host)
                            break
                    }
                    ++openedPorts
                }
            }
            if (requiredPorts <= openedPorts) {
                ns.nuke(host)
                ns.tprintf(`INFO: ${host} infiltrated.`)
            } else {
                ns.tprintf(`WARNING: ${requiredPorts - openedPorts} ports still need opened before running NUKE.exe on ${host}`)
            }
        }
    }
}