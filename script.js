/* ============================================
   HIXA Solutions — Script principal
   ============================================ */

// ---- Datos de productos ----
// imagePath: ruta local esperada. Si no carga, se usa placeholder SVG.
// LISTADO DE IMÁGENES ESPERADAS:
// Lenovo:
//   assets/brands/lenovo/thinkpad-e14-g6.jpg
//   assets/brands/lenovo/thinkpad-l14-g5.jpg
//   assets/brands/lenovo/thinkpad-t14s-g5.jpg
//   assets/brands/lenovo/thinkpad-x1-carbon-g12.jpg
//   assets/brands/lenovo/ideapad-slim-3.jpg
//   assets/brands/lenovo/ideapad-slim-5.jpg
//   assets/brands/lenovo/thinkcentre-neo-50s.jpg
//   assets/brands/lenovo/thinkcentre-m70q-g4.jpg
//   assets/brands/lenovo/thinkstation-p3-tower.jpg
//   assets/brands/lenovo/thinkstation-p3-ultra.jpg
//   assets/brands/lenovo/thinkvision-t24i-30.jpg
//   assets/brands/lenovo/thinkvision-p27h-30.jpg
//   assets/brands/lenovo/thinkserver-sr250-v3.jpg
//   assets/brands/lenovo/thinkserver-sr630-v3.jpg
//   assets/brands/lenovo/usb-c-dock-gen2.jpg
//   assets/brands/lenovo/thinkpad-backpack.jpg
// Dell:
//   assets/brands/dell/latitude-3440.jpg
//   assets/brands/dell/latitude-5540.jpg
//   assets/brands/dell/latitude-7440.jpg
//   assets/brands/dell/latitude-9440.jpg
//   assets/brands/dell/inspiron-15-3520.jpg
//   assets/brands/dell/inspiron-16-5630.jpg
//   assets/brands/dell/optiplex-3000-sff.jpg
//   assets/brands/dell/optiplex-7010-micro.jpg
//   assets/brands/dell/precision-3580.jpg
//   assets/brands/dell/precision-5680.jpg
//   assets/brands/dell/ultrasharp-u2723qe.jpg
//   assets/brands/dell/monitor-p2422h.jpg
//   assets/brands/dell/poweredge-t150.jpg
//   assets/brands/dell/poweredge-r660.jpg
//   assets/brands/dell/thunderbolt-dock-wd22tb4.jpg
//   assets/brands/dell/pro-backpack-15.jpg

