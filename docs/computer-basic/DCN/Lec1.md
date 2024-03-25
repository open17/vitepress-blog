# DCN Lec1

## Data Info
Data is a collection of values, symbols, or characters that 
represents information
### Two kinds of data
- Qualitative data (Non-numerical data) 定类数据
- Quantitative data 定量数据
  - Discrete data
    - Binary data 
    - Limited values(finite values)
  - Continuous data[^1]

[^1]: This means Any value in a certain range AND it is a unlimited values, infinite values 

## Communication
### Message
the information (data) to be communicated(text, numbers, pictures, audio, and video,...)
### Sender
the device that sends the data message(a computer, workstation, telephone handset,video camera, and so on)
### Receiver
the device that receives the message.
### Transmission medium
the physical path by which a message travels from sender to receiver.
(twisted-pair wire, coaxial cable, fiber-optic cable, and radio waves)

### Protocol
a set of rules that govern data communications
:::success expample
Without a protocol, two devices may be connected but not communicating, just as a person speaking French cannot be understood by a person who speaks only Japanese.
:::

## network protocol
### Info
:::tip
A protocol is an agreement between the communicating parties on how communication is to proceed
:::

- Communication node is machine
- All communication is controlled by protocols 
- Protocols define formats, order of sending and receiving of messages, and the actions that the reception initiates

:::warning For example -HTTP
HTTP (HyperText Transfer Protocol) specifies rules by which the client and the server interact so as to retrieve a document.
The protocol assumes the client and the server can exchange messages directly.
The client software needs to set up a two-way connection prior to the HTTP request.
:::

## Elements of a Protocol

### Syntax
- Structure or format of the data
- Indicates how to read the bits - field delineation
### Semantics(语义)
- Interprets the meaning of the bits
- Knows which fields define what action
### Timing
- When data should be sent
- Speed at which data should be sent or speed at which it is being received.

## Data flow

### simplex
Keyboards and traditional monitors are examples of simplex
devices. The keyboard can only introduce input; the monitor can
only accept output

### half-duplex

The half-duplex mode is used in cases where there is no need for
communication in both directions at the same time; the entire
capacity of the channel can be utilized for each direction

### full-duplex

One common example of full-duplex communication is the
telephone network


## Signals

### Analog signal(模拟信号)

Analog signals are continuous electrical signals that vary in time.

### Digital signal(数字信号)

Digital signals are non-continuous. They consist of pulses
or digits with discrete levels or values. Digital signals usually
have two amplitude levels such as 1 or -1, HIGH or LOW

### Advantages of Digital Signals

Less sensitive to the interferences (e.g., noise, magnetic field)
Easier for further processing (e.g., error correction, storage, etc.)

## Digital Encoding Schemes

### 非归零 (NRZ)
- 优点：
  1. 实现简单，易于理解。
  2. 对于高速数据传输来说，能够最大程度地利用可用带宽。
- 缺点：
  1. 缺乏时钟恢复机制。
  2. 无法检测数据中的错误。

### 曼彻斯特 (Manchester)
- 优点：
  1. 提供时钟恢复机制，确保可以从传输信号中恢复数据。
  2. 每个数据比特都与一个信号过渡相关联，因此可以进行错误检测。
- 缺点：
  1. 带宽利用不够充分，因为过渡消耗了一半的可用带宽。
  2. 实现相对于NRZ而言更为复杂。

### 4B/5B编码
- 优点：
  1. 每个码字是唯一的，因此可以进行错误检测。
  2. 提供时钟恢复机制。
  3. 与曼彻斯特相比，带宽利用更佳。
- 缺点：
  1. 相对于NRZ和曼彻斯特，实现更为复杂。
  2. 需要额外的硬件和处理能力。