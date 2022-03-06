const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").createServer(app);
async function startConnection(params) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  const { createBluetooth } = require("node-ble");
  const { bluetooth, destroy } = createBluetooth();
  const adapter = await bluetooth.defaultAdapter();
  if (!(await adapter.isDiscovering())) await adapter.startDiscovery();
  const device = await adapter.waitDevice("C8:84:C2:D0:59:A9");
  await device.connect();
  const gattServer = await device.gatt();
  const service4 = await gattServer.getPrimaryService(
    "0000180a-0000-1000-8000-00805f9b34fb"
  );
  const characteristic_4_1 = await service4.getCharacteristic(
    "00002a28-0000-1000-8000-00805f9b34fb"
  );
  const characteristic_4_2 = await service4.getCharacteristic(
    "00002a24-0000-1000-8000-00805f9b34fb"
  );
  const characteristic_4_3 = await service4.getCharacteristic(
    "00002a29-0000-1000-8000-00805f9b34fb"
  );
  app.get("/properties/version", async (req, res) => {
    let version = await characteristic_4_1.readValue();
    res.send(version.toString());
  });
  app.get("/properties/model", async (req, res) => {
    let model = await characteristic_4_2.readValue();
    res.json(model.toString());
  });
  app.get("/properties/manufacturer", async (req, res) => {
    let manufacturer = await characteristic_4_3.readValue();
    res.json(manufacturer.toString());
  });
}
startConnection();
http.listen(3001, () => console.log(`Listening on port ${3001}`));
