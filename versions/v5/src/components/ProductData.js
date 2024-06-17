
// const products = [
//     {
//       title: 'Great AMD Gaming Build',
//       processor: 'AMD Ryzen 5 7600',
//       videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
//       case: 'NZXT H5 Flow ATX Mid Tower',
//       price: '₹1.05 L',
//       image: 'https://cdna.pcpartpicker.com/static/forever/images/product/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
//     },
//     {
//       title: 'Great AMD Gaming Build',
//       processor: 'AMD Ryzen 5 7600',
//       videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
//       case: 'NZXT H5 Flow ATX Mid Tower',
//       price: '₹1.05 L',
//       image: 'https://cdna.pcpartpicker.com/static/forever/images/product/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
//     },
//     {
//       title: 'Great AMD Gaming Build',
//       processor: 'AMD Ryzen 5 7600',
//       videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
//       case: 'NZXT H5 Flow ATX Mid Tower',
//       price: '₹1.05 L',
//       image: 'https://cdna.pcpartpicker.com/static/forever/images/product/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
//     },
//     {
//       title: 'Great AMD Gaming Build',
//       processor: 'AMD Ryzen 5 7600',
//       videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
//       case: 'NZXT H5 Flow ATX Mid Tower',
//       price: '₹1.05 L',
//       image: 'https://cdna.pcpartpicker.com/static/forever/images/product/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
//     },
//     {
//       title: 'Great AMD Gaming Build',
//       processor: 'AMD Ryzen 5 7600',
//       videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
//       case: 'NZXT H5 Flow ATX Mid Tower',
//       price: '₹1.05 L',
//       image: 'https://cdna.pcpartpicker.com/static/forever/images/product/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
//     },
//     {
//       title: 'Great AMD Gaming Build',
//       processor: 'AMD Ryzen 5 7600',
//       videoCard: 'Parametric Video Card (Chipset: Radeon RX 6800; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)',
//       case: 'NZXT H5 Flow ATX Mid Tower',
//       price: '₹1.05 L',
//       image: 'https://cdna.pcpartpicker.com/static/forever/images/product/6bd2cbaf780aea720a3b8a53d80ce635.256p.jpg',
//     },
//     // More products...
//   ];
  
//   export default products;
  
// src/products.js
// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     processor: "Intel i7",
//     videoCard: "NVIDIA GTX 1660",
//     case: "Cooler Master",
//     price: 1000,
//     imageUrl: "https://via.placeholder.com/150"
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     processor: "AMD Ryzen 7",
//     videoCard: "NVIDIA RTX 3080",
//     case: "NZXT H510",
//     price: 2000,
//     imageUrl: "https://via.placeholder.com/150"
//   },
//   // Add more products as needed
// ];

// export default products;

