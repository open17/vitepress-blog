# Network and Transport Layer

## IP

- IP is a protocol which governs the data format of packets sent over the Internet.
- The main functions provided by IP are addressing and network routing.


### IPv4

- address: 32bits
- header size: 20bytes+opt
- checksum
- Version
- Type of service
- Total length
- Time to live
- Source address, destination address
- protocol

### IPv6

- 40-byte header
- 16-byte address
- Version
- Traffic class
- Flow label
- Payload length
- Hop limit
- Next header


## Transition

- Dual stack
- Tunneling strategy
- Header translation strategy


## Routing

- Delivery
- Forwarding

-  Shortest Path Routing
   -  Dijkstra
- Flooding Algorithm
- Distance Vector Routing
  - Count-to-Infinity Problem
- Link State Routing 
  - Learning about the neighbors
  - Measuring Line Cost
  - Building Link State Packets
  - Distributing the Link State Packets
  - Computing the new routes
- Broadcast and Multicast Routing
  - emulated using multiple point-to-point unicast
connections
  - Each router contains either a list of destinations or a bit map
indicating the desired destinations. When a packet arrives at
a router, the router checks all the destinations to determine
the set of route lines that will be needed.
- Hierarchical Routing
  -  divided into regions
  -  Each router knows the internal structure within its own region,
but only knows the inter-connection points of other regions.

## TCP(Transport Control Protocol)

- When a sender transmits a segment, it also starts a timer.
- When the segment arrives at the destination, the receiving
TCP entity sends back a segment (with data if any) bearing
an acknowledgement number equal to the next sequence
number it expects to receive.
- If the sender’s timer goes off before the acknowledgement is
received, the sender transmits the segment again.

### Header

- Source port and destination port
- Sequence number and acknowledgement number
- TCP header length
- Six 1-bit flags
- Window size
- Checksum
- Options


## congestion control


### Data Traffic

The main focus of congestion control and quality of
service is data traffic.

- Open-loop(预防)
- Closed-loop(缓解)
    - Backpressure(一个一个向前)
    - Choke packet(直接最前)

### Metrics Used to Monitor a Subnet for Congestion

Percentage of all packets discarded for lack of buffer
space;
• Average of queue lengths;
• Number of packets that time out and are retransmitted;
• Average packet delay;
• Standard deviation of packet delay, etc

### Load Shedding

discard packets: Random manner/ Application-based or algorithm-based

- RED Algorithm

### Jitter Control

抖动控制

### QOS

Techniques for achieving good quality of service:

- Buffering;
- Traffic shaping;
- Resource reservation;
- Admission control.