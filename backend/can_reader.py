import can
import time
import threading


class CANReader:
    def __init__(self, channel="PCAN_USBBUS1", bitrate=500000):
        self.channel = channel
        self.bitrate = bitrate
        self.running = False
        self.thread = None
        self.bus = None
        self.is_connected = False
        self.cells_voltage = [0.0] * 13
        self.ntc_temps = [0.0] * 4

    def get_cells_voltage(self):
        return self.cells_voltage

    def get_ntc_temps(self):
        return self.ntc_temps

    def start(self):
        if not self.running:
            self.running = True
            self.thread = threading.Thread(target=self.read_loop, daemon=True)
            self.thread.start()

    def stop(self):
        self.running = False
        if self.thread and self.thread.is_alive():
            self.thread.join()

    def read_loop(self):
        print("Trying to connect CAN bus on", self.channel)
        try:
            self.bus = can.Bus(channel=self.channel, interface="pcan", bitrate=self.bitrate)
            self.is_connected = True
            print("CAN bus connected successfully on", self.channel)
        except Exception as e:
            print("CAN bus connection failed:", e)
            self.is_connected = False
            return

        while self.running:
            try:
                msg = self.bus.recv(timeout=0.1)
                if msg:
                    print(f"Received CAN msg: ID={hex(msg.arbitration_id)} DATA={msg.data.hex()}")
                    if msg.arbitration_id == 0x205 and len(msg.data) == 8:
                        for i in range(4):
                            val = int.from_bytes(msg.data[i * 2:i * 2 + 2], "big") / 1000
                            self.cells_voltage[i] = val
                    elif msg.arbitration_id == 0x206 and len(msg.data) == 8:
                        for i in range(4):
                            val = int.from_bytes(msg.data[i * 2:i * 2 + 2], "big") / 1000
                            self.cells_voltage[4 + i] = val
                    elif msg.arbitration_id == 0x207 and len(msg.data) == 8:
                        for i in range(4):
                            val = int.from_bytes(msg.data[i * 2:i * 2 + 2], "big") / 1000
                            self.cells_voltage[8 + i] = val
                    elif msg.arbitration_id == 0x208 and len(msg.data) >= 2:
                        val = int.from_bytes(msg.data[0:2], "big") / 1000
                        self.cells_voltage[12] = val
                    elif msg.arbitration_id == 0x209 and len(msg.data) == 8:
                        for i in range(4):
                            val = int.from_bytes(msg.data[i * 2:i * 2 + 2], "big") / 10
                            self.ntc_temps[i] = val
            except Exception as e:
                print("CAN read error:", e)
                self.is_connected = False
                break
            time.sleep(0.05)