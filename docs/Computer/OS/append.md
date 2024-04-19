# Append-words

## Cp5. CPU Scheduling

### 概念
- preemptive: 强占
- Schedule: 调度
- CPU utilization(利用率): keep the CPU as busy as possible
- Response time
- Turnaround time: 运转周期
- Convoy effect(护送效应): short process behind long process
- Brust time: 运行时间
- Round Robin (RR)
- time quantum(定额)
- Starvation: low priority processes may never execute
- Aging: as time progresses increase the priority of the process

### 进程调度
- FCFS
- Shortest-Job-First
- Shortest-remaining-time-first(preemptive version of SJF)
- Multilevel Queue: RR+FCFS
- Multilevel Feedback Queue

### Thread Scheduling
- process-contention scope
- system-contention scope

### Multiple-Processor Scheduling
- Multiprocessor
- Symmetric multiprocessing (SMP): each processor is self scheduling
- memory stall (延迟)
- Chip-multithreading (CMT)
- Load balancing
- Push/Pull migration
- Processor affinity

### Real-Time CPU Scheduling

- Soft real-time systems
- Hard real-time systems