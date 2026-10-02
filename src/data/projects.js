import batsmanImg from '../assets/images/batsman_pro.png';
import verificationImg from '../assets/images/digital_verification.png';
import cacheImg from '../assets/images/cache_simulator.png';
import flutterImg from '../assets/images/flutter_apps.png';
import riscvImg from '../assets/images/riscv_processor.jpg';

// ============================================================================
// LEVEL 1: FEATURED DIGITAL IC / ENGINEERING PROJECTS
// Strongest visual priority in Engineering & Digital IC portfolio
// ============================================================================
export const featuredEngineeringProjects = [
  {
    id: 'riscv-rtl-to-gds',
    title: '32-bit RISC-V RTL-to-GDSII Core',
    subtitle: 'Silicon Design & Micro-Architecture',
    category: 'Digital IC • RISC-V • Physical Design',
    tag: 'Flagship Engineering',
    tier: 'featured-engineering',
    image: riscvImg,
    summary: 'Design, cycle-accurate simulation, and physical design ASIC flow awareness for a 32-bit RISC-V processor core from synthesizable Verilog netlist to tapeout considerations.',
    myRole: 'RTL & Physical Design Enthusiast',
    architecture: 'RV32I single-cycle/pipelined microarchitecture featuring Harvard memory organization, 32 general-purpose registers (x0 hardwired to zero), ALU execution block, and control unit decoders.',
    highlights: [
      'Implemented RV32I base integer instruction subset (R, I, S, B, U, J types)',
      'Constructed data hazard forwarding and load-use hazard stall resolution units',
      'Logic synthesis constraints, cell mapping, and Static Timing Analysis (STA)',
      'Physical design workflow awareness: Floorplanning, power rings, CTS, and place-and-route'
    ],
    technologies: ['Verilog', 'RISC-V (RV32I)', 'RTL-to-GDSII', 'QuestaSim', 'ASIC Flow'],
    skillsDemonstrated: 'Pipelining, Hazard Resolution, Instruction Decoding, ASIC Flow & Timing Closure',
    githubUrl: 'https://github.com/Afnaninayat/32bit-Single_cycle_processor_RISC-V-GDS',
    ctaText: 'View RTL & Physical Design →',
    badgeColor: '#00E5FF'
  },
  {
    id: 'amba-bus-protocols',
    title: 'AMBA Bus Protocol Design',
    subtitle: 'SoC Communication Architecture',
    category: 'SoC Interconnects • System-on-Chip Bus',
    tag: 'Industry Protocols',
    tier: 'featured-engineering',
    image: verificationImg,
    summary: 'Synthesizable RTL implementation and verification suite for ARM AMBA industry-standard on-chip communication bus protocols, covering APB, AHB, and AXI interconnect standards.',
    myRole: 'Protocol Designer & Verification Engineer',
    architecture: 'Master and slave controller state machines supporting burst transfers, wait-state injection, out-of-order transaction tagging, and SystemVerilog Assertion (SVA) protocol checkers.',
    highlights: [
      'AMBA APB controller with 2-phase timing (SETUP and ACCESS with PREADY handshake)',
      'AMBA AHB master/slave with single, incrementing, and wrap burst transaction arbitration',
      'AMBA AXI 5-channel decoupled architecture (AR, R, AW, W, B) supporting outstanding transactions',
      'Validated protocol bridge state machines and edge-case transfer timing'
    ],
    technologies: ['Verilog', 'APB', 'AHB', 'AXI', 'RTL', 'Verification'],
    skillsDemonstrated: 'Bus Protocol Compliance, Transaction Handshakes, State Machine Synthesis, SVA',
    githubUrl: 'https://github.com/Afnaninayat/Industry_protocols',
    ctaText: 'Explore Protocol Implementations →',
    badgeColor: '#8B5CF6'
  },
  {
    id: 'apb-uvm-verification',
    title: 'APB UVM Verification Environment',
    subtitle: 'Industry-Standard Hardware Verification',
    category: 'Design Verification • SystemVerilog • UVM',
    tag: 'UVM Methodology',
    tier: 'featured-engineering',
    image: verificationImg,
    summary: 'Modular, reusable Universal Verification Methodology (UVM) testbench infrastructure architected in SystemVerilog for comprehensive functional verification of APB protocol peripherals.',
    myRole: 'Design Verification Engineer',
    architecture: 'Standard UVM component hierarchy: uvm_sequence, driver, monitor, agent (active/passive), scoreboard, and transaction-level modeling (TLM) analysis ports.',
    highlights: [
      'Constrained-random transactions (CRV) targeting boundary transfers and wait-state corners',
      'Autonomous driver and monitor components capturing cycle-accurate bus activity',
      'Scoreboard golden-model verification comparing stimulus against observed responses',
      'Functional coverage models with covergroups and cross-coverage tracking'
    ],
    technologies: ['SystemVerilog', 'UVM', 'Constrained Random (CRV)', 'Scoreboarding', 'QuestaSim'],
    skillsDemonstrated: 'UVM Sequences, Driver/Monitor Architecture, Coverage Closure, Verification Signoff',
    githubUrl: 'https://github.com/Afnaninayat/apb_uvm_testbench',
    ctaText: 'View Verification Code →',
    badgeColor: '#10B981'
  },
  {
    id: 'uart-rtl-fpga',
    title: 'UART Transmitter & Receiver — RTL / FPGA',
    subtitle: 'Serial Communication Peripheral Core',
    category: 'Serial Protocols • RTL Design • FPGA',
    tag: 'Synthesizable Peripheral',
    tier: 'featured-engineering',
    image: riscvImg,
    summary: 'Full-duplex Universal Asynchronous Receiver-Transmitter (UART) core written in synthesizable Verilog, developed during the Digital IC journey with integrated baud generation and noise filtering.',
    myRole: 'RTL Developer',
    architecture: 'FSM-driven transmitter and receiver paired with a 16x oversampling clock for robust noise rejection, false start-bit detection, and decoupled FIFO streaming.',
    highlights: [
      '16x oversampling receiver state machine ensuring clean mid-bit sample capture',
      'Configurable data frame width (7/8 bits), stop bits (1/2), and parity mode (Odd/Even/None)',
      'Integrated FIFO buffer decoupling processor read/write operations from serial line speeds',
      'Fully simulated in ModelSim/QuestaSim and verified with glitch injection tests'
    ],
    technologies: ['Verilog', 'RTL Design', 'Baud Generator', '16x Oversampling', 'FPGA'],
    skillsDemonstrated: 'Clock Division, Sampling Techniques, Serialization, Asynchronous Data Handling',
    githubUrl: 'https://github.com/Afnaninayat/uart-verilog',
    ctaText: 'View UART RTL →',
    badgeColor: '#EC4899'
  },
  {
    id: 'rtl-design-lab',
    title: 'RTL Design Lab (Verilog Collection)',
    subtitle: 'Hands-On Digital Architecture Progression',
    category: 'Verilog • RTL Design • Logic Lab',
    tag: 'RTL Design Lab',
    tier: 'featured-engineering',
    image: riscvImg,
    summary: 'A curated progression through hands-on Verilog and RTL design, documenting mastery of combinational building blocks, sequential elements, and complex FSM datapaths.',
    myRole: 'Digital Systems Designer',
    architecture: 'Hierarchical digital design catalog featuring arithmetic logic units, barrel shifters, priority encoders, synchronous/asynchronous FIFOs, and parameterized memory controllers.',
    highlights: [
      'Combinational datapaths: Carry-lookahead adders, ALU, encoders, decoders, multiplexers',
      'Sequential elements: D-FFs with synchronous/asynchronous reset, counters, and registers',
      'Robust FSM architectures: Mealy and Moore implementations with Gray and One-Hot encoding',
      'Self-checking simulation testbenches with automated assertion checks'
    ],
    technologies: ['Verilog', 'RTL Modeling', 'FSM Design', 'QuestaSim', 'Simulation'],
    skillsDemonstrated: 'Synthesizable RTL, Timing Verification, FSM Optimization, Testbench Crafting',
    githubUrl: 'https://github.com/Afnaninayat/learning_verilog',
    ctaText: 'Explore RTL Designs →',
    badgeColor: '#38BDF8'
  },
  {
    id: 'cachesimpro',
    title: 'CacheSimPro — Cache Architecture Simulator',
    subtitle: 'Computer Architecture & Memory Systems',
    category: 'C++ • Computer Architecture • Systems',
    tag: 'Architecture Simulator',
    tier: 'featured-engineering',
    image: cacheImg,
    summary: 'A dedicated object-oriented C++ simulation engine modeling multi-level CPU cache behavior, addressing hit/miss rates, write-back policies, and line replacement strategies.',
    myRole: 'Systems Software Developer',
    architecture: 'Modular C++ design parsing realistic memory trace files, extracting Tag/Index/Offset address fields, and benchmarking configurable memory configurations.',
    highlights: [
      'Direct Mapped, 2-Way, and N-Way Set Associative placement strategies',
      'Least Recently Used (LRU) and FIFO cache line eviction implementations',
      'Write-Through and Write-Back policies with dirty-bit tracking and bus write stall simulation',
      'Granular performance analytics: Hit ratio, Miss penalty, and memory traffic calculations'
    ],
    technologies: ['C++', 'OOP', 'Computer Architecture', 'Memory Hierarchy', 'Linux'],
    skillsDemonstrated: 'Memory Systems, Trace Analysis, Bit Manipulation, Algorithm Benchmarking',
    githubUrl: 'https://github.com/Afnaninayat/CacheSimPro',
    ctaText: 'View CacheSimPro →',
    badgeColor: '#F59E0B'
  }
];

