/* ============================================
   HIXA Solutions — Script principal
   Catálogo real Dell + Lenovo
   ============================================ */

const products = [
  // ── DELL NOTEBOOKS ──
  {
    id: 1, brand: 'dell', name: 'Dell Pro 14 PC14250 Negro (Ultra 5, 16GB, 512GB)',
    category: 'Notebooks', badges: ['stock'],
    shortSpecs: ['Intel Core Ultra 5', '16 GB RAM', '512 GB SSD'],
    fullSpecs: { Procesador: 'Intel® Core™ Ultra 5', RAM: '16 GB', Almacenamiento: '512 GB SSD', Pantalla: '14"', 'Sistema operativo': 'Windows 11 Pro', Garantía: '1 año' },
    imagePath: 'assets/brands/dell/NOT DELL PRO 14 BLACK PC14250 UTRA 5 -16 GB -512 SSD - W11PRO - 1YBO SKU 7XNFP.png'
  },
  {
    id: 2, brand: 'dell', name: 'Dell Pro 14 PC14250 (Ultra 5-235U, 32GB, 512GB)',
    category: 'Notebooks', badges: ['new'],
    shortSpecs: ['Intel Core Ultra 5-235U', '32 GB RAM', '512 GB SSD FHD'],
    fullSpecs: { Procesador: 'Intel® Core™ Ultra 5-235U', RAM: '32 GB', Almacenamiento: '512 GB SSD', Pantalla: '14" FHD', 'Sistema operativo': 'Windows 11 Pro', Garantía: '3 años' },
    imagePath: 'assets/brands/dell/NOT DELL PRO 14 PC14250 U5-235U 32GB 512GB FHD 3Y Basic SKU U5ARL.png'
  },
  {
    id: 3, brand: 'dell', name: 'Dell Pro 14 PC14250 Plateado (Ultra 5, 16GB, 512GB)',
    category: 'Notebooks', badges: ['stock'],
    shortSpecs: ['Intel Core Ultra 5', '16 GB RAM', '512 GB SSD'],
    fullSpecs: { Procesador: 'Intel® Core™ Ultra 5', RAM: '16 GB', Almacenamiento: '512 GB SSD', Pantalla: '14"', 'Sistema operativo': 'Windows 11 Pro', Garantía: '3 años' },
    imagePath: 'assets/brands/dell/NOT DELL PRO 14 SILVER PC14250- ULTRA 5 - 16GB - 512 SSD - W11PRO - 3YBO SKU Y5C5C.png'
  },
  {
    id: 4, brand: 'dell', name: 'Dell Pro 16 PC16250 Plateado (Ultra 5, 16GB, 512GB)',
    category: 'Notebooks', badges: ['new', 'stock'],
    shortSpecs: ['Intel Core Ultra 5', '16 GB RAM', '16" pantalla'],
    fullSpecs: { Procesador: 'Intel® Core™ Ultra 5', RAM: '16 GB', Almacenamiento: '512 GB SSD', Pantalla: '16"', 'Sistema operativo': 'Windows 11 Pro', Garantía: '3 años' },
    imagePath: 'assets/brands/dell/NOT DELL PRO 16 SILVER PC16250 - ULTRA 5 - 16GB - 512 SSD - W11PRO - 3YBO SKU DVRC5.png'
  },

  // ── DELL ESCRITORIO ──
  {
    id: 5, brand: 'dell', name: 'Dell Pro Micro QCM1250 (i7) SKU DDD75',
    category: 'Escritorio', badges: ['stock'],
    shortSpecs: ['Intel Core i7', 'Factor de forma Micro', 'Ideal para oficina'],
    fullSpecs: { Procesador: 'Intel® Core™ i7 (QCM1250)', Almacenamiento: 'SSD', 'Factor de forma': 'Micro Desktop', 'Sistema operativo': 'Windows 11 Pro' },
    imagePath: 'assets/brands/dell/DELL PRO  DT Micro QCM1250 i7 SKU DDD75.png'
  },
  {
    id: 6, brand: 'dell', name: 'Dell Pro Micro QCM1250 (i5) SKU 0869J',
    category: 'Escritorio', badges: ['stock', 'offer'],
    shortSpecs: ['Intel Core i5', 'Factor de forma Micro', 'Bajo consumo, ideal oficina'],
    fullSpecs: { Procesador: 'Intel® Core™ i5 (QCM1250)', Almacenamiento: 'SSD', 'Factor de forma': 'Micro Desktop', 'Sistema operativo': 'Windows 11 Pro' },
    imagePath: 'assets/brands/dell/DELL PRO DT Micro QCM1250 i5 SKU 0869J.png'
  },
  {
    id: 7, brand: 'dell', name: 'Dell OptiPlex SFF (i7-14700, 16GB, 512GB)',
    category: 'Escritorio', badges: ['stock'],
    shortSpecs: ['Intel Core i7-14700', '16 GB RAM (2x8GB)', '512 GB SSD'],
    fullSpecs: { Procesador: 'Intel® Core™ i7-14700', RAM: '16 GB (2x8 GB)', Almacenamiento: '512 GB SSD', 'Factor de forma': 'Small Form Factor (SFF)', 'Sistema operativo': 'Windows 11 Pro', Garantía: '3 años' },
    imagePath: 'assets/brands/dell/PC DELL OPTIPLEX SFF I7-14700 16GB 2X8GB 512GB M&T 3YR PS SKU 07W85.png'
  },
  {
    id: 8, brand: 'dell', name: 'Dell Pro Micro QCM1250 (Ultra 5-235T, 32GB, 512GB)',
    category: 'Escritorio', badges: ['new'],
    shortSpecs: ['Intel Core Ultra 5-235T', '32 GB RAM (2x16GB)', '512 GB SSD'],
    fullSpecs: { Procesador: 'Intel® Core™ Ultra 5-235T', RAM: '32 GB (2x16 GB)', Almacenamiento: '512 GB SSD', 'Factor de forma': 'Micro Desktop', 'Sistema operativo': 'Windows 11 Pro', Garantía: '4 años' },
    imagePath: 'assets/brands/dell/PC DELL PRO MICRO QCM1250 U5-235T 32GB 2X16GB 512GB M&T 4YR PSP SKU 210-BPPW.png'
  },
  {
    id: 9, brand: 'dell', name: 'Dell Pro Slim QCS1250 SFF (i7-14700 vPro, 16GB, 512GB)',
    category: 'Escritorio', badges: ['stock'],
    shortSpecs: ['Intel Core i7-14700 vPro', '16 GB RAM', '512 GB SSD'],
    fullSpecs: { Procesador: 'Intel® Core™ i7-14700 vPro', RAM: '16 GB', Almacenamiento: '512 GB SSD', 'Factor de forma': 'Small Form Factor (SFF)', 'Sistema operativo': 'Windows 11 Pro', Garantía: '3 años' },
    imagePath: 'assets/brands/dell/PC DELL PRO SLIM QCS1250 SFF I7-14700 VPRO 16GB 1X16GB 512GB 3YR BASIC SKU 1N%GV.png'
  },

  // ── DELL MONITORES ──
  {
    id: 10, brand: 'dell', name: 'Monitor Dell P2425HE 24"',
    category: 'Monitores', badges: ['new'],
    shortSpecs: ['24" Full HD', 'Panel IPS', 'USB-C con entrega de energía'],
    fullSpecs: { Pantalla: '24" Full HD (1920x1080) IPS', Conectividad: 'USB-C, HDMI, DisplayPort', 'Frecuencia de actualización': '100 Hz', Garantía: '3 años' },
    imagePath: 'assets/brands/dell/Monitor Dell P2425HE 24.png'
  },

  // ── DELL ACCESORIOS ──
  {
    id: 11, brand: 'dell', name: 'Adaptador de Viaje USB-C 4 en 1 Dell Pro',
    category: 'Accesorios', badges: ['stock'],
    shortSpecs: ['USB-C a HDMI/USB-A/Ethernet', 'Diseño compacto de viaje', 'Compatible con notebooks Dell Pro'],
    fullSpecs: { Tipo: 'Adaptador multipuerto', Conectividad: 'USB-C, HDMI, USB-A, RJ45', Compatibilidad: 'Notebooks Dell Pro y USB-C estándar', Garantía: '1 año' },
    imagePath: 'assets/brands/dell/Adaptador de viaje USB-C 4 en 1 Dell Pro.avif'
  },
  {
    id: 12, brand: 'dell', name: 'Mochila Dell EcoLoop 14-16 (CP3724)',
    category: 'Accesorios', badges: ['stock'],
    shortSpecs: ['Compatible con notebooks de 14" a 16"', 'Material EcoLoop reciclado', 'Compartimentos acolchados'],
    fullSpecs: { Tipo: 'Mochila para notebook', Compatibilidad: 'Notebooks de 14" a 16"', Material: 'EcoLoop (materiales reciclados)', Garantía: '1 año' },
    imagePath: 'assets/brands/dell/Dell 14-16 EcoLoop Backpack - CP3724.avif'
  },
  {
    id: 13, brand: 'dell', name: 'Dell Dock Station SD25 (Negro)',
    category: 'Accesorios', badges: ['stock'],
    shortSpecs: ['Estación de acoplamiento USB-C', 'Múltiples puertos de conexión', 'Compatible con notebooks Dell'],
    fullSpecs: { Tipo: 'Dock station', Conectividad: 'USB-C, USB-A, HDMI/DP, Ethernet', Compatibilidad: 'Notebooks Dell con USB-C', Garantía: '1 año' },
    imagePath: 'assets/brands/dell/DELL dock-station-sd25-black.avif'
  },
  {
    id: 14, brand: 'dell', name: 'Dell Pro Dock WD25',
    category: 'Accesorios', badges: ['stock', 'offer'],
    shortSpecs: ['Estación de acoplamiento WD25', 'Carga y video por un solo cable', 'Múltiples puertos USB/HDMI/DP'],
    fullSpecs: { Tipo: 'Dock station', Conectividad: 'USB-C, USB-A, HDMI, DisplayPort, Ethernet', Compatibilidad: 'Notebooks Dell con USB-C', Garantía: '1 año' },
    imagePath: 'assets/brands/dell/Dell Pro Dock WD25.png'
  },
  {
    id: 15, brand: 'dell', name: 'Teclado y Mouse con Cable Dell KM300C',
    category: 'Accesorios', badges: ['stock'],
    shortSpecs: ['Kit teclado + mouse con cable', 'Conexión USB', 'Diseño ergonómico'],
    fullSpecs: { Tipo: 'Kit teclado y mouse', Conectividad: 'USB (cable)', Idioma: 'Español (QWERTY)', Garantía: '1 año' },
    imagePath: 'assets/brands/dell/Dell Wired Keyboard and Mouse - KM300C.avif'
  },
  {
    id: 16, brand: 'dell', name: 'Mouse Inalámbrico Dell WM126',
    category: 'Accesorios', badges: ['stock'],
    shortSpecs: ['Conexión inalámbrica 2.4 GHz', 'Diseño ambidiestro', 'Larga duración de batería'],
    fullSpecs: { Tipo: 'Mouse inalámbrico', Conectividad: 'USB Wireless 2.4 GHz', Ergonomía: 'Ambidiestro', Garantía: '1 año' },
    imagePath: 'assets/brands/dell/Dell Wireless Mouse-WM126.avif'
  },
  {
    id: 17, brand: 'dell', name: 'Mouse Óptico Dell MS116 (Negro)',
    category: 'Accesorios', badges: ['offer'],
    shortSpecs: ['Mouse óptico con cable', 'Conexión USB', 'Diseño simétrico'],
    fullSpecs: { Tipo: 'Mouse óptico con cable', Conectividad: 'USB', Color: 'Negro', Garantía: '1 año' },
    imagePath: 'assets/brands/dell/dell-ms116-optical-mouse-sapphire-1001a-black-hero.avif'
  },
  {
    id: 18, brand: 'dell', name: 'Teclado con Cable Dell KB216 (Negro)',
    category: 'Accesorios', badges: ['stock'],
    shortSpecs: ['Teclado con cable USB', 'Español (QWERTY)', 'Diseño resistente a derrames'],
    fullSpecs: { Tipo: 'Teclado con cable', Conectividad: 'USB', Idioma: 'Español (QWERTY)', Color: 'Negro', Garantía: '1 año' },
    imagePath: 'assets/brands/dell/Teclado con cable Dell - KB216 - español (QWERTY) - negro.avif'
  },
  {
    id: 19, brand: 'dell', name: 'Teclado y Mouse Inalámbrico Dell KM3322W',
    category: 'Accesorios', badges: ['stock'],
    shortSpecs: ['Kit inalámbrico teclado + mouse', 'Español (QWERTY)', 'Conexión USB wireless'],
    fullSpecs: { Tipo: 'Kit teclado y mouse inalámbrico', Conectividad: 'USB Wireless', Idioma: 'Español (QWERTY)', Garantía: '1 año' },
    imagePath: 'assets/brands/dell/Teclado y ratón Dell - KM3322W - español (QWERTY).avif'
  },

  // ── LENOVO NOTEBOOKS ──
  {
    id: 20, brand: 'lenovo', name: 'Lenovo IdeaPad Slim 3 15AMN8',
    category: 'Notebooks', badges: ['stock'],
    shortSpecs: ['AMD Ryzen 5 7520U', '16 GB RAM', '512 GB SSD'],
    fullSpecs: { Procesador: 'AMD Ryzen™ 5 7520U', RAM: '16 GB', Almacenamiento: '512 GB SSD', Pantalla: '15.6" Full HD', 'Sistema operativo': 'Windows 11 Home' },
    imagePath: 'assets/brands/lenovo/lenovo-ip-slim-3-15amn8.png'
  },
  {
    id: 21, brand: 'lenovo', name: 'Lenovo IdeaPad Slim 3 15IRH10 (i5)',
    category: 'Notebooks', badges: ['stock'],
    shortSpecs: ['Intel Core i5-13420H', '8 GB RAM', '512 GB SSD'],
    fullSpecs: { Procesador: 'Intel® Core™ i5-13420H', RAM: '8 GB', Almacenamiento: '512 GB SSD', Pantalla: '15.3" WUXGA', 'Sistema operativo': 'Windows 11 Home' },
    imagePath: 'assets/brands/lenovo/lenovo-ip-slim-3-15irh10.png'
  },
  {
    id: 22, brand: 'lenovo', name: 'Lenovo IdeaPad 1 15IJL7',
    category: 'Notebooks', badges: ['stock', 'offer'],
    shortSpecs: ['Intel Celeron N4500', '4 GB RAM', '128 GB SSD'],
    fullSpecs: { Procesador: 'Intel® Celeron® N4500', RAM: '4 GB', Almacenamiento: '128 GB SSD', Pantalla: '15.6" HD', 'Sistema operativo': 'Windows 11 Home' },
    imagePath: 'assets/brands/lenovo/lenovo-ideapad-1-15ijl7.png'
  },
  {
    id: 23, brand: 'lenovo', name: 'Lenovo IdeaPad Slim 3 15IAH8 Táctil',
    category: 'Notebooks', badges: ['stock'],
    shortSpecs: ['Intel Core i5-12450H', '8 GB RAM', '15.6" FHD Táctil'],
    fullSpecs: { Procesador: 'Intel® Core™ i5-12450H', RAM: '8 GB', Almacenamiento: '512 GB SSD', Pantalla: '15.6" FHD Táctil', 'Sistema operativo': 'Windows 11 Home' },
    imagePath: 'assets/brands/lenovo/lenovo-ideapad-slim-3-15iah8-tactil.png'
  },
  {
    id: 24, brand: 'lenovo', name: 'Lenovo IdeaPad Slim 3 15IRH10 Touch',
    category: 'Notebooks', badges: ['stock'],
    shortSpecs: ['Intel Core i5-13420H', '8 GB RAM', '15.3" WUXGA Touch'],
    fullSpecs: { Procesador: 'Intel® Core™ i5-13420H', RAM: '8 GB', Almacenamiento: '512 GB SSD', Pantalla: '15.3" WUXGA Touch', 'Sistema operativo': 'Windows 11 Home' },
    imagePath: 'assets/brands/lenovo/lenovo-ideapad-slim-3-15irh10-touch.png'
  },
  {
    id: 25, brand: 'lenovo', name: 'Lenovo IdeaPad Slim 3 15IRH10',
    category: 'Notebooks', badges: ['stock'],
    shortSpecs: ['Intel Core i5-13420H', '8 GB RAM', '15.3" WUXGA'],
    fullSpecs: { Procesador: 'Intel® Core™ i5-13420H', RAM: '8 GB', Almacenamiento: '512 GB SSD', Pantalla: '15.3" WUXGA', 'Sistema operativo': 'Windows 11 Home' },
    imagePath: 'assets/brands/lenovo/lenovo-ideapad-slim-3-15irh10.png'
  },
  {
    id: 26, brand: 'lenovo', name: 'Lenovo LOQ 15IAX9E (Gaming)',
    category: 'Notebooks', badges: ['new'],
    shortSpecs: ['Intel Core i5-12450HX', 'NVIDIA RTX 3050 6 GB', '15.6" FHD 144 Hz'],
    fullSpecs: { Procesador: 'Intel® Core™ i5-12450HX', RAM: '8 GB', Almacenamiento: '512 GB SSD', GPU: 'NVIDIA® GeForce RTX™ 3050 6 GB GDDR6', Pantalla: '15.6" Full HD 144 Hz', 'Sistema operativo': 'Free DOS' },
    imagePath: 'assets/brands/lenovo/lenovo-loq-15iax9e-rtx3050.png'
  },
  {
    id: 27, brand: 'lenovo', name: 'Lenovo T14 (AMD Ryzen 5)',
    category: 'Notebooks', badges: ['stock'],
    shortSpecs: ['AMD Ryzen 5-7540U', '16 GB RAM', 'Windows 11 Pro'],
    fullSpecs: { Procesador: 'AMD Ryzen™ 5-7540U', RAM: '16 GB', Almacenamiento: '512 GB SSD', Pantalla: '14" FHD', 'Sistema operativo': 'Windows 11 Pro' },
    imagePath: 'assets/brands/lenovo/lenovo-t14-ryzen5-7540u.png'
  },
  {
    id: 28, brand: 'lenovo', name: 'Lenovo ThinkBook 14 G8',
    category: 'Notebooks', badges: ['new'],
    shortSpecs: ['Intel Core 7 240H', '16 GB RAM', '14" WUXGA'],
    fullSpecs: { Procesador: 'Intel® Core™ 7 240H', RAM: '16 GB', Almacenamiento: '512 GB SSD', Pantalla: '14" WUXGA', 'Sistema operativo': 'FreeDOS' },
    imagePath: 'assets/brands/lenovo/lenovo-thinkbook-14-g8-core7.png'
  },
  {
    id: 29, brand: 'lenovo', name: 'Lenovo ThinkBook 16 G8 IRL',
    category: 'Notebooks', badges: ['new'],
    shortSpecs: ['Intel Core 7 240H', '16 GB RAM', '16" WUXGA'],
    fullSpecs: { Procesador: 'Intel® Core™ 7 240H', RAM: '16 GB', Almacenamiento: '512 GB SSD', Pantalla: '16" WUXGA', 'Sistema operativo': 'FreeDOS' },
    imagePath: 'assets/brands/lenovo/lenovo-thinkbook-16-g8-irl-core7.png'
  },
  {
    id: 30, brand: 'lenovo', name: 'Lenovo ThinkBook 16 G8 (Win 11 Pro)',
    category: 'Notebooks', badges: ['stock'],
    shortSpecs: ['Intel Core 5 210H', '8 GB RAM', '16" WUXGA'],
    fullSpecs: { Procesador: 'Intel® Core™ 5 210H', RAM: '8 GB', Almacenamiento: '512 GB SSD', Pantalla: '16" WUXGA', 'Sistema operativo': 'Windows 11 Pro' },
    imagePath: 'assets/brands/lenovo/lenovo-thinkbook-16-g8-core5-w11pro.png'
  },
  {
    id: 31, brand: 'lenovo', name: 'Lenovo ThinkBook 16 G8 (FreeDOS)',
    category: 'Notebooks', badges: ['stock', 'offer'],
    shortSpecs: ['Intel Core 5 210H', '8 GB RAM', '512 GB SSD'],
    fullSpecs: { Procesador: 'Intel® Core™ 5 210H', RAM: '8 GB', Almacenamiento: '512 GB SSD', 'Sistema operativo': 'FreeDOS' },
    imagePath: 'assets/brands/lenovo/lenovo-thinkbook-16-g8-core5-freedos.png'
  },
  {
    id: 32, brand: 'lenovo', name: 'Lenovo ThinkPad T14 G6 (Ultra 7)',
    category: 'Notebooks', badges: ['new', 'stock'],
    shortSpecs: ['Intel Core Ultra 7 255U', '16 GB RAM', '3 años de garantía'],
    fullSpecs: { Procesador: 'Intel® Core™ Ultra 7 255U', RAM: '16 GB', Almacenamiento: '512 GB SSD', Pantalla: '14" WUXGA', 'Sistema operativo': 'Windows 11 Pro', Garantía: '3 años' },
    imagePath: 'assets/brands/lenovo/lenovo-thinkpad-t14-g6-ultra7.png'
  },
  {
    id: 33, brand: 'lenovo', name: 'Lenovo ThinkPad T16 G4 (Ultra 5)',
    category: 'Notebooks', badges: ['stock'],
    shortSpecs: ['Intel Core Ultra 5 225U', '16 GB RAM', '16" WUXGA'],
    fullSpecs: { Procesador: 'Intel® Core™ Ultra 5 225U', RAM: '16 GB', Almacenamiento: '512 GB SSD', Pantalla: '16" WUXGA', 'Sistema operativo': 'Windows 11 Pro' },
    imagePath: 'assets/brands/lenovo/lenovo-thinkpad-t16-g4-ultra5.png'
  },
  {
    id: 34, brand: 'lenovo', name: 'Lenovo ThinkPad T16 G4 (Ultra 7)',
    category: 'Notebooks', badges: ['new'],
    shortSpecs: ['Intel Core Ultra 7 255U', '16 GB RAM', '16" WUXGA'],
    fullSpecs: { Procesador: 'Intel® Core™ Ultra 7 255U', RAM: '16 GB', Almacenamiento: '512 GB SSD', Pantalla: '16" WUXGA', 'Sistema operativo': 'Windows 11 Pro' },
    imagePath: 'assets/brands/lenovo/lenovo-thinkpad-t16-g4-ultra7.png'
  },
  {
    id: 35, brand: 'lenovo', name: 'Lenovo ThinkPad T14 (Ryzen 5, Win 11)',
    category: 'Notebooks', badges: ['stock'],
    shortSpecs: ['AMD Ryzen 5-6650U', '16 GB RAM', '14" WUXGA'],
    fullSpecs: { Procesador: 'AMD Ryzen™ 5-6650U', RAM: '16 GB', Almacenamiento: '512 GB SSD', Pantalla: '14" WUXGA', 'Sistema operativo': 'Windows 11' },
    imagePath: 'assets/brands/lenovo/lenovo-thinkpad-t14-ryzen5-6650u.png'
  },
  {
    id: 36, brand: 'lenovo', name: 'Lenovo ThinkPad T14 (Ryzen 5, Win 11 Pro)',
    category: 'Notebooks', badges: ['stock'],
    shortSpecs: ['AMD Ryzen 5-6650U', '16 GB RAM', '14" WUXGA'],
    fullSpecs: { Procesador: 'AMD Ryzen™ 5-6650U', RAM: '16 GB', Almacenamiento: '512 GB SSD', Pantalla: '14" WUXGA', 'Sistema operativo': 'Windows 11 Pro' },
    imagePath: 'assets/brands/lenovo/lenovo-thinkpad-t14-ryzen5-6650u-pro.png'
  },
  {
    id: 37, brand: 'lenovo', name: 'Lenovo ThinkPad X13 (Ryzen 7 Pro)',
    category: 'Notebooks', badges: ['stock'],
    shortSpecs: ['AMD Ryzen 7 Pro 5850U', '16 GB RAM', '3 años de garantía'],
    fullSpecs: { Procesador: 'AMD Ryzen™ 7 Pro 5850U', RAM: '16 GB', Almacenamiento: '512 GB SSD', Pantalla: '13.3" FHD', 'Sistema operativo': 'Windows 11 Pro', Garantía: '3 años' },
    imagePath: 'assets/brands/lenovo/lenovo-thinkpad-x13-ryzen7-pro.png'
  },
  {
    id: 38, brand: 'lenovo', name: 'Lenovo V15 G4 (i7)',
    category: 'Notebooks', badges: ['stock'],
    shortSpecs: ['Intel Core i7-13620H', '8 GB RAM', '15.6" Full HD'],
    fullSpecs: { Procesador: 'Intel® Core™ i7-13620H', RAM: '8 GB', Almacenamiento: '512 GB SSD', Pantalla: '15.6" Full HD', 'Sistema operativo': 'Free DOS' },
    imagePath: 'assets/brands/lenovo/lenovo-v15-g4-i7.png'
  },
  {
    id: 39, brand: 'lenovo', name: 'Lenovo Yoga Slim 7',
    category: 'Notebooks', badges: ['new'],
    shortSpecs: ['Intel Core Ultra 5 125H', '16 GB RAM', '512 GB SSD'],
    fullSpecs: { Procesador: 'Intel® Core™ Ultra 5 125H', RAM: '16 GB', Almacenamiento: '512 GB SSD', 'Sistema operativo': 'Windows 11 Home' },
    imagePath: 'assets/brands/lenovo/lenovo-yoga-slim-7-ultra5.png'
  },

  // ── LENOVO SERVIDORES ──
  {
    id: 40, brand: 'lenovo', name: 'Lenovo ThinkSystem SR630 V4',
    category: 'Servidores', badges: ['new'],
    shortSpecs: ['Intel Xeon 6505P 12C 2.2 GHz', '32 GB TruDDR5 6400 MHz', 'RAID 940-8i 4 GB Flash'],
    fullSpecs: { Procesador: 'Intel Xeon 6505P 12C 150W 2.2 GHz', RAM: 'ThinkSystem 32 GB TruDDR5 6400 MHz', Almacenamiento: 'ThinkSystem RAID 940-8i 4 GB Flash PCIe Gen4', 'Factor de forma': 'Rack 1U' },
    imagePath: 'assets/brands/lenovo/lenovo-sr630-v4.png'
  }
];

