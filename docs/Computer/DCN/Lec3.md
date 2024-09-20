# Data link Layer

## Data link control

- Framing
- Flow control
- Error control

### 1. **Framing**

- **Character Count**: The frame's size is specified in the header.
- **Flag Bytes with Byte Stuffing**
- **Starting and ending flags with bit stuffing**

### 2. **Error Control**

异常检验

- **Parity Checks**(奇偶校验): 多一个校验位表示1的奇偶
- **Two-Dimensional Parity**(二维奇偶校验)
- **Cyclic Redundancy Check (CRC)**: Treats the data as a polynomial, divides it by a predefined polynomial, and checks for remainders to detect errors. 文字描述过程比较复杂,看道题懂了,需要双方先预设一个校验的多项式

### 3. **Error Correction**

异常修正

- **Hamming Codes**(汉明编码): A more advanced error correction method that uses redundant bits to detect and correct single-bit errors. These codes are designed to correct errors based on the "Hamming Distance," which measures how many bit positions differ between two codewords.
  - $2^k>=n+k+1$
  - 我们以从左到右(从小到大)的偶校验做题
  - 校验位即为2的幂

### 4. **Flow Control**
流量控制
- Feedback-based flow control
   - **Stop-and-Wait Protocol**: The sender waits for acknowledgment before sending the next frame. It’s a simple but inefficient method due to potential delays.This kind of protocols is called **Automatic Repeat reQuest (ARQ)** 一个一个的发
   - **Sliding Window Protocol**: A more efficient approach that allows the sender to transmit multiple frames before needing an acknowledgment, adjusting based on network conditions. 滑窗,重点是失败了如何回退
     - **Go-Back-N Protocol**: Requires retransmission of a set of frames if an error is detected.
     - **Selective Repeat**: Only the erroneous frames are retransmitted, making it more efficient.
- Rate-based flow control

## Multiple-access Protocols

### 5. **Channelization Protocols**
- **FDMA** (Frequency-Division Multiple Access): Divides the available bandwidth into frequency bands for different stations.
- **TDMA** (Time-Division Multiple Access): Allocates time slots to stations for transmission.
- **CDMA** (Code-Division Multiple Access): Uses unique codes to distinguish between signals sent by different stations.

扩展频谱:   防窃听? 码分地址?
  - Frequency-hopping spread spectrum(跳频广播) 
  - Direct Sequence Spread Spectrum(直接序列扩展频谱): 基于码片序列的异或

### 6. **Random Access Protocols**
   - **Aloha**: Stations send data whenever they need to, but this can lead to collisions.(直接发)
   - **Slotted Aloha**: Time is divided into slots, which reduces collisions.(分时直接发)
   - **Carrier Sense Multiple Access (CSMA)**: Stations sense the channel before transmitting, reducing collisions.(听听有没有人在发送)
     - Persistent: 一直监听信道,一旦信道空闲就尝试发消息
     - Non: 信道忙,会随机休息一段时间,再重新监听
     - p-persitent: 信道空闲有p的概率发送/等待
     - **CSMA with Collision Detection (CSMA/CD)**: Sends data while monitoring the channel; if a collision is detected, the transmission is stopped and retried after a random time.与上面的分类不同

### 7. **Controlled-Access Protocols**
   - **Polling**: A master node polls each station to give it permission to transmit.
   - **Token Passing**: A token is passed around, and only the station holding the token can transmit, preventing collisions.