// src/products.js
const products = [
  {
    id: 1,
    name: "High-Performance Gaming PC",
    processor: "AMD Ryzen 5 7600",
    videoCard: "AMD Radeon RX 6800",
    case: "Corsair 4000D Airflow",
    price: 1500,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/4a9bfe0a3f46152eea8bea46c54e1775.256p.jpg",
    images: [
      // {
      //   original: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      //   thumbnail: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      // }, 
      {
        original: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      // Add more images as needed
    ],
    description: "This PC is designed to deliver high performance on all of today's most popular games...",
    introduction: "This PC is designed to deliver high performance on all of today's most popular games without being complicated to build or costing too much. It will run well at high settings on 1080p or higher when playing Valorant, Fortnite, Minecraft, Call of Duty, Rainbow Six Siege, Apex Legends, and more.",
    cpuDescription: "The AMD Ryzen 5 7600 provides some of the best bang for your buck. It offers 6 cores, 12 threads, a base frequency of 3.8GHz, and a turbo frequency of 5.1GHz. For better cooling, we've included the Thermalright Peerless Assassin.",
    motherboardDescription: "We're using a parametric filter to constantly select the best-priced motherboard while meeting selected criteria. In this case, we are filtering for ATX and mATX motherboards with B550 chipsets and up to 4 DDR5 DIMM slots for future expansion. The compatibility engine will filter out anything not compatible with the build, and it will automatically update with the best priced option as prices change.",
    memoryDescription: "We are filtering for the best-priced 2x16GB kit of DDR5 RAM with a speed of at least 6000 and a maximum CAS latency of 30.",
    storageDescription: "With Solid State Drives (SSDs) the PC will boot, open programs, and load games considerably faster than mechanical drives. Since storage needs may differ, adjust the capacity as needed. We recommend at least 1TB of SSD storage. We're use parametric filters to incorporate a PCIe 4.0 NVME SSD with at least 2TB of space.",
    gpuDescription: "The AMD Radeon RX 6800 will let you play all modern games at high settings with smooth fps. To keep the noise and temperatures down, the filter requiress a minimum number of 2 fans to avoid 'blower' style cards and 'mini' cards, which usually do not cool the card as well. You can choose to use this filter instead, if you want to include the smaller cards for any reason. Note that smaller cards will be louder or hotter - or both.",
    caseDescription: "All of our components are housed in the Corsair 4000D Airflow. This case features an all black design with a tempered glass side panel and mesh front panel. It includes one front panel Type-A USB 3 port, one USB3 Type-C port, hidden PSU mount, and a number of cable management holes and tie-offs to help your build look tidy. The case can also comfortably fit full-sized video cards and large CPU coolers.",
    psuDescription: "We're using a parametric selection of well-reviewed units, all of which are 80+ Bronze certified or above and can provide plenty of power for this build. Note that because there are issues with PSU availability right now, some non-modular PSUs have been added to the build to help you get the parts you need. These are still high quality PSUs.",
    customizing: "Ready to make this build you own? Click the 'Customize This Part List' button to start making this build match your specific needs!",
    intelVersion: "Here is the Intel version of our Great Gaming Guide."
  },
  {
    id: 2,
    name: "Budget Gaming PC",
    processor: "AMD Ryzen 3 5600G",
    videoCard: "NVIDIA GeForce GTX 1660 Super",
    case: "NZXT H510",
    price: 800,
    imageUrl: "https://via.placeholder.com/150",
    images: [
      "https://cdna.pcpartpicker.com/static/forever/images/product/4a9bfe0a3f46152eea8bea46c54e1775.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      // Add more image URLs as needed
    ],
    description: "This budget-friendly PC is perfect for gamers who want to experience smooth gameplay without breaking the bank.",
    introduction: "Looking for an affordable gaming PC that can handle popular games? Our Budget Gaming PC offers great performance without the high price tag. Whether you're into competitive shooters or open-world adventures, this PC has you covered.",
    cpuDescription: "The AMD Ryzen 3 5600G provides solid performance for gaming and everyday tasks. With 4 cores and 8 threads, it can handle modern games with ease.",
    motherboardDescription: "We've selected a budget-friendly motherboard with the B450 chipset to keep costs down while still providing reliable performance. It supports Ryzen processors and offers plenty of connectivity options.",
    memoryDescription: "To keep costs low without sacrificing performance, we've included a 2x8GB kit of DDR4 RAM. With a speed of 3200MHz, it provides smooth multitasking and gaming performance.",
    storageDescription: "Our budget gaming PC comes with a 500GB NVMe SSD for fast boot times and quick game loading. While it's not the largest storage capacity, it's enough to get you started. You can always add more storage later if needed.",
    gpuDescription: "The NVIDIA GeForce GTX 1660 Super is a solid mid-range graphics card that offers great performance for 1080p gaming. With 6GB of GDDR6 memory, it can handle modern games at high settings with smooth frame rates.",
    caseDescription: "The NZXT H510 is a sleek and modern case that offers excellent airflow and cable management options. With a tempered glass side panel, it's perfect for showcasing your build. It also comes with two pre-installed fans for optimal cooling.",
    psuDescription: "We've included a reliable 500W power supply to ensure stable and efficient power delivery to your components. While it's not the most powerful PSU on the market, it's more than enough for our budget gaming PC.",
    customizing: "Ready to customize your build? Click the 'Customize This Part List' button to tailor this PC to your specific needs!",
    intelVersion: "Looking for an Intel-based budget gaming PC? Check out our Intel Budget Gaming Guide for similar performance and value."
  },
  {
    id: 3,
    name: "Workstation PC",
    processor: "Intel Core i9-11900K",
    videoCard: "NVIDIA Quadro RTX 4000",
    case: "Fractal Design Define 7",
    price: 2500,
    imageUrl: "https://via.placeholder.com/150",
    images: [
      "https://cdna.pcpartpicker.com/static/forever/images/product/4a9bfe0a3f46152eea8bea46c54e1775.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      // Add more image URLs as needed
    ],
    description: "Our Workstation PC is designed for professionals who need powerful hardware for demanding tasks such as 3D rendering, video editing, and CAD work.",
    introduction: "When it comes to professional workloads, you need a PC that can handle anything you throw at it. Our Workstation PC is built with high-performance components to ensure smooth and reliable operation, even under heavy loads.",
    cpuDescription: "The Intel Core i9-11900K is a high-end desktop processor that offers exceptional performance for demanding tasks. With 8 cores and 16 threads, it can handle multi-threaded workloads with ease.",
    motherboardDescription: "We've selected a premium motherboard with the Z590 chipset to take full advantage of the Core i9-11900K's overclocking capabilities. It offers plenty of connectivity options and supports high-speed DDR4 memory.",
    memoryDescription: "Our Workstation PC comes with a 4x16GB kit of DDR4 ECC RAM for maximum reliability and performance. With error-correcting code (ECC) memory, your data is protected from errors and corruption.",
    storageDescription: "For storage, we've included a 1TB NVMe SSD for fast boot times and quick access to your files. We've also added a 4TB HDD for ample storage space for large projects and files.",
    gpuDescription: "The NVIDIA Quadro RTX 4000 is a professional-grade graphics card that offers excellent performance for 3D rendering, video editing, and CAD work. With 8GB of GDDR6 memory, it can handle even the most demanding workloads.",
    caseDescription: "The Fractal Design Define 7 is a premium case that offers excellent noise dampening and airflow. With a sleek and minimalist design, it's perfect for professional environments. It also comes with plenty of room for expansion and cable management options.",
    psuDescription: "To ensure stable and reliable power delivery, we've included a high-quality 750W power supply from a reputable manufacturer. With plenty of headroom for expansion, it's perfect for our Workstation PC.",
    customizing: "Need to customize your build for specific tasks or workflows? Click the 'Customize This Part List' button to tailor this PC to your exact needs!",
    amdVersion: "Prefer AMD processors? Check out our AMD Workstation Guide for similar performance and reliability."
  },
  {
    id: 4,
    name: "Workstation PC",
    processor: "Intel Core i9-11900K",
    videoCard: "NVIDIA Quadro RTX 4000",
    case: "Fractal Design Define 7",
    price: 2500,
    imageUrl: "https://via.placeholder.com/150",
    images: [
      "https://cdna.pcpartpicker.com/static/forever/images/product/4a9bfe0a3f46152eea8bea46c54e1775.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      // Add more image URLs as needed
    ],
    description: "Our Workstation PC is designed for professionals who need powerful hardware for demanding tasks such as 3D rendering, video editing, and CAD work.",
    introduction: "When it comes to professional workloads, you need a PC that can handle anything you throw at it. Our Workstation PC is built with high-performance components to ensure smooth and reliable operation, even under heavy loads.",
    cpuDescription: "The Intel Core i9-11900K is a high-end desktop processor that offers exceptional performance for demanding tasks. With 8 cores and 16 threads, it can handle multi-threaded workloads with ease.",
    motherboardDescription: "We've selected a premium motherboard with the Z590 chipset to take full advantage of the Core i9-11900K's overclocking capabilities. It offers plenty of connectivity options and supports high-speed DDR4 memory.",
    memoryDescription: "Our Workstation PC comes with a 4x16GB kit of DDR4 ECC RAM for maximum reliability and performance. With error-correcting code (ECC) memory, your data is protected from errors and corruption.",
    storageDescription: "For storage, we've included a 1TB NVMe SSD for fast boot times and quick access to your files. We've also added a 4TB HDD for ample storage space for large projects and files.",
    gpuDescription: "The NVIDIA Quadro RTX 4000 is a professional-grade graphics card that offers excellent performance for 3D rendering, video editing, and CAD work. With 8GB of GDDR6 memory, it can handle even the most demanding workloads.",
    caseDescription: "The Fractal Design Define 7 is a premium case that offers excellent noise dampening and airflow. With a sleek and minimalist design, it's perfect for professional environments. It also comes with plenty of room for expansion and cable management options.",
    psuDescription: "To ensure stable and reliable power delivery, we've included a high-quality 750W power supply from a reputable manufacturer. With plenty of headroom for expansion, it's perfect for our Workstation PC.",
    customizing: "Need to customize your build for specific tasks or workflows? Click the 'Customize This Part List' button to tailor this PC to your exact needs!",
    amdVersion: "Prefer AMD processors? Check out our AMD Workstation Guide for similar performance and reliability."
  },
  {
    id: 5,
    name: "Workstation PC",
    processor: "Intel Core i9-11900K",
    videoCard: "NVIDIA Quadro RTX 4000",
    case: "Fractal Design Define 7",
    price: 2500,
    imageUrl: "https://via.placeholder.com/150",
    images: [
      "https://cdna.pcpartpicker.com/static/forever/images/product/4a9bfe0a3f46152eea8bea46c54e1775.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      // Add more image URLs as needed
    ],
    description: "Our Workstation PC is designed for professionals who need powerful hardware for demanding tasks such as 3D rendering, video editing, and CAD work.",
    introduction: "When it comes to professional workloads, you need a PC that can handle anything you throw at it. Our Workstation PC is built with high-performance components to ensure smooth and reliable operation, even under heavy loads.",
    cpuDescription: "The Intel Core i9-11900K is a high-end desktop processor that offers exceptional performance for demanding tasks. With 8 cores and 16 threads, it can handle multi-threaded workloads with ease.",
    motherboardDescription: "We've selected a premium motherboard with the Z590 chipset to take full advantage of the Core i9-11900K's overclocking capabilities. It offers plenty of connectivity options and supports high-speed DDR4 memory.",
    memoryDescription: "Our Workstation PC comes with a 4x16GB kit of DDR4 ECC RAM for maximum reliability and performance. With error-correcting code (ECC) memory, your data is protected from errors and corruption.",
    storageDescription: "For storage, we've included a 1TB NVMe SSD for fast boot times and quick access to your files. We've also added a 4TB HDD for ample storage space for large projects and files.",
    gpuDescription: "The NVIDIA Quadro RTX 4000 is a professional-grade graphics card that offers excellent performance for 3D rendering, video editing, and CAD work. With 8GB of GDDR6 memory, it can handle even the most demanding workloads.",
    caseDescription: "The Fractal Design Define 7 is a premium case that offers excellent noise dampening and airflow. With a sleek and minimalist design, it's perfect for professional environments. It also comes with plenty of room for expansion and cable management options.",
    psuDescription: "To ensure stable and reliable power delivery, we've included a high-quality 750W power supply from a reputable manufacturer. With plenty of headroom for expansion, it's perfect for our Workstation PC.",
    customizing: "Need to customize your build for specific tasks or workflows? Click the 'Customize This Part List' button to tailor this PC to your exact needs!",
    amdVersion: "Prefer AMD processors? Check out our AMD Workstation Guide for similar performance and reliability."
  },
  {
    id: 6,
    name: "Workstation PC",
    processor: "Intel Core i9-11900K",
    videoCard: "NVIDIA Quadro RTX 4000",
    case: "Fractal Design Define 7",
    price: 2500,
    imageUrl: "https://via.placeholder.com/150",
    images: [
      "https://cdna.pcpartpicker.com/static/forever/images/product/4a9bfe0a3f46152eea8bea46c54e1775.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      // Add more image URLs as needed
    ],
    description: "Our Workstation PC is designed for professionals who need powerful hardware for demanding tasks such as 3D rendering, video editing, and CAD work.",
    introduction: "When it comes to professional workloads, you need a PC that can handle anything you throw at it. Our Workstation PC is built with high-performance components to ensure smooth and reliable operation, even under heavy loads.",
    cpuDescription: "The Intel Core i9-11900K is a high-end desktop processor that offers exceptional performance for demanding tasks. With 8 cores and 16 threads, it can handle multi-threaded workloads with ease.",
    motherboardDescription: "We've selected a premium motherboard with the Z590 chipset to take full advantage of the Core i9-11900K's overclocking capabilities. It offers plenty of connectivity options and supports high-speed DDR4 memory.",
    memoryDescription: "Our Workstation PC comes with a 4x16GB kit of DDR4 ECC RAM for maximum reliability and performance. With error-correcting code (ECC) memory, your data is protected from errors and corruption.",
    storageDescription: "For storage, we've included a 1TB NVMe SSD for fast boot times and quick access to your files. We've also added a 4TB HDD for ample storage space for large projects and files.",
    gpuDescription: "The NVIDIA Quadro RTX 4000 is a professional-grade graphics card that offers excellent performance for 3D rendering, video editing, and CAD work. With 8GB of GDDR6 memory, it can handle even the most demanding workloads.",
    caseDescription: "The Fractal Design Define 7 is a premium case that offers excellent noise dampening and airflow. With a sleek and minimalist design, it's perfect for professional environments. It also comes with plenty of room for expansion and cable management options.",
    psuDescription: "To ensure stable and reliable power delivery, we've included a high-quality 750W power supply from a reputable manufacturer. With plenty of headroom for expansion, it's perfect for our Workstation PC.",
    customizing: "Need to customize your build for specific tasks or workflows? Click the 'Customize This Part List' button to tailor this PC to your exact needs!",
    amdVersion: "Prefer AMD processors? Check out our AMD Workstation Guide for similar performance and reliability."
  },
  {
    id: 7,
    name: "Workstation PC",
    processor: "Intel Core i9-11900K",
    videoCard: "NVIDIA Quadro RTX 4000",
    case: "Fractal Design Define 7",
    price: 2500,
    imageUrl: "https://via.placeholder.com/150",
    images: [
      "https://cdna.pcpartpicker.com/static/forever/images/product/4a9bfe0a3f46152eea8bea46c54e1775.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
      // Add more image URLs as needed
    ],
    description: "Our Workstation PC is designed for professionals who need powerful hardware for demanding tasks such as 3D rendering, video editing, and CAD work.",
    introduction: "When it comes to professional workloads, you need a PC that can handle anything you throw at it. Our Workstation PC is built with high-performance components to ensure smooth and reliable operation, even under heavy loads.",
    cpuDescription: "The Intel Core i9-11900K is a high-end desktop processor that offers exceptional performance for demanding tasks. With 8 cores and 16 threads, it can handle multi-threaded workloads with ease.",
    motherboardDescription: "We've selected a premium motherboard with the Z590 chipset to take full advantage of the Core i9-11900K's overclocking capabilities. It offers plenty of connectivity options and supports high-speed DDR4 memory.",
    memoryDescription: "Our Workstation PC comes with a 4x16GB kit of DDR4 ECC RAM for maximum reliability and performance. With error-correcting code (ECC) memory, your data is protected from errors and corruption.",
    storageDescription: "For storage, we've included a 1TB NVMe SSD for fast boot times and quick access to your files. We've also added a 4TB HDD for ample storage space for large projects and files.",
    gpuDescription: "The NVIDIA Quadro RTX 4000 is a professional-grade graphics card that offers excellent performance for 3D rendering, video editing, and CAD work. With 8GB of GDDR6 memory, it can handle even the most demanding workloads.",
    caseDescription: "The Fractal Design Define 7 is a premium case that offers excellent noise dampening and airflow. With a sleek and minimalist design, it's perfect for professional environments. It also comes with plenty of room for expansion and cable management options.",
    psuDescription: "To ensure stable and reliable power delivery, we've included a high-quality 750W power supply from a reputable manufacturer. With plenty of headroom for expansion, it's perfect for our Workstation PC.",
    customizing: "Need to customize your build for specific tasks or workflows? Click the 'Customize This Part List' button to tailor this PC to your exact needs!",
    amdVersion: "Prefer AMD processors? Check out our AMD Workstation Guide for similar performance and reliability."
  }
  // Add more products as needed
];

export default products;