// ============================================================================
// LEVEL 2: FEATURED SOFTWARE / AI PROJECTS
// ============================================================================
export const featuredSoftwareProjects = [
  {
    id: 'batsman-pro',
    title: 'Batsman Pro — AI-Driven Shot Analysis',
    subtitle: 'Flagship Final Year Project (FYP)',
    category: 'AI • Computer Vision • Full Stack',
    tag: 'Flagship Capstone (FYP)',
    tier: 'featured-software',
    image: batsmanImg,
    summary: 'An advanced AI-powered cricket video analytics platform delivering automated shot classification, bat-ball contact point detection, and biomechanical posture evaluation from standard video recordings.',
    myRole: 'Lead Software & Computer Vision Engineer (Capstone Team)',
    architecture: 'End-to-end pipeline uniting YOLO object detection, OpenCV video parsing, skeletal pose estimation, Flask microservice backend, and cross-platform Flutter/React user interfaces.',
    highlights: [
      'Multi-class cricket shot classification (Cover Drive, Pull Shot, Straight Drive, Flick)',
      'Real-time bat-ball contact timestamping and trajectory recognition',
      'Footwork metrics: Stride length, front-foot alignment, and balance tracking',
      'Automated highlight generation clipping key boundary and technical strokes'
    ],
    technologies: ['Dart', 'Flutter', 'Python', 'YOLO', 'OpenCV', 'Firebase', 'JavaScript'],
    skillsDemonstrated: 'Computer Vision, Biomechanical Feature Extraction, Cross-Platform Architecture, Cloud Storage Pipeline',
    githubUrl: 'https://github.com/Afnaninayat/BatsmanPro',
    ctaText: 'View Batsman Pro →',
    webUrl: 'https://github.com/Afnaninayat/BatsmanPro_Web',
    webCtaText: 'View Web Project →',
    badgeColor: '#00E5FF'
  },
  {
    id: 'parallel-distributed-computing',
    title: 'Parallel & Distributed Computing Suite',
    subtitle: 'High-Performance Systems & Concurrent Execution',
    category: 'Python • Parallel Computing • Distributed Systems',
    tag: 'Systems Computing',
    tier: 'featured-software',
    image: flutterImg,
    summary: 'Implementations and algorithmic benchmarks exploring parallel processing, concurrent pipelines, multi-threaded task decomposition, and distributed computing models.',
    myRole: 'Systems Computing Developer',
    architecture: 'Multi-process execution pipelines utilizing shared memory, message passing, synchronization primitives, and distributed workload balancing.',
    highlights: [
      'Parallel matrix operations and distributed sorting algorithms with performance speedup profiling',
      'Process synchronization, race condition mitigation, and deadlock prevention models',
      'Comparative benchmarking across sequential vs multi-core parallel execution pipelines',
      'Clean modular Python code with automated runtime instrumentation'
    ],
    technologies: ['Python', 'Parallel Computing', 'Multiprocessing', 'Distributed Systems'],
    skillsDemonstrated: 'Concurrency, Amdahl’s Law, Thread Synchronization, Performance Profiling',
    githubUrl: 'https://github.com/Afnaninayat/Parallel_Distributed_Computing',
    ctaText: 'View Computing Projects →',
    badgeColor: '#38BDF8'
  }
];

