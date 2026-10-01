export const digitalICStages = [
  {
    id: 'stage-1',
    step: '01',
    title: 'Digital Logic & Combinational / Sequential Foundations',
    category: 'Fundamentals',
    icon: 'Cpu',
    summary: 'Mastering gate-level architecture, boolean minimization, timing constraints, and sequential element behavior.',
    topics: [
      'Combinational logic (Adders, Multiplexers, Encoders, Decoders)',
      'Sequential elements: Edge-triggered D-Flip-Flops, latches, setup & hold times',
      'Synchronous vs Asynchronous clocking domains & metastability mitigation',
      'Timing analysis fundamentals (Propagation delays, clock skew, jitter)'
    ],
    highlight: 'Foundation for deterministic RTL behavior and cycle-accurate design.'
  },
  {
    id: 'stage-2',
    step: '02',
    title: 'FSM-Based Architecture & Verilog RTL Design',
    category: 'RTL Modeling',
    icon: 'Layers',
    summary: 'Synthesizable RTL coding in Verilog focusing on robust Finite State Machines and modular micro-architectures.',
    topics: [
      'Mealy vs Moore state machines (State encoding: One-hot, Gray, Binary)',
      'Datapath & Control Unit separation in digital blocks',
      'RTL implementations: UART (Tx/Rx/Baud Gen), FIFO buffers, ALU, SRAM interfaces',
      'Synthesizable code guidelines & avoidance of unintended latches'
    ],
    highlight: 'Engineered robust control logic for UART and peripheral controllers.'
  },
  {
    id: 'stage-3',
    step: '03',
    title: 'SystemVerilog & Advanced Verification',
    category: 'Verification',
    icon: 'ShieldCheck',
    summary: 'Transition to SystemVerilog for object-oriented testbench architectures, constrained-random stimulus, and assertions.',
    topics: [
      'Object-Oriented Programming (OOP) in SystemVerilog: Classes, polymorphism, inheritance',
      'Constrained-Random Verification (CRV) & stimulus generators',
      'Functional coverage models (Covergroups, Coverpoints, Cross-coverage)',
      'SystemVerilog Assertions (SVA) for cycle-accurate protocol compliance checking'
    ],
    highlight: 'Developed self-checking verification testbenches with 100% functional coverage.'
  },
  {
    id: 'stage-4',
    step: '04',
    title: 'AMBA Protocol Architecture (APB, AHB, AXI)',
    category: 'SoC Interconnects',
    icon: 'GitBranch',
    summary: 'In-depth implementation and verification of industry-standard ARM AMBA bus interconnect standards.',
    topics: [
      'AMBA APB (Advanced Peripheral Bus): Two-phase handshake (SETUP, ACCESS), PENABLE, PSEL, PREADY',
      'AMBA AHB (Advanced High-performance Bus): Pipelined transfers, burst modes, arbitration',
      'AMBA AXI (Advanced eXtensible Interface): Five independent channels (AR, R, AW, W, B), outstanding transactions, out-of-order execution',
      'Protocol checkers and master-slave transaction models'
    ],
    highlight: 'Implemented verified protocol bridges and verified master/slave transactions in QuestaSim.'
  },
  {
    id: 'stage-5',
    step: '05',
    title: 'UVM (Universal Verification Methodology) Fundamentals',
    category: 'Industry Methodology',
    icon: 'Sliders',
    summary: 'Structuring modular, reusable verification environments aligned with global semiconductor standards.',
    topics: [
      'UVM Component Hierarchy: uvm_sequence_item, sequencer, driver, monitor, agent, scoreboard, environment',
      'TLM (Transaction Level Modeling) FIFO communication and analysis ports',
      'Factory overrides, configuration database (uvm_config_db), and phase synchronization',
      'Scoreboard automated transaction comparison and error reporting'
    ],
    highlight: 'Built scalable UVM testbench suites for AMBA peripherals.'
  },
  {
    id: 'stage-6',
    step: '06',
    title: 'FPGA Prototyping & ASIC RTL-to-GDS Flow Awareness',
    category: 'Silicon & Synthesis',
    icon: 'Binary',
    summary: 'Understanding the complete path from RTL description to tapeout-ready silicon.',
    topics: [
      'FPGA mapping: Logic elements (LUTs), BRAMs, clock management, pin constraint files',
      'Logic synthesis: RTL elaboration, cell library mapping, timing closure constraints',
      'Physical Design flow awareness: Floorplanning, power routing, placement, clock tree synthesis (CTS), routing',
      'Signoff verification: Static Timing Analysis (STA), DRC/LVS physical verification'
    ],
    highlight: 'Bridging the conceptual gap between software logic and physical silicon implementation.'
  }
];

export const ambaProtocols = [
  {
    name: 'AMBA APB',
    fullName: 'Advanced Peripheral Bus',
    focus: 'Low-power, low-bandwidth peripheral control (UART, Timers, GPIO)',
    signals: ['PCLK', 'PRESETn', 'PADDR', 'PSELx', 'PENABLE', 'PWRITE', 'PRDATA', 'PWDATA', 'PREADY'],
    phases: ['IDLE: No transfer active', 'SETUP: Address and control asserted', 'ACCESS: PENABLE asserted, data latched when PREADY is high'],
    characteristics: 'Non-pipelined, minimalist control, zero wait-state capability'
  },
  {
    name: 'AMBA AHB',
    fullName: 'Advanced High-Performance Bus',
    focus: 'Pipelined high-bandwidth system bus for on-chip memory & DMA',
    signals: ['HCLK', 'HRESETn', 'HADDR', 'HTRANS', 'HWRITE', 'HSIZE', 'HBURST', 'HWDATA', 'HRDATA', 'HREADY'],
    phases: ['Address Phase: Address and control driven in initial clock', 'Data Phase: Read/write data driven in subsequent clock'],
    characteristics: 'Single-clock edge operation, split & burst transfers, multi-master arbitration'
  },
  {
    name: 'AMBA AXI',
    fullName: 'Advanced eXtensible Interface',
    focus: 'High-performance, high-frequency SoC interconnect with 5 independent channels',
    signals: ['Read Address (AR)', 'Read Data (R)', 'Write Address (AW)', 'Write Data (W)', 'Write Response (B)'],
    phases: ['Independent address/data handshake via VALID & READY handshake on each channel'],
    characteristics: 'Out-of-order execution, multiple outstanding addresses, unaligned data transfers'
  }
];