const products = [
  // ── LENOVO ──
  {
    id: 1, brand: 'lenovo', name: 'Lenovo ThinkPad E14 Gen 6',
    category: 'Notebooks', price: 849000, badges: ['stock'],
    shortSpecs: ['Intel Core i5-1345U', '16 GB RAM DDR5', 'SSD 512 GB NVMe'],
    fullSpecs: { Procesador: 'Intel Core i5-1345U (12 núcleos)', RAM: '16 GB DDR5 4800 MHz', Almacenamiento: '512 GB SSD NVMe M.2', Pantalla: '14" FHD IPS antirreflejo', Gráficos: 'Intel Iris Xe', SO: 'Windows 11 Pro', Batería: 'Hasta 10 hs', Peso: '1.64 kg' },
    imagePath: 'assets/brands/lenovo/thinkpad-e14-g6.jpg'
  },
  {
    id: 2, brand: 'lenovo', name: 'Lenovo ThinkPad L14 Gen 5',
    category: 'Notebooks', price: 920000, badges: ['stock'],
    shortSpecs: ['Intel Core i5-1345U', '16 GB RAM DDR5', 'SSD 512 GB NVMe'],
    fullSpecs: { Procesador: 'Intel Core i5-1345U', RAM: '16 GB DDR5', Almacenamiento: '512 GB SSD NVMe', Pantalla: '14" FHD IPS', Gráficos: 'Intel Iris Xe', SO: 'Windows 11 Pro', Batería: 'Hasta 11 hs', Peso: '1.53 kg' },
    imagePath: 'assets/brands/lenovo/thinkpad-l14-g5.jpg'
  },
  {
    id: 3, brand: 'lenovo', name: 'Lenovo ThinkPad T14s Gen 5',
    category: 'Notebooks', price: 1450000, badges: ['new'],
    shortSpecs: ['Intel Core Ultra 7 155U', '32 GB RAM LPDDR5x', 'SSD 1 TB NVMe'],
    fullSpecs: { Procesador: 'Intel Core Ultra 7 155U', RAM: '32 GB LPDDR5x', Almacenamiento: '1 TB SSD NVMe', Pantalla: '14" 2.8K OLED', Gráficos: 'Intel Arc', SO: 'Windows 11 Pro', Batería: 'Hasta 13 hs', Peso: '1.24 kg' },
    imagePath: 'assets/brands/lenovo/thinkpad-t14s-g5.jpg'
  },
  {
    id: 4, brand: 'lenovo', name: 'Lenovo ThinkPad X1 Carbon Gen 12',
    category: 'Notebooks', price: 2100000, badges: ['new', 'stock'],
    shortSpecs: ['Intel Core Ultra 7 165U', '32 GB LPDDR5x', 'SSD 1 TB Gen4'],
    fullSpecs: { Procesador: 'Intel Core Ultra 7 165U', RAM: '32 GB LPDDR5x', Almacenamiento: '1 TB SSD PCIe Gen4', Pantalla: '14" 2.8K OLED táctil', Gráficos: 'Intel Arc', SO: 'Windows 11 Pro', Batería: 'Hasta 15 hs', Peso: '1.08 kg' },
    imagePath: 'assets/brands/lenovo/thinkpad-x1-carbon-g12.jpg'
  },
  {
    id: 5, brand: 'lenovo', name: 'Lenovo IdeaPad Slim 3 15"',
    category: 'Notebooks', price: 580000, badges: ['offer'],
    shortSpecs: ['AMD Ryzen 5 7520U', '8 GB RAM DDR5', 'SSD 256 GB NVMe'],
    fullSpecs: { Procesador: 'AMD Ryzen 5 7520U', RAM: '8 GB DDR5', Almacenamiento: '256 GB SSD NVMe', Pantalla: '15.6" FHD IPS', Gráficos: 'AMD Radeon', SO: 'Windows 11 Home', Batería: 'Hasta 8 hs', Peso: '1.63 kg' },
    imagePath: 'assets/brands/lenovo/ideapad-slim-3.jpg'
  },
  {
    id: 6, brand: 'lenovo', name: 'Lenovo IdeaPad Slim 5 14"',
    category: 'Notebooks', price: 750000, badges: ['stock'],
    shortSpecs: ['Intel Core i7-1355U', '16 GB RAM DDR5', 'SSD 512 GB NVMe'],
    fullSpecs: { Procesador: 'Intel Core i7-1355U', RAM: '16 GB DDR5', Almacenamiento: '512 GB SSD NVMe', Pantalla: '14" 2.2K IPS', Gráficos: 'Intel Iris Xe', SO: 'Windows 11 Home', Batería: 'Hasta 12 hs', Peso: '1.46 kg' },
    imagePath: 'assets/brands/lenovo/ideapad-slim-5.jpg'
  },
  {
    id: 7, brand: 'lenovo', name: 'Lenovo ThinkCentre Neo 50s Gen 5',
    category: 'Desktops', price: 680000, badges: ['stock'],
    shortSpecs: ['Intel Core i5-1440P', '16 GB DDR5', 'SSD 512 GB'],
    fullSpecs: { Procesador: 'Intel Core i5-1440P', RAM: '16 GB DDR5', Almacenamiento: '512 GB SSD NVMe', 'Factor de forma': 'SFF (Small Form Factor)', Gráficos: 'Intel UHD', SO: 'Windows 11 Pro', Puertos: '8x USB, HDMI, DP', Garantía: '3 años on-site' },
    imagePath: 'assets/brands/lenovo/thinkcentre-neo-50s.jpg'
  },
  {
    id: 8, brand: 'lenovo', name: 'Lenovo ThinkCentre M70q Gen 4',
    category: 'Desktops', price: 820000, badges: ['new'],
    shortSpecs: ['Intel Core i7-1360P', '16 GB DDR5', 'SSD 512 GB'],
    fullSpecs: { Procesador: 'Intel Core i7-1360P', RAM: '16 GB DDR5', Almacenamiento: '512 GB SSD NVMe', 'Factor de forma': 'Tiny (Mini PC)', Gráficos: 'Intel Iris Xe', SO: 'Windows 11 Pro', Puertos: '10x USB, HDMI, DP', Garantía: '3 años on-site' },
    imagePath: 'assets/brands/lenovo/thinkcentre-m70q-g4.jpg'
  },
  {
    id: 9, brand: 'lenovo', name: 'Lenovo ThinkStation P3 Tower',
    category: 'Workstations', price: 2800000, badges: ['stock'],
    shortSpecs: ['Intel Core i7-13700', 'NVIDIA RTX A2000', '32 GB DDR5 ECC'],
    fullSpecs: { Procesador: 'Intel Core i7-13700 (16 núcleos)', RAM: '32 GB DDR5 ECC', Almacenamiento: '1 TB SSD NVMe', GPU: 'NVIDIA RTX A2000 12 GB', SO: 'Windows 11 Pro for Workstations', 'Factor de forma': 'Tower', Certificaciones: 'ISV Certified', Garantía: '3 años on-site' },
    imagePath: 'assets/brands/lenovo/thinkstation-p3-tower.jpg'
  },
  {
    id: 10, brand: 'lenovo', name: 'Lenovo ThinkStation P3 Ultra',
    category: 'Workstations', price: 3200000, badges: ['new'],
    shortSpecs: ['Intel Core i9-13900', 'NVIDIA RTX A4000', '64 GB DDR5 ECC'],
    fullSpecs: { Procesador: 'Intel Core i9-13900 (24 núcleos)', RAM: '64 GB DDR5 ECC', Almacenamiento: '2 TB SSD NVMe', GPU: 'NVIDIA RTX A4000 16 GB', SO: 'Windows 11 Pro for Workstations', 'Factor de forma': 'Ultra SFF', Certificaciones: 'ISV Certified', Garantía: '3 años on-site' },
    imagePath: 'assets/brands/lenovo/thinkstation-p3-ultra.jpg'
  },
  {
    id: 11, brand: 'lenovo', name: 'Lenovo ThinkVision T24i-30',
    category: 'Monitores', price: 290000, badges: ['stock'],
    shortSpecs: ['23.8" FHD IPS', 'USB-C 75W Power Delivery', '99% sRGB'],
    fullSpecs: { Tamaño: '23.8"', Resolución: '1920 x 1080 (FHD)', Panel: 'IPS', Conectividad: 'HDMI, DP, USB-C (75W PD)', 'Tiempo de respuesta': '4 ms', Soporte: 'Pivot, tilt, swivel, height', Certificaciones: 'TÜV Eye Comfort', Garantía: '3 años' },
    imagePath: 'assets/brands/lenovo/thinkvision-t24i-30.jpg'
  },
  {
    id: 12, brand: 'lenovo', name: 'Lenovo ThinkVision P27h-30',
    category: 'Monitores', price: 520000, badges: ['new'],
    shortSpecs: ['27" QHD IPS', 'USB-C 100W PD', 'Daisy Chain'],
    fullSpecs: { Tamaño: '27"', Resolución: '2560 x 1440 (QHD)', Panel: 'IPS', Conectividad: 'HDMI, DP, USB-C (100W PD), RJ45', 'Funciones': 'Daisy Chain, KVM integrado', Soporte: 'Ajustable en 4 ejes', Certificaciones: 'TÜV, TCO', Garantía: '3 años' },
    imagePath: 'assets/brands/lenovo/thinkvision-p27h-30.jpg'
  },
  {
    id: 13, brand: 'lenovo', name: 'Lenovo ThinkSystem SR250 V3',
    category: 'Servidores', price: 3500000, badges: ['stock'],
    shortSpecs: ['Intel Xeon E-2400', 'Hasta 128 GB ECC', 'Rack 1U'],
    fullSpecs: { Procesador: 'Intel Xeon E-2400 Series', RAM: 'Hasta 128 GB DDR5 ECC', Almacenamiento: 'Hasta 4 x 3.5" hot-swap', 'Factor de forma': 'Rack 1U', Red: '2x 1GbE integrado', Gestión: 'Lenovo XClarity Controller', Fuente: 'Redundante 500W', Garantía: '3 años on-site' },
    imagePath: 'assets/brands/lenovo/thinkserver-sr250-v3.jpg'
  },
  {
    id: 14, brand: 'lenovo', name: 'Lenovo ThinkSystem SR630 V3',
    category: 'Servidores', price: 7200000, badges: ['stock'],
    shortSpecs: ['2x Intel Xeon Scalable', 'Hasta 2 TB ECC', 'Rack 1U'],
    fullSpecs: { Procesador: '2x Intel Xeon Scalable 4ta Gen', RAM: 'Hasta 2 TB DDR5 ECC (32 DIMM)', Almacenamiento: 'Hasta 10 x 2.5" NVMe/SAS/SATA', 'Factor de forma': 'Rack 1U', Red: 'OCP 3.0, hasta 25GbE', GPU: 'Hasta 2 GPU', Gestión: 'XClarity Controller Enterprise', Garantía: '3 años on-site' },
    imagePath: 'assets/brands/lenovo/thinkserver-sr630-v3.jpg'
  },
  {
    id: 15, brand: 'lenovo', name: 'Lenovo USB-C Dock Gen 2',
    category: 'Accesorios', price: 165000, badges: ['stock'],
    shortSpecs: ['USB-C 100W passthrough', '3x pantallas 4K', '10 puertos total'],
    fullSpecs: { Tipo: 'Docking Station USB-C', Alimentación: 'USB-C 100W Power Delivery', Salidas: 'HDMI 2.0, 2x DP 1.4', USB: '3x USB-A 3.1, 2x USB-C', Red: 'RJ45 Gigabit', Audio: 'Combo jack', Compatibilidad: 'Windows / macOS / Chrome OS', Garantía: '1 año' },
    imagePath: 'assets/brands/lenovo/usb-c-dock-gen2.jpg'
  },
  {
    id: 16, brand: 'lenovo', name: 'Lenovo ThinkPad Professional Backpack',
    category: 'Accesorios', price: 65000, badges: ['stock', 'offer'],
    shortSpecs: ['Hasta 16"', 'Resistente al agua', 'Compartimento acolchado'],
    fullSpecs: { Tipo: 'Mochila profesional', 'Capacidad notebook': 'Hasta 16"', Material: 'Poliéster reciclado, resistente al agua', Compartimentos: 'Notebook, tablet, organizador', Peso: '0.8 kg', Color: 'Negro', Certificaciones: 'EPEAT', Garantía: '1 año' },
    imagePath: 'assets/brands/lenovo/thinkpad-backpack.jpg'
  },

  // ── DELL ──
  {
    id: 17, brand: 'dell', name: 'Dell Latitude 3440',
    category: 'Notebooks', price: 780000, badges: ['stock'],
    shortSpecs: ['Intel Core i5-1335U', '16 GB RAM DDR4', 'SSD 512 GB NVMe'],
    fullSpecs: { Procesador: 'Intel Core i5-1335U', RAM: '16 GB DDR4 3200 MHz', Almacenamiento: '512 GB SSD NVMe M.2', Pantalla: '14" FHD IPS antirreflejo', Gráficos: 'Intel Iris Xe', SO: 'Windows 11 Pro', Batería: 'Hasta 9 hs', Peso: '1.56 kg' },
    imagePath: 'assets/brands/dell/latitude-3440.jpg'
  },
  {
    id: 18, brand: 'dell', name: 'Dell Latitude 5540',
    category: 'Notebooks', price: 1100000, badges: ['stock'],
    shortSpecs: ['Intel Core i7-1365U', '16 GB DDR5', 'SSD 512 GB NVMe'],
    fullSpecs: { Procesador: 'Intel Core i7-1365U', RAM: '16 GB DDR5', Almacenamiento: '512 GB SSD NVMe', Pantalla: '15.6" FHD IPS', Gráficos: 'Intel Iris Xe', SO: 'Windows 11 Pro', Batería: 'Hasta 10 hs', Peso: '1.66 kg' },
    imagePath: 'assets/brands/dell/latitude-5540.jpg'
  },
  {
    id: 19, brand: 'dell', name: 'Dell Latitude 7440',
    category: 'Notebooks', price: 1650000, badges: ['new', 'stock'],
    shortSpecs: ['Intel Core i7-1365U', '32 GB LPDDR5', 'SSD 1 TB NVMe'],
    fullSpecs: { Procesador: 'Intel Core i7-1365U', RAM: '32 GB LPDDR5', Almacenamiento: '1 TB SSD NVMe', Pantalla: '14" FHD+ IPS táctil', Gráficos: 'Intel Iris Xe', SO: 'Windows 11 Pro', Batería: 'Hasta 12 hs', Peso: '1.37 kg' },
    imagePath: 'assets/brands/dell/latitude-7440.jpg'
  },
  {
    id: 20, brand: 'dell', name: 'Dell Latitude 9440 2-in-1',
    category: 'Notebooks', price: 2350000, badges: ['new'],
    shortSpecs: ['Intel Core i7-1370P', '32 GB LPDDR5x', 'SSD 1 TB NVMe'],
    fullSpecs: { Procesador: 'Intel Core i7-1370P', RAM: '32 GB LPDDR5x', Almacenamiento: '1 TB SSD NVMe', Pantalla: '14" QHD+ IPS táctil, 2-in-1', Gráficos: 'Intel Iris Xe', SO: 'Windows 11 Pro', Batería: 'Hasta 13 hs', Peso: '1.45 kg', Extra: 'Haptic touchpad, collaboration touch bar' },
    imagePath: 'assets/brands/dell/latitude-9440.jpg'
  },
  {
    id: 21, brand: 'dell', name: 'Dell Inspiron 15 3520',
    category: 'Notebooks', price: 520000, badges: ['offer'],
    shortSpecs: ['Intel Core i5-1235U', '8 GB DDR4', 'SSD 256 GB NVMe'],
    fullSpecs: { Procesador: 'Intel Core i5-1235U', RAM: '8 GB DDR4', Almacenamiento: '256 GB SSD NVMe', Pantalla: '15.6" FHD', Gráficos: 'Intel UHD', SO: 'Windows 11 Home', Batería: 'Hasta 7 hs', Peso: '1.65 kg' },
    imagePath: 'assets/brands/dell/inspiron-15-3520.jpg'
  },
  {
    id: 22, brand: 'dell', name: 'Dell Inspiron 16 5630',
    category: 'Notebooks', price: 850000, badges: ['stock'],
    shortSpecs: ['Intel Core i7-1360P', '16 GB DDR5', 'SSD 512 GB NVMe'],
    fullSpecs: { Procesador: 'Intel Core i7-1360P', RAM: '16 GB DDR5', Almacenamiento: '512 GB SSD NVMe', Pantalla: '16" FHD+ IPS', Gráficos: 'Intel Iris Xe', SO: 'Windows 11 Home', Batería: 'Hasta 9 hs', Peso: '1.86 kg' },
    imagePath: 'assets/brands/dell/inspiron-16-5630.jpg'
  },
  {
    id: 23, brand: 'dell', name: 'Dell OptiPlex 3000 SFF',
    category: 'Desktops', price: 620000, badges: ['stock'],
    shortSpecs: ['Intel Core i5-12500', '16 GB DDR4', 'SSD 512 GB'],
    fullSpecs: { Procesador: 'Intel Core i5-12500', RAM: '16 GB DDR4', Almacenamiento: '512 GB SSD NVMe', 'Factor de forma': 'Small Form Factor', Gráficos: 'Intel UHD 770', SO: 'Windows 11 Pro', Puertos: '8x USB, HDMI, DP', Garantía: '3 años ProSupport' },
    imagePath: 'assets/brands/dell/optiplex-3000-sff.jpg'
  },
  {
    id: 24, brand: 'dell', name: 'Dell OptiPlex 7010 Micro',
    category: 'Desktops', price: 890000, badges: ['new', 'stock'],
    shortSpecs: ['Intel Core i7-13700T', '16 GB DDR5', 'SSD 512 GB'],
    fullSpecs: { Procesador: 'Intel Core i7-13700T', RAM: '16 GB DDR5', Almacenamiento: '512 GB SSD NVMe', 'Factor de forma': 'Micro (1.12L)', Gráficos: 'Intel UHD 770', SO: 'Windows 11 Pro', Puertos: '6x USB, HDMI, DP', Garantía: '3 años ProSupport' },
    imagePath: 'assets/brands/dell/optiplex-7010-micro.jpg'
  },
  {
    id: 25, brand: 'dell', name: 'Dell Precision 3580',
    category: 'Workstations', price: 2200000, badges: ['stock'],
    shortSpecs: ['Intel Core i7-1370P', 'NVIDIA RTX A500', '32 GB DDR5'],
    fullSpecs: { Procesador: 'Intel Core i7-1370P', RAM: '32 GB DDR5', Almacenamiento: '1 TB SSD NVMe', GPU: 'NVIDIA RTX A500 4 GB', Pantalla: '15.6" FHD IPS', SO: 'Windows 11 Pro for Workstations', Certificaciones: 'ISV Certified', Garantía: '3 años ProSupport' },
    imagePath: 'assets/brands/dell/precision-3580.jpg'
  },
  {
    id: 26, brand: 'dell', name: 'Dell Precision 5680',
    category: 'Workstations', price: 4500000, badges: ['new'],
    shortSpecs: ['Intel Core i9-13900H', 'NVIDIA RTX 3500 Ada', '64 GB DDR5'],
    fullSpecs: { Procesador: 'Intel Core i9-13900H', RAM: '64 GB DDR5', Almacenamiento: '2 TB SSD NVMe', GPU: 'NVIDIA RTX 3500 Ada 12 GB', Pantalla: '16" OLED 3.8K táctil', SO: 'Windows 11 Pro for Workstations', Certificaciones: 'ISV Certified', Garantía: '3 años ProSupport Plus' },
    imagePath: 'assets/brands/dell/precision-5680.jpg'
  },
  {
    id: 27, brand: 'dell', name: 'Dell UltraSharp U2723QE',
    category: 'Monitores', price: 610000, badges: ['stock'],
    shortSpecs: ['27" 4K IPS Black', 'USB-C 90W PD', '98% DCI-P3'],
    fullSpecs: { Tamaño: '27"', Resolución: '3840 x 2160 (4K)', Panel: 'IPS Black', Conectividad: 'HDMI, DP, USB-C (90W PD), RJ45', Color: '98% DCI-P3, Delta E < 2', Funciones: 'KVM, PbP/PiP, Daisy Chain', Soporte: 'Ajustable 4 ejes, VESA', Garantía: '3 años Premium Panel Exchange' },
    imagePath: 'assets/brands/dell/ultrasharp-u2723qe.jpg'
  },
  {
    id: 28, brand: 'dell', name: 'Dell Monitor P2422H',
    category: 'Monitores', price: 245000, badges: ['stock', 'offer'],
    shortSpecs: ['24" FHD IPS', 'HDMI + DP + VGA', 'TÜV Certified'],
    fullSpecs: { Tamaño: '23.8"', Resolución: '1920 x 1080 (FHD)', Panel: 'IPS', Conectividad: 'HDMI, DP, VGA, 4x USB-A', 'Tiempo de respuesta': '5 ms', Soporte: 'Pivot, tilt, swivel, height', Certificaciones: 'TÜV, TCO', Garantía: '3 años' },
    imagePath: 'assets/brands/dell/monitor-p2422h.jpg'
  },
  {
    id: 29, brand: 'dell', name: 'Dell PowerEdge T150',
    category: 'Servidores', price: 2800000, badges: ['stock'],
    shortSpecs: ['Intel Xeon E-2400', 'Hasta 128 GB ECC', 'Torre compacta'],
    fullSpecs: { Procesador: 'Intel Xeon E-2400 Series', RAM: 'Hasta 128 GB DDR5 ECC', Almacenamiento: 'Hasta 4 x 3.5" cableados', 'Factor de forma': 'Tower', Red: '2x 1GbE', Gestión: 'iDRAC9 Express', Fuente: '300W', Garantía: '3 años ProSupport' },
    imagePath: 'assets/brands/dell/poweredge-t150.jpg'
  },
  {
    id: 30, brand: 'dell', name: 'Dell PowerEdge R660',
    category: 'Servidores', price: 8500000, badges: ['new', 'stock'],
    shortSpecs: ['2x Intel Xeon Scalable 5ta', 'Hasta 4 TB ECC', 'Rack 1U'],
    fullSpecs: { Procesador: '2x Intel Xeon Scalable 5ta Gen', RAM: 'Hasta 4 TB DDR5 ECC (32 DIMM)', Almacenamiento: 'Hasta 10 x 2.5" NVMe/SAS/SATA', 'Factor de forma': 'Rack 1U', Red: 'OCP 3.0 hasta 100GbE', GPU: 'Hasta 2 GPU 300W', Gestión: 'iDRAC9 Enterprise', Garantía: '3 años ProSupport Plus' },
    imagePath: 'assets/brands/dell/poweredge-r660.jpg'
  },
  {
    id: 31, brand: 'dell', name: 'Dell Thunderbolt Dock WD22TB4',
    category: 'Accesorios', price: 195000, badges: ['stock'],
    shortSpecs: ['Thunderbolt 4', '130W Power Delivery', 'Dual 4K @ 60 Hz'],
    fullSpecs: { Tipo: 'Docking Station Thunderbolt 4', Alimentación: '130W Power Delivery', Salidas: '2x DP 1.4, HDMI 2.0', USB: '3x USB-A 3.2, 1x USB-C', Red: 'RJ45 Gigabit', Audio: 'Combo jack', Resolución: 'Dual 4K @ 60 Hz o 1x 8K', Garantía: '3 años' },
    imagePath: 'assets/brands/dell/thunderbolt-dock-wd22tb4.jpg'
  },
  {
    id: 32, brand: 'dell', name: 'Dell Pro Backpack 15',
    category: 'Accesorios', price: 55000, badges: ['stock'],
    shortSpecs: ['Hasta 15.6"', 'Reflectante', 'Compartimiento EVA'],
    fullSpecs: { Tipo: 'Mochila profesional', 'Capacidad notebook': 'Hasta 15.6"', Material: 'Poliéster resistente al agua', Compartimentos: 'Notebook EVA, tablet, organizador', Peso: '0.74 kg', Color: 'Negro', Extras: 'Cinta reflectante, asa trolley', Garantía: '1 año' },
    imagePath: 'assets/brands/dell/pro-backpack-15.jpg'
  }
];

