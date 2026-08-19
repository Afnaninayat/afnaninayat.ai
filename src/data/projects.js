import batsmanImg from '../assets/images/batsman_pro.png';
import verificationImg from '../assets/images/digital_verification.png';
import cacheImg from '../assets/images/cache_simulator.png';
import flutterImg from '../assets/images/flutter_apps.png';

export const projects = [
  {
    id: 'batsman-pro',
    featured: true,
    title: 'Batsman Pro',
    category: 'AI • Computer Vision • Flutter • React',
    badge: 'Featured Flagship Project',
    image: batsmanImg,
    description: 'An AI-driven cricket analysis platform designed to analyze batting performance through video-based computer vision, human pose tracking, and real-time biomechanics evaluation.',
    features: [
      'Cricket shot classification (Cover Drive, Pull, Flick, Straight Drive)',
      'Real-time bat-ball contact point detection',
      'Foot movement tracking & stride metrics',
      'Posture alignment & body balance analysis',
      'Automated video highlight clip generation',
      'Granular performance analytics & player progress reports',
      'High-throughput video processing pipeline'
    ],
    technologies: ['Flutter', 'React', 'Python', 'Flask', 'YOLO', 'OpenCV', 'Firebase'],
    githubUrl: 'https://github.com/afnaninayat/batsman-pro',
    liveUrl: '#',
    accentColor: '#B6FF00'
  },
  {
    id: 'digital-verification',
    featured: false,
    title: 'Digital Design & Verification',
    category: 'Hardware • SystemVerilog • UVM',
    badge: 'RTL & Verification Portfolio',
    image: verificationImg,
    description: 'A comprehensive collection of RTL design and verification projects covering SystemVerilog, Verilog, UVM methodology, AMBA bus protocols, and full functional coverage simulation.',
    features: [
      'AMBA APB, AHB & AXI protocol bus interfaces',
      'Universal Verification Methodology (UVM) testbenches (Sequencer, Driver, Monitor, Scoreboard)',
      'UART, Synchronous/Asynchronous FIFO, SRAM & ALU modules',
      'Finite State Machine (FSM) controller design & verification',
      'Assertion-Based Verification (ABV) & 100% functional coverage reports',
      'QuestaSim / ModelSim simulation environment setup'
    ],
    technologies: ['SystemVerilog', 'Verilog', 'UVM', 'QuestaSim', 'AMBA', 'RTL', 'Digital Logic'],
    githubUrl: 'https://github.com/afnaninayat/digital-verification-suite',
    liveUrl: '#',
    accentColor: '#22C55E'
  },
  {
    id: 'cache-simulator',
    featured: false,
    title: 'Cache Simulator',
    category: 'C++ • Computer Architecture • OOP',
    badge: 'Systems Engineering',
    image: cacheImg,
    description: 'An object-oriented CPU cache memory simulator in C++ evaluating multiple cache organizations, LRU replacement policies, and real-time memory address trace analytics.',
    features: [
      'Direct Mapped, 2-Way, and 4-Way Set Associative cache mapping',
      'Least Recently Used (LRU) eviction policy tracking',
      'Granular statistics: Hits, Misses, Write-Backs & Evictions',
      'Memory trace file parser & performance benchmark generator',
      'Configurable block size (16B–128B) and cache capacity'
    ],
    technologies: ['C++', 'OOP', 'Computer Architecture', 'Data Structures', 'Linux'],
    githubUrl: 'https://github.com/afnaninayat/cache-simulator',
    liveUrl: '#',
    accentColor: '#38BDF8'
  },
  {
    id: 'flutter-applications',
    featured: false,
    title: 'Flutter Mobile & Web Suite',
    category: 'Mobile • Cross-Platform • Cloud',
    badge: 'Application Development',
    image: flutterImg,
    description: 'A collection of production-grade mobile and web applications developed using Flutter, Firebase backend infrastructure, and scalable state management architectures.',
    features: [
      'Firebase Authentication & Secure User Profile Management',
      'Real-time Firestore data synchronization & offline caching',
      'Firebase Storage for high-speed video and media asset management',
      'Custom video playback controls & multi-media processing UI',
      'Responsive layout supporting iOS, Android, and Flutter Web'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'REST APIs', 'Provider/Riverpod'],
    githubUrl: 'https://github.com/afnaninayat/flutter-apps-suite',
    liveUrl: '#',
    accentColor: '#A855F7'
  }
];
