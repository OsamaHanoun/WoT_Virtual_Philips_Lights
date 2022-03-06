// const bluetooth = require("node-bluetooth");
// const device = new bluetooth.DeviceINQ();
// device.on("found", function found(address, name) {
//   console.log("Found: " + address + " with name " + name);
//   device.scan();
// });
// console.log(Buffer.from("0x"));
// device.scan();

// const noble = require("@abandonware/noble");
// noble.on("stateChange", (state) => {
//   console.log(state);
//   if (state === "poweredOn") {
//     console.log("Scanning");
//     noble.startScanning([], true);
//   } else {
//     noble.stopScanning();
//   }
// });
// noble.on("discover", function (peripheral) {
//   console.log(peripheral.address);
// const advertisement = peripheral.advertisement;
// const localName = advertisement.localName;
// const txPowerLevel = advertisement.txPowerLevel;
// const manufacturerData = advertisement.manufacturerData;
// const serviceData = advertisement.serviceData;
// const serviceUuids = advertisement.serviceUuids;
// });
async function start() {
  const { createBluetooth } = require("node-ble");
  const { bluetooth, destroy } = createBluetooth();
  const adapter = await bluetooth.defaultAdapter();
  if (!(await adapter.isDiscovering())) await adapter.startDiscovery();
  const device = await adapter.waitDevice("C8:84:C2:D0:59:A9");
  await device.connect();
  const gattServer = await device.gatt();

  // await characteristic1.writeValue(Buffer.from("0x01"));
  // console.log("done1");
  // await characteristic1.writeValue(Buffer.from("0x00"));
  // console.log("done2");
  // await characteristic1.writeValue(Buffer.from("0x1"));
  // console.log("done3");

  /* service2 932c32bd-0000-47a2-835a-a8d455b859dd*/
  const service2 = await gattServer.getPrimaryService(
    "932c32bd-0000-47a2-835a-a8d455b859dd"
  );
  // const characteristic_2_1 = await service2.getCharacteristic(
  //   "932c32bd-0001-47a2-835a-a8d455b859dd"
  //  );
  const characteristic_2_2 = await service2.getCharacteristic(
    "932c32bd-0002-47a2-835a-a8d455b859dd"
  );
  const characteristic_2_3 = await service2.getCharacteristic(
    "932c32bd-0003-47a2-835a-a8d455b859dd"
  );
  const characteristic_2_4 = await service2.getCharacteristic(
    "932c32bd-0004-47a2-835a-a8d455b859dd"
  );
  // const characteristic_2_5 = await service2.getCharacteristic(
  //   "932c32bd-0007-47a2-835a-a8d455b859dd"
  // );

  // await characteristic_2_2.writeValue(Buffer.from("0x00")
  // );
  let r = await characteristic_2_2.readValue();
  let r3 = await characteristic_2_3.readValue();
  let r4 = await characteristic_2_4.readValue();

  console.log("##############", r);
  console.log("##############", r3);
  console.log("##############", r4);

  // console.log("##############", r.toString("utf16le"));
  // console.log("##############", r.toString("base64"));
  // console.log("##############", r.toString("base64url"));
  // console.log("##############", r.toString("hex"));
  // console.log("##############", r.toString("ascii"));
  // console.log("##############", r.toString("latin1"));
  // console.log("##############", r.toString("binary"));
  // console.log("##############", r.toString("ucs2"));
  // await characteristic_2_5.startNotifications();
  // characteristic_2_5.on("valuechanged", (buffer) => {
  //   console.log(buffer.toString());
  // });
  //  await characteristic2.writeValue();
  //  await characteristic3.writeValue();
  // await characteristic4.writeValue();
  // let result1 = await characteristic1.writeValue();
  // console.log(result1.toString());
  // let result2 = await characteristic2.readValue(); Not connected
  // console.log(result2.toString());
  // let result3 = await characteristic3.readValue(); Not connected
  // console.log(result3.toString());Not connected
  // let result4 = await characteristic4.readValue();
  // console.log(result4.toString());
  /* end */
  // /* b8843add-0000-4aa1-8794-c3f462030bda */
  // const service1 = await gattServer.getPrimaryService(
  //   "b8843add-0000-4aa1-8794-c3f462030bda"
  // );
  // const characteristic1 = await service1.getCharacteristic(
  //   "b8843add-0004-4aa1-8794-c3f462030bda"
  // );
  // const characteristic2 = await service1.getCharacteristic(
  //   "b8843add-0003-4aa1-8794-c3f462030bda"
  // );
  // const characteristic3 = await service1.getCharacteristic(
  //   "b8843add-0002-4aa1-8794-c3f462030bda"
  // );
  // const characteristic4 = await service1.getCharacteristic(
  //   "b8843add-0001-4aa1-8794-c3f462030bda"
  // );
  // // let result1 = await characteristic1.readValue(); Read not permitted
  // // console.log(result1.toString());
  // // let result2 = await characteristic2.readValue(); Read not permitted
  // // console.log(result2.toString());
  // // let result3 = await characteristic3.readValue(); Read not permitted
  // // console.log(result3.toString());
  // let result4 = await characteristic4.readValue();
  // console.log(result4.toString());
  // /* end */

  /* service4 0000180a-0000-1000-8000-00805f9b34fb*/
  // const service4 = await gattServer.getPrimaryService(
  //   "0000180a-0000-1000-8000-00805f9b34fb"
  // );
  // const characteristic_4_1 = await service4.getCharacteristic(
  //   "00002a28-0000-1000-8000-00805f9b34fb"
  // );
  // const characteristic_4_2 = await service4.getCharacteristic(
  //   "00002a24-0000-1000-8000-00805f9b34fb"
  // );
  // const characteristic_4_3 = await service4.getCharacteristic(
  //   "00002a29-0000-1000-8000-00805f9b34fb"
  // );
  // let result1 = await characteristic_4_1.readValue();
  // console.log(result1.toString());
  // let result2 = await characteristic_4_2.readValue();
  // console.log(result2.toString());
  // let result3 = await characteristic_4_3.readValue();
  // console.log(result3.toString());
  /* end */

  console.log("done");
}
start();