// ---- Estado ----
let currentBrand = 'lenovo';
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

// ---- Formateo de precio ----
function formatPrice(n) {
  return '$' + n.toLocaleString('es-AR');
}

// ---- Badge HTML ----
function badgeHTML(badge) {
  const labels = { stock: 'En stock', new: 'Nuevo', offer: 'Oferta' };
  return `<span class="badge badge--${badge}">${labels[badge] || badge}</span>`;
}

// ---- Render de tarjeta ----
function cardHTML(p) {
  const waMsg = encodeURIComponent(`Hola! Quiero consultar por ${p.name} (${p.brand === 'lenovo' ? 'Lenovo' : 'Dell'})`);
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
        <div class="product-card__price"><span>desde </span>${formatPrice(p.price)}</div>
        <div class="product-card__actions">
          <a href="https://wa.me/5491100000000?text=${waMsg}" target="_blank" rel="noopener" class="btn btn--whatsapp btn--sm">Consultar</a>
          <button class="btn btn--outline btn--sm" onclick="openModal(${p.id})">Detalles</button>
        </div>
      </div>
    </article>`;
}

// ---- Filtrar y renderizar ----
function renderProducts() {
  const search = document.getElementById('filterSearch').value.toLowerCase();
  const category = document.getElementById('filterCategory').value;
  const priceMin = Number(document.getElementById('filterPriceMin').value) || 0;
  const priceMax = Number(document.getElementById('filterPriceMax').value) || Infinity;
  const sort = document.getElementById('filterSort').value;

  let filtered = products.filter(p => {
    if (p.brand !== currentBrand) return false;
    if (currentCategory !== 'all' && p.category !== currentCategory) return false;
    if (category !== 'all' && p.category !== category) return false;
    if (search && !p.name.toLowerCase().includes(search) && !p.shortSpecs.some(s => s.toLowerCase().includes(search))) return false;
    if (p.price < priceMin) return false;
    if (p.price > priceMax) return false;
    return true;
  });

  // Ordenar
  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'newest') filtered.sort((a, b) => b.id - a.id);

  const grid = document.getElementById('productsGrid');
  const empty = document.getElementById('productsEmpty');
  const count = document.getElementById('productsCount');

  grid.innerHTML = filtered.map(cardHTML).join('');
  empty.style.display = filtered.length ? 'none' : 'block';
  count.textContent = `${filtered.length} producto${filtered.length !== 1 ? 's' : ''}`;
}

// ---- Selección de marca ----
function selectBrand(brand) {
  currentBrand = brand;
  currentCategory = 'all';

  // Tabs
  document.querySelectorAll('.brand-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.brand === brand);
  });

  // Hero
  const brandName = brand === 'lenovo' ? 'Lenovo' : 'Dell';
  document.getElementById('brandTitle').textContent = `${brandName} en HIXA`;
  document.getElementById('brandSubtitle').textContent = 'Equipamiento profesional con garantía y soporte técnico directo.';

  // Reset chips
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));

  // Reset filter select
  document.getElementById('filterCategory').value = 'all';

  renderProducts();
}

// ---- Modal ----
function openModal(id) {
  const p = products.find(pr => pr.id === id);
  if (!p) return;

  const waMsg = encodeURIComponent(`Hola! Quiero consultar por ${p.name} (${p.brand === 'lenovo' ? 'Lenovo' : 'Dell'})`);

  document.getElementById('modalBody').innerHTML = `
    <h2>${p.name}</h2>
    <div class="modal-img">
      <img src="${p.imagePath}" alt="${p.name}"
           onerror="this.onerror=null;this.src='${placeholderSVG(p.name)}'">
    </div>
    <table>
      ${Object.entries(p.fullSpecs).map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
    </table>
    <div class="product-card__price" style="margin-bottom:1rem"><span>desde </span>${formatPrice(p.price)}</div>
    <a href="https://wa.me/5491100000000?text=${waMsg}" target="_blank" rel="noopener" class="btn btn--whatsapp">Consultar por WhatsApp</a>
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
  // Brand tabs
  document.querySelectorAll('.brand-tab').forEach(btn => {
    btn.addEventListener('click', () => selectBrand(btn.dataset.brand));
  });

  // Category chips
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      currentCategory = chip.dataset.category;
      document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === chip));
      document.getElementById('filterCategory').value = currentCategory === 'all' ? 'all' : currentCategory;
      renderProducts();
    });
  });

  // Filters
  document.getElementById('filterSearch').addEventListener('input', renderProducts);
  document.getElementById('filterCategory').addEventListener('change', (e) => {
    currentCategory = e.target.value;
    document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.category === currentCategory));
    renderProducts();
  });
  document.getElementById('filterPriceMin').addEventListener('input', renderProducts);
  document.getElementById('filterPriceMax').addEventListener('input', renderProducts);
  document.getElementById('filterSort').addEventListener('change', renderProducts);

  // Clear filters
  document.getElementById('filterClear').addEventListener('click', () => {
    document.getElementById('filterSearch').value = '';
    document.getElementById('filterCategory').value = 'all';
    document.getElementById('filterPriceMin').value = '';
    document.getElementById('filterPriceMax').value = '';
    document.getElementById('filterSort').value = 'recommended';
    currentCategory = 'all';
    document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));
    renderProducts();
  });

  // Modal
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // Mobile menu
  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('mainNav').classList.toggle('open');
  });

  // Contact form (sin backend)
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('contactSuccess').style.display = 'block';
    e.target.reset();
    setTimeout(() => { document.getElementById('contactSuccess').style.display = 'none'; }, 5000);
  });

  // Render inicial
  renderProducts();
});
