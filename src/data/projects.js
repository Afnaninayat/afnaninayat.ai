import batsmanImg from '../assets/images/batsman_pro.png';
import verificationImg from '../assets/images/digital_verification.png';
import cacheImg from '../assets/images/cache_simulator.png';
import flutterImg from '../assets/images/flutter_apps.png';
import riscvImg from '../assets/images/riscv_processor.jpg';

export const technicalProjects = [
  {
    id: 'batsman-pro',
    title: 'Batsman Pro — AI-Driven Shot Analysis',
    subtitle: 'Flagship Final Year Project (FYP)',
    category: 'AI • Computer Vision • Full Stack',
    tag: 'Flagship Project',
    featured: true,
    image: batsmanImg,
    summary: 'An advanced AI-powered cricket video analytics platform delivering automated shot classification, bat-ball contact point detection, and biomechanical posture evaluation from standard video recordings.',
    myRole: 'Lead Software & Computer Vision Engineer (Capstone Team)',
    architecture: 'End-to-end pipeline uniting YOLO object detection, OpenCV video parsing, skeletal pose estimation, Flask microservice backend, and cross-platform Flutter/React user interfaces.',
    highlights: [
      'Multi-class cricket shot classification (Cover Drive, Pull Shot, Straight Drive, Flick)',
      'Real-time bat-ball contact timestamping and trajectory recognition',
      'Footwork metrics: Stride length, front-foot alignment, and balance tracking',
      'Automated highlight generation clipping key boundary and technical strokes',
      'Interactive athlete progress dashboards with biomechanical posture feedback'
    ],
    technologies: ['Python', 'YOLO', 'OpenCV', 'Flutter', 'React', 'Flask', 'Firebase'],
    skillsDemonstrated: 'Computer Vision, Biomechanical Feature Extraction, Cross-Platform Architecture, Cloud Storage Pipeline',
    githubUrl: 'https://github.com/afnaninayat/batsman-pro',
    liveUrl: '#',
    badgeColor: '#00E5FF'
  },
  {
    id: 'riscv-processor',
    title: 'RV32I RISC-V Pipelined Processor Core',
    subtitle: 'Computer Architecture & RTL Design',
    category: 'Computer Architecture • RTL • Verilog',
    tag: 'Digital IC Project',
    featured: false,
    image: riscvImg,
    summary: 'Design and simulation of a 32-bit RISC-V (RV32I) processor core featuring a classic 5-stage pipeline (IF, ID, EX, MEM, WB) with hazard detection and forwarding logic.',
    myRole: 'RTL Architecture Designer',
    architecture: 'Harvard architecture design with separated Instruction and Data memory interfaces, 32 general-purpose registers (x0 hardwired to 0), branch resolution in ID/EX, and ALU operations.',
    highlights: [
      'Implemented full RV32I base integer instruction subset (R, I, S, B, U, J types)',
      'Constructed data hazard forwarding unit to minimize pipeline stalls',
      'Engineered load-use stall detection and control hazard branch flush logic',
      'Verified functional instruction flow via assembly benchmark test programs in QuestaSim'
    ],
    technologies: ['Verilog', 'SystemVerilog', 'QuestaSim', 'RISC-V ISA', 'Computer Architecture'],
    skillsDemonstrated: 'Pipelining, Hazard Resolution, Instruction Decoding, Micro-Architecture Modeling',
    githubUrl: 'https://github.com/afnaninayat/riscv-rv32i-core',
    liveUrl: '#',
    badgeColor: '#38BDF8'
  },
  {
    id: 'amba-protocols',
    title: 'AMBA Protocol Suite & Verification (APB, AHB, AXI)',
    subtitle: 'System-on-Chip Bus Interconnects',
    category: 'SoC Interconnects • SystemVerilog • UVM',
    tag: 'SoC Protocols',
    featured: false,
    image: verificationImg,
    summary: 'Comprehensive RTL implementation and verification testbench suite for ARM AMBA on-chip interconnect standards, including APB peripheral bus, AHB pipelined bus, and AXI 5-channel master/slave.',
    myRole: 'Protocol Designer & Verification Engineer',
    architecture: 'Master and slave controller state machines supporting burst transfers, wait-state injection, out-of-order transaction tagging, and SystemVerilog Assertion (SVA) protocol checkers.',
    highlights: [
      'AMBA APB controller with 2-phase timing (SETUP and ACCESS with PREADY support)',
      'AMBA AHB master/slave with single, incrementing, and wrap burst transaction arbitration',
      'AMBA AXI channel decoupling across Read Address, Read Data, Write Address, Write Data, and Write Response',
      'Parameterized testbenches validating edge-case protocol corner scenarios'
    ],
    technologies: ['SystemVerilog', 'Verilog', 'AMBA APB / AHB / AXI', 'SVA', 'QuestaSim'],
    skillsDemonstrated: 'Bus Protocol Compliance, Transaction Level Verification, SVA Assertions',
    githubUrl: 'https://github.com/afnaninayat/amba-protocol-suite',
    liveUrl: '#',
    badgeColor: '#8B5CF6'
  },
  {
    id: 'digital-verification-uvm',
    title: 'UVM Constrained-Random Verification Suite',
    subtitle: 'Industry-Standard Hardware Verification',
    category: 'Verification Methodology • UVM • Coverage',
    tag: 'Verification',
    featured: false,
    image: verificationImg,
    summary: 'Modular, reusable Universal Verification Methodology (UVM) testbench infrastructure architected to verify complex digital hardware IP blocks with 100% functional and code coverage.',
    myRole: 'Verification Engineer',
    architecture: 'Complete UVM component hierarchy: uvm_sequence, sequencer, driver, monitor, agent (active/passive), analysis ports, and transaction scoreboard with golden reference models.',
    highlights: [
      'Constrained-random transaction generation targeting corner cases and buffer boundaries',
      'Functional coverage models with comprehensive covergroups, bins, and cross-coverage',
      'Synchronous and Asynchronous FIFO verification validating empty/full flags and pointer wrap-around',
      'Achieved 100% functional coverage in QuestaSim simulation suites'
    ],
    technologies: ['SystemVerilog', 'UVM', 'QuestaSim', 'Coverage Metrics', 'Assertions'],
    skillsDemonstrated: 'CRV, Scoreboarding, TLM Analysis Ports, Factory Overrides, Coverage Closure',
    githubUrl: 'https://github.com/afnaninayat/uvm-verification-suite',
    liveUrl: '#',
    badgeColor: '#10B981'
  },
  {
    id: 'cache-simulator',
    title: 'Object-Oriented CPU Cache Controller & Simulator',
    subtitle: 'Systems Engineering & Memory Hierarchy',
    category: 'C++ • Computer Architecture • Systems',
    tag: 'Systems Architecture',
    featured: false,
    image: cacheImg,
    summary: 'A high-performance C++ simulator modeling L1/L2 CPU cache behavior, addressing hit/miss rates, write-back policies, and replacement strategies across configurable memory hierarchies.',
    myRole: 'Systems Software Developer',
    architecture: 'Object-oriented modular design parsing realistic memory trace files, extracting Tag/Index/Offset bit fields, and benchmarking cache configurations.',
    highlights: [
      'Direct Mapped, 2-Way, and 4-Way Set Associative placement algorithms',
      'Least Recently Used (LRU) and FIFO cache line eviction implementations',
      'Write-Through and Write-Back policies with dirty-bit tracking',
      'Granular performance analytics: Hit ratio, Miss penalty, and bus traffic calculations'
    ],
    technologies: ['C++', 'OOP', 'Data Structures', 'Linux', 'Memory Systems'],
    skillsDemonstrated: 'Memory Architecture, Bit Manipulation, Trace Parsing, Algorithm Optimization',
    githubUrl: 'https://github.com/afnaninayat/cache-simulator',
    liveUrl: '#',
    badgeColor: '#F59E0B'
  },
  {
    id: 'uart-controller',
    title: 'Synthesizable UART Controller with Baud Generator',
    subtitle: 'Serial Communication Peripheral',
    category: 'Serial Protocols • RTL • Verilog',
    tag: 'Hardware Peripheral',
    featured: false,
    image: riscvImg,
    summary: 'Full-duplex Universal Asynchronous Receiver-Transmitter (UART) core written in synthesizable Verilog with configurable baud rate generator and parity generation/checking.',
    myRole: 'RTL Developer',
    architecture: 'FSM-driven transmitter and receiver with 16x oversampling clock for robust noise rejection and false start-bit detection.',
    highlights: [
      'Configurable data frame width (7/8 bits), stop bits (1/2), and parity mode (Odd/Even/None)',
      '16x oversampling receiver state machine ensuring clean mid-bit sample capture',
      'Integrated FIFO buffer decoupling processor read/write operations from serial line speeds',
      'Fully simulated with glitch injection and baud mismatch resilience testing'
    ],
    technologies: ['Verilog', 'RTL Design', 'FSM Modeling', 'ModelSim'],
    skillsDemonstrated: 'Clock Division, Sampling Techniques, Serialization, Asynchronous Data Handling',
    githubUrl: 'https://github.com/afnaninayat/uart-verilog-controller',
    liveUrl: '#',
    badgeColor: '#EC4899'
  },
  {
    id: 'vga-controller',
    title: 'FPGA VGA Video & Display Controller',
    subtitle: 'Real-Time Pixel Generation Engine',
    category: 'FPGA • Video Systems • Digital Logic',
    tag: 'Display Systems',
    featured: false,
    image: riscvImg,
    summary: 'Digital video display controller generating industry-standard 640x480 @ 60Hz VGA timing signals, sync pulses, and real-time color patterns on FPGA hardware.',
    myRole: 'FPGA Logic Designer',
    architecture: 'Horizontal and vertical counter engines operating on a 25.175 MHz pixel clock, with active display region blanking and color palette generators.',
    highlights: [
      'Precision H-SYNC and V-SYNC pulse generation compliant with VESA standards',
      'RGB color DAC output drive logic for dynamic graphical test pattern rendering',
      'Block RAM frame buffer integration for custom raster image and font rendering',
      'Synthesized and tested on FPGA evaluation board with clean CRT/LCD output'
    ],
    technologies: ['Verilog', 'FPGA', 'Timing Synthesis', 'Digital Hardware'],
    skillsDemonstrated: 'Pixel Clocks, Video Sync Timing, Memory Interfacing, Hardware Debugging',
    githubUrl: 'https://github.com/afnaninayat/vga-fpga-controller',
    liveUrl: '#',
    badgeColor: '#00E5FF'
  },
  {
    id: 'asic-rtl-flow',
    title: 'ASIC RTL-to-GDS Physical Design Study',
    subtitle: 'Semiconductor Synthesis & Implementation Flow',
    category: 'ASIC Flow • Synthesis • Physical Design',
    tag: 'Silicon Flow',
    featured: false,
    image: riscvImg,
    summary: 'A structured study and practical walkthrough of the standard cell ASIC design flow from RTL netlist elaboration to physical layout concepts.',
    myRole: 'RTL to Physical Design Enthusiast',
    architecture: 'Understanding logic synthesis constraints, static timing analysis (STA), clock tree synthesis (CTS), power distribution networks (PDN), and place-and-route mechanics.',
    highlights: [
      'RTL synthesis with standard cell mapping, area vs timing tradeoff analysis',
      'Static Timing Analysis (STA): Setup, hold, slack calculations, and critical path optimization',
      'Floorplanning fundamentals: Die sizing, I/O placement, power ring distribution',
      'Physical verification awareness: Design Rule Checking (DRC) and Layout Versus Schematic (LVS)'
    ],
    technologies: ['ASIC Flow', 'STA Concepts', 'Synthesis Principles', 'Physical Design Awareness'],
    skillsDemonstrated: 'Silicon Implementation Lifecycle, Timing Constraints (SDC), Microchip Physics',
    githubUrl: 'https://github.com/afnaninayat/asic-design-flow-study',
    liveUrl: '#',
    badgeColor: '#A855F7'
  },
  {
    id: 'flutter-applications',
    title: 'Cross-Platform Mobile & Web Client Suite',
    subtitle: 'Production Application Engineering',
    category: 'Mobile • Cross-Platform • Cloud',
    tag: 'Software Engineering',
    featured: false,
    image: flutterImg,
    summary: 'Production-ready mobile and web applications developed with Flutter and Firebase, featuring real-time data sync, media streaming, and robust authentication.',
    myRole: 'Full Stack Flutter Developer',
    architecture: 'Clean architectural pattern with provider/bloc state management, offline-first Firestore synchronization, and secure RESTful endpoints.',
    highlights: [
      'Firebase Authentication, Firestore real-time listener streams, and cloud storage',
      'Custom high-performance video player controls and frame-by-frame analysis UI',
      'Responsive design adapting across Android, iOS, tablet, and web viewports',
      'Optimized asset loading and caching reducing mobile bandwidth consumption'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'REST APIs'],
    skillsDemonstrated: 'State Management, Cloud Integration, Mobile UI/UX, Cross-Platform Deployment',
    githubUrl: 'https://github.com/afnaninayat/flutter-apps-suite',
    liveUrl: '#',
    badgeColor: '#38BDF8'
  }
];
