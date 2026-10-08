export const cohorts = [
  { label: '25 - 54 Tahun (Usia Produktif Utama)', icon: 'work', total: '2.380 Jiwa', pct: '(48.65%)', l: '1.210 L', lW: '50.8%', p: '1.170 P', pW: '49.2%', op: '' },
  { label: '15 - 24 Tahun (Usia Pemuda / Angkatan Baru)', icon: 'school', total: '1.082 Jiwa', pct: '(22.12%)', l: '567 L', lW: '52.4%', p: '515 P', pW: '47.6%', op: '/90' },
  { label: '0 - 14 Tahun (Anak-anak & Balita)', icon: 'toys', total: '896 Jiwa', pct: '(18.32%)', l: '458 L', lW: '51.1%', p: '438 P', pW: '48.9%', op: '/80' },
  { label: '55+ Tahun (Pra-Lansia & Lansia)', icon: 'elderly', total: '534 Jiwa', pct: '(10.91%)', l: '241 L', lW: '45.1%', p: '293 P', pW: '54.9%', op: '/70' },
]

export const dusunRows = [
  { dusun: 'Dusun Krajan', rw: 'RW 01 (RT 01, 02, 03, 04)', kk: '324 KK', jiwa: '1.120 Jiwa', rasio: '565 / 555', kpm: '82 KK', pct: '99.1%', bar: '99.1%', low: false, tag: 'dusun1' },
  { dusun: 'Dusun Krajan', rw: 'RW 02 (RT 01, 02, 03)', kk: '286 KK', jiwa: '980 Jiwa', rasio: '498 / 482', kpm: '74 KK', pct: '98.4%', bar: '98.4%', low: false, tag: 'dusun1' },
  { dusun: 'Dusun Sukatani', rw: 'RW 03 (RT 01, 02, 03, 04)', kk: '312 KK', jiwa: '1.045 Jiwa', rasio: '530 / 515', kpm: '91 KK', pct: '97.8%', bar: '97.8%', low: false, tag: 'dusun2' },
  { dusun: 'Dusun Sukatani', rw: 'RW 04 (RT 01, 02, 03, 04)', kk: '278 KK', jiwa: '952 Jiwa', rasio: '480 / 472', kpm: '68 KK', pct: '98.9%', bar: '98.9%', low: false, tag: 'dusun2' },
  { dusun: 'Dusun Wanasari', rw: 'RW 05 (RT 01, 02, 03)', kk: '228 KK', jiwa: '795 Jiwa', rasio: '403 / 392', kpm: '55 KK', pct: '95.2%', bar: '95.2%', low: true, tag: 'dusun3' },
]

export const jobs = [
  { label: 'Petani / Buruh Tani', val: '1.340 Jiwa (39.5%)', w: '39.5%', cls: 'bg-primary' },
  { label: 'Wiraswasta / Pedagang', val: '820 Jiwa (24.2%)', w: '24.2%', cls: 'bg-tertiary' },
  { label: 'Karyawan Swasta / Pabrik', val: '610 Jiwa (18.0%)', w: '18%', cls: 'bg-secondary-fixed-dim' },
  { label: 'Belum / Tidak Bekerja', val: '380 Jiwa (11.2%)', w: '11.2%', cls: 'bg-outline-variant' },
  { label: 'PNS / TNI / Polri / Perangkat', val: '242 Jiwa (7.1%)', w: '7.1%', cls: 'bg-primary-container' },
]

export const antrean = [
  { reg: '#REG-25-0489', chip: 'SKTM Pendidikan', chipCls: 'bg-secondary-container text-on-secondary-container', name: 'Siti Nurhaliza (RW 02)', meta: 'Masuk: 35 menit lalu', err: false, btn: 'Periksa', btnCls: 'bg-primary text-on-primary hover:bg-primary/90' },
  { reg: '#REG-25-0488', chip: 'Surat Usaha (SKU)', chipCls: 'bg-primary-fixed/50 text-on-primary-fixed-variant', name: 'Ahmad Riyadi (RW 04)', meta: 'Siap TTE Elektronik Kades', err: false, btn: 'Tandatangani', btnCls: 'bg-surface-container text-on-surface hover:bg-surface-container-high' },
  { reg: '#REG-25-0487', chip: 'Surat Domisili', chipCls: 'bg-error-container text-on-error-container', name: 'Budi Setiawan (RW 01)', meta: 'Foto KTP Kurang Terang', err: true, btn: 'Hubungi', btnCls: 'bg-error text-on-error hover:bg-error/90' },
]

export const timeline = [
  { icon: 'child_care', bg: 'bg-primary-fixed/50 text-on-primary-fixed', tag: 'Kelahiran Baru', tagCls: 'text-primary', time: '10:14 WIB', pre: 'Pencatatan Kelahiran Bayi An.', title: 'M. Rayyan Alfatih', meta: 'Orang Tua: Ny. Rina S. • RT 02 / RW 01' },
  { icon: 'logout', bg: 'bg-secondary-container text-on-secondary-container', tag: 'Pindah Domisili', tagCls: 'text-secondary', time: 'Kemarin, 16:40', pre: 'SKPWNI Terbit: Bpk.', title: 'Hendra Gunawan (KK 3201...)', meta: 'Tujuan: Kota Bandung (3 Jiwa) • RW 03' },
  { icon: 'bed', bg: 'bg-error-container/60 text-error', tag: 'Pencatatan Kematian', tagCls: 'text-error', time: '18 Feb 2025', pre: 'Akta Kematian No. 472.12/SK/08 An. Almh.', title: 'Ibu Wartini (72 Th)', meta: 'Pelapor: Ahli Waris • RT 01 / RW 05' },
  { icon: 'login', bg: 'bg-primary-fixed/40 text-primary', tag: 'Penduduk Masuk', tagCls: 'text-primary', time: '17 Feb 2025', pre: 'Registrasi Surat Pindah Masuk: Kel.', title: 'Drs. Supriyadi', meta: 'Asal: Kab. Cianjur (4 Jiwa) • RW 02' },
]