// ---- Estado ----
let currentBrand = 'dell';
let currentCategory = 'all';

// ---- Placeholder SVG ----
function placeholderSVG(name) {
  const initials = name.split(' ').slice(1, 3).map(w => w[0]).join('').toUpperCase() || 'IT';
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
      <rect width="400" height="300" fill="#F1F5F9"/>
      <rect x="120" y="70" width="160" height="110" rx="8" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="2"/>
      <rect x="160" y="190" width="80" height="6" rx="3" fill="#CBD5E1"/>
      <text x="200" y="135" text-anchor="middle" font-family="system-ui,sans-serif" font-size="28" font-weight="600" fill="#94A3B8">${initials}</text>
      <text x="200" y="225" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#94A3B8">Imagen no disponible</text>
    </svg>
  `)}`;
}

// ---- Badge HTML ----
function badgeHTML(badge) {
  const labels = { stock: 'En stock', new: 'Nuevo', offer: 'Oferta' };
  return `<span class="badge badge--${badge}">${labels[badge] || badge}</span>`;
}

// ---- Render de tarjeta ----
function cardHTML(p) {
  const brandLabel = p.brand === 'dell' ? 'Dell' : 'Lenovo';
  const waMsg = encodeURIComponent(`Hola! Quiero consultar por ${p.name} (${brandLabel})`);
  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-card__img">
        <div class="product-card__badges">${p.badges.map(badgeHTML).join('')}</div>
        <img src="${p.imagePath}" alt="${p.name}" loading="lazy"
             onerror="this.onerror=null;this.src='${placeholderSVG(p.name)}'">
      </div>
      <div class="product-card__body">
        <h3 class="product-card__name">${p.name}</h3>
        <ul class="product-card__specs">
          ${p.shortSpecs.map(s => `<li>${s}</li>`).join('')}
        </ul>
        <div class="product-card__price"><span>Precio </span>a consultar</div>
        <div class="product-card__actions">
          <a href="https://wa.me/5491178270190?text=${waMsg}" target="_blank" rel="noopener" class="btn btn--whatsapp btn--sm">Consultar</a>
          <button class="btn btn--outline btn--sm" onclick="openModal(${p.id})">Detalles</button>
        </div>
      </div>
    </article>`;
}

// ---- Filtrar y renderizar ----
function renderProducts() {
  const search = document.getElementById('filterSearch').value.toLowerCase();
  const category = document.getElementById('filterCategory').value;
  const sort = document.getElementById('filterSort').value;

  // Si el usuario filtra por "Servidores" mostramos todas las marcas ignorando la marca activa
  const effectiveCategory = category !== 'all' ? category : currentCategory;
  const showAllBrands = effectiveCategory === 'Servidores';

  let filtered = products.filter(p => {
    if (!showAllBrands && p.brand !== currentBrand) return false;
    if (currentCategory !== 'all' && p.category !== currentCategory) return false;
    if (category !== 'all' && p.category !== category) return false;
    if (search && !p.name.toLowerCase().includes(search) && !p.shortSpecs.some(s => s.toLowerCase().includes(search))) return false;
    return true;
  });

  if (sort === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'newest') filtered.sort((a, b) => b.id - a.id);

  const grid = document.getElementById('productsGrid');
  const empty = document.getElementById('productsEmpty');
  const count = document.getElementById('productsCount');

  grid.innerHTML = filtered.map(cardHTML).join('');
  empty.style.display = filtered.length ? 'none' : 'block';
  count.textContent = `${filtered.length} producto${filtered.length !== 1 ? 's' : ''}`;
}

// ---- Cambia el hero cuando se filtra por "Servidores" (que muestra todas las marcas) ----
function updateBrandHeroForCategory() {
  const titleEl = document.getElementById('brandTitle');
  const subEl = document.getElementById('brandSubtitle');
  if (currentCategory === 'Servidores') {
    titleEl.textContent = 'Servidores en HIXA';
    subEl.textContent = 'Servidores Lenovo ThinkSystem para empresas, con garantía oficial.';
  } else {
    const brandName = currentBrand === 'dell' ? 'Dell' : 'Lenovo';
    const subtitle = currentBrand === 'dell'
      ? 'Notebooks Dell Pro, equipos de escritorio, monitores y accesorios con garantía oficial.'
      : 'Notebooks ThinkPad, ThinkBook, IdeaPad, Yoga y servidores ThinkSystem con garantía oficial.';
    titleEl.textContent = `${brandName} en HIXA`;
    subEl.textContent = subtitle;
  }
}

// ---- Selección de marca ----
function selectBrand(brand) {
  currentBrand = brand;
  currentCategory = 'all';

  document.querySelectorAll('.brand-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.brand === brand);
  });

  const brandName = brand === 'dell' ? 'Dell' : 'Lenovo';
  const subtitle = brand === 'dell'
    ? 'Notebooks Dell Pro, equipos de escritorio, monitores y accesorios con garantía oficial.'
    : 'Notebooks ThinkPad, ThinkBook, IdeaPad, Yoga y servidores ThinkSystem con garantía oficial.';
  document.getElementById('brandTitle').textContent = `${brandName} en HIXA`;
  document.getElementById('brandSubtitle').textContent = subtitle;

  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));
  document.getElementById('filterCategory').value = 'all';

  renderProducts();
}

// ---- Modal ----
function openModal(id) {
  const p = products.find(pr => pr.id === id);
  if (!p) return;

  const brandLabel = p.brand === 'dell' ? 'Dell' : 'Lenovo';
  const waMsg = encodeURIComponent(`Hola! Quiero consultar por ${p.name} (${brandLabel})`);

  document.getElementById('modalBody').innerHTML = `
    <h2>${p.name}</h2>
    <div class="modal-img">
      <img src="${p.imagePath}" alt="${p.name}"
           onerror="this.onerror=null;this.src='${placeholderSVG(p.name)}'">
    </div>
    <table>
      ${Object.entries(p.fullSpecs).map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
    </table>
    <div class="product-card__price" style="margin-bottom:1rem"><span>Precio </span>a consultar</div>
    <a href="https://wa.me/5491178270190?text=${waMsg}" target="_blank" rel="noopener" class="btn btn--whatsapp">Consultar por WhatsApp</a>
  `;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.brand-tab').forEach(btn => {
    btn.addEventListener('click', () => selectBrand(btn.dataset.brand));
  });

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      currentCategory = chip.dataset.category;
      document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === chip));
      document.getElementById('filterCategory').value = currentCategory === 'all' ? 'all' : currentCategory;
      updateBrandHeroForCategory();
      renderProducts();
    });
  });

  document.getElementById('filterSearch').addEventListener('input', renderProducts);
  document.getElementById('filterCategory').addEventListener('change', (e) => {
    currentCategory = e.target.value;
    document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.category === currentCategory));
    updateBrandHeroForCategory();
    renderProducts();
  });
  document.getElementById('filterSort').addEventListener('change', renderProducts);

  document.getElementById('filterClear').addEventListener('click', () => {
    document.getElementById('filterSearch').value = '';
    document.getElementById('filterCategory').value = 'all';
    document.getElementById('filterSort').value = 'recommended';
    currentCategory = 'all';
    document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));
    renderProducts();
  });

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('mainNav').classList.toggle('open');
  });

  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('contactSuccess').style.display = 'block';
    e.target.reset();
    setTimeout(() => { document.getElementById('contactSuccess').style.display = 'none'; }, 5000);
  });

  renderProducts();
});