// ============================================================================
// LEVEL 3: MORE ON GITHUB & EXPERIMENTAL REPOSITORIES
// Displayed less prominently + automatically augmented via GitHub API
// ============================================================================
export const moreOnGithubProjects = [
  {
    name: 'flutter',
    title: 'Flutter Exploration & Experiments',
    description: 'Practical exploration and architectural experiments building mobile application interfaces with Flutter.',
    language: 'C++',
    url: 'https://github.com/Afnaninayat/flutter',
    category: 'Learning / Experiments'
  },
  {
    name: 'Learning_Flutter',
    title: 'Learning Flutter Repository',
    description: 'Community-forked learning repository tracking hands-on exercises in mobile UI/UX state management.',
    language: 'Dart',
    url: 'https://github.com/Afnaninayat/Learning_Flutter',
    category: 'Fork / Learning'
  },
  {
    name: 'afnaninayat.ai',
    title: 'Personal Portfolio & Polymath Website',
    description: 'The complete source code of this modern portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.',
    language: 'JavaScript',
    url: 'https://github.com/Afnaninayat/afnaninayat.ai',
    category: 'Personal Web Project'
  }
];

// Combined for backward compatibility where needed
export const technicalProjects = [
  ...featuredEngineeringProjects,
  ...featuredSoftwareProjects
];
