# Basic Concepts

## 1. **Data Communications Basics**
- **Telecommunication(电信)**: Communication at a distance, where "tele" means distant and "communication" is the exchange of data.
- **Data**: This refers to any agreed-upon form of information shared between devices.
- **Data Communications**: It involves the exchange of data between devices using a medium such as cables.

**Five key components of data communication:**
1. **Sender**: The device that sends the data (e.g., a computer).
2. **Receiver**: The device that receives the data (e.g., another computer).
3. **Transmission medium(传输媒介)**: The pathway through which the data is sent (e.g., cables or radio waves).
4. **Message**: The data being communicated.
5. **Protocol(协议)**: The rules governing how the data is transmitted and interpreted.

## 2. **Network Protocols**
- **Protocol**: A set of rules for how data is sent, received, and understood between devices.
  - It defines the data format, the order in which it is sent, and the actions taken upon reception.

## 3. **Data Flow Modes**
- **Simplex**: Data flows in one direction only (like a radio broadcast).
- **Half-duplex**: Data flows in both directions but one at a time (like walkie-talkies).
- **Full-duplex**: Data flows in both directions simultaneously (like a phone call).

## 4. **Analog vs Digital Signals**
- **Analog signals**: Continuous signals that vary over time, such as sound waves.
- **Digital signals**: Discrete signals represented by bits (0s and 1s). These signals are more resilient to interference and easier to process.

## 5. **Digital Encoding Schemes**
There are several encoding schemes to represent data in digital signals:
- **Non-return to zero (NRZ)**: 1 is a high voltage, 0 is a low voltage, but long sequences of 1s or 0s may cause synchronization issues. 没有错误修复与可能存在同步问题
- **Manchester encoding**: A clock encoding technique where a 0 is represented by a low-to-high transition, and a 1 by a high-to-low transition. 可以错误修复,可以同步,比特转换双倍带宽
- **4B/5B encoding**: A scheme that encodes 4 bits of data into 5 bits, helping ensure synchronization. 可以错误修复,可以同步,传输需要更多

## 6. **Modulation Techniques for Analog Signals**
数字信号转模拟信号
When transmitting digital data over analog mediums, modulation is used to encode the data onto a carrier wave.
- **Amplitude Modulation (AM)**: The amplitude of the carrier wave changes based on the data.   
- **Frequency Modulation (FM)**: The frequency of the carrier wave changes based on the data.
- **Phase Modulation (PM)**: The phase of the carrier wave changes based on the data. 1跳变0不变  

## 7. **Converting Analog to Digital (Pulse Code Modulation)**
模拟信号转数字信号
- **Pulse Code Modulation (PCM)**: A method to digitize analog signals. It samples the signal at regular intervals, each sample is quantized into a digital value.
  - This process is governed by **Nyquist’s Theorem**, which states that a signal can be perfectly reconstructed if it is sampled at twice its highest frequency.

理论上: $$B=2F(log_2M)$$
事实上,即不忽略噪声(香农定理):
$$B=F(log_2{(1+SNR)})$$
其中SNR为信噪比:
$$SNR=10^{SNR_{db}/10}=\frac{S}{N}$$
## 8. **Network Types**
- **Local Loop**: last mile
- **LAN (Local Area Network)**: Connects devices in a small geographic area (e.g., a building), and is fast and reliable.
- **MAN (Metropolitan Area Network)**: Connects LANs within a city or region.
- **WAN (Wide Area Network)**: Covers a large geographic area, often connecting cities or countries.
- **Internetworks**

## 9. **Network Topologies**
- **Bus topology**: All devices share a common communication line, but a single failure can take down the entire network.
- **Ring topology**: Devices are connected in a circle, and data travels in one direction.
- **Star topology**: All devices are connected to a central hub. It's easy to manage, but the hub becomes a single point of failure.
- **Tree Topology**
- **Mesh topology**: Every device is connected to every other device, making it highly reliable but complex to implement.

## 10. **The OSI and TCP/IP Models**
- **OSI Model**: A reference model with seven layers to structure how data is communicated over a network:
  1. **Physical Layer**: Handles raw data transmission over the physical medium.
  2. **Data Link Layer**: Ensures reliable transmission by handling error correction and frame synchronization.
  3. **Network Layer**: Manages routing of data between devices on different networks.
  4. **Transport Layer**: Ensures reliable data transfer, breaking data into smaller units.
  5. **Session Layer**: Manages sessions between devices, like login/logout functions.
  6. **Presentation Layer**: Deals with the syntax and format of data (e.g., encryption and compression).
  7. **Application Layer**: Provides network services to the end-users (e.g., email, file transfer).
  
- **TCP/IP Model**: A more streamlined version focusing on practical implementations of networking:
  1. **Network Interface**: Combines physical and data link layers.
  2. **Internet**: Routes data across different networks (equivalent to the OSI network layer).
  3. **Transport**: Provides end-to-end communication, handling flow control and error correction.
  4. **Application**: Includes protocols like HTTP and FTP that support end-user applications.

## 11. **Network Protocol Hierarchies**
- Network layers help manage complexity by breaking down networking tasks into smaller, manageable parts. Each layer provides services to the layer above it, making the network flexible and easier to maintain.

