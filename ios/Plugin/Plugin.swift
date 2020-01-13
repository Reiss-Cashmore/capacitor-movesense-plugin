import Capacitor
import Foundation

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(Movesense)
public class Movesense: CAPPlugin {
    let mds = MdsService()
    var subscriptions: [String: String] = [:]

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value,
        ])
    }

    @objc(connect:)
    func connect(_ call: CAPPluginCall) {
        let address = call.getString("address") ?? ""
        mds.connectDevice(address)
    }
}