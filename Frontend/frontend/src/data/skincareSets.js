import centellaGlow from "../assets/skincare/centella/glowing.jpg";
import glad2glowGlow from "../assets/skincare/glad2glow/glowing.jpg";
import scarlettGlow from "../assets/skincare/scarlett/glowing.jpg";
import skintificGlow from "../assets/skincare/skintific/glowing.jpg";
import wardahGlow from "../assets/skincare/wardah/glowing.jpg";

import centellaBright from "../assets/skincare/centella/bright.jpg";
import glad2glowBright from "../assets/skincare/glad2glow/bright.jpg";
import scarlettBright from "../assets/skincare/scarlett/bright.jpg";
import skintificBright from "../assets/skincare/skintific/bright.jpg";
import wardahBright from "../assets/skincare/wardah/bright.jpg";

import centellaBarrier from "../assets/skincare/centella/barrier.jpg";
import glad2glowBarrier from "../assets/skincare/glad2glow/barrier.jpg";
import scarlettBarrier from "../assets/skincare/scarlett/barrier.jpg";
import skintificBarrier from "../assets/skincare/skintific/barrier.jpg";
import wardahBarrier from "../assets/skincare/wardah/barrier.jpg";

import centellaAcne from "../assets/skincare/centella/acne.jpg";
import glad2glowAcne from "../assets/skincare/glad2glow/acne.jpg";
import scarlettAcne from "../assets/skincare/scarlett/acne.jpg";
import skintificAcne from "../assets/skincare/skintific/acne.jpg";
import wardahAcne from "../assets/skincare/wardah/acne.jpg";


const skincareSets = {
  glowing: {
    title: "Glow & Radiance Set",
    desc: "Rangkaian lengkap untuk hasil wajah 'Glass Skin' yang sehat dan bercahaya.",
    brands: [
      { 
        name: "SKIN1004", 
        img: centellaGlow, 
        link: "https://shopee.co.id/search?keyword=skin1004%20brightening%20set", 
        price: "Mulai Rp 280.000", // Basic Set
        benefit: "Full Set 4 Item" 
      },
      { 
        name: "Glad2Glow", 
        img: glad2glowGlow, 
        link: "https://shopee.co.id/search?keyword=glad2glow%20pomegranate%20set", 
        price: "Mulai Rp 99.000", // Paket Hemat 3 Item
        benefit: "Paket Hemat 4in1" 
      },
      { 
        name: "Scarlett", 
        img: scarlettGlow, 
        link: "https://shopee.co.id/search?keyword=scarlett%20brightly%20ever%20after%20package", 
        price: "Mulai Rp 260.000", // Promo Bundle
        benefit: "Face Care Set (5 Item)" 
      },
      { 
        name: "Skintific", 
        img: skintificGlow, 
        link: "https://shopee.co.id/search?keyword=skintific%20glowing%20set", 
        price: "Mulai Rp 299.000", // Promo Set
        benefit: "Glowing Set (4 Item)" 
      },
      { 
        name: "Wardah", 
        img: wardahGlow, 
        link: "https://shopee.co.id/search?keyword=wardah%20crystal%20secret%20bundle", 
        price: "Mulai Rp 215.000", 
        benefit: "Crystal Secret Bundle" 
      }
    ]
  },

  bright: {
    title: "Brightening Series",
    desc: "Paket lengkap untuk meratakan warna kulit, mengatasi noda hitam, dan kusam.",
    brands: [
      { 
        name: "SKIN1004", 
        img: centellaBright, 
        link: "https://shopee.co.id/search?keyword=skin1004%20poremizing%20set", 
        price: "Mulai Rp 320.000", 
        benefit: "Poremizing Set" 
      },
      { 
        name: "Glad2Glow", 
        img: glad2glowBright, 
        link: "https://shopee.co.id/search?keyword=glad2glow%20berry%20bright%20set", 
        price: "Mulai Rp 105.000", 
        benefit: "Brightening Set" 
      },
      { 
        name: "Scarlett", 
        img: scarlettBright, 
        link: "https://shopee.co.id/search?keyword=scarlett%20brightly%20bundle", 
        price: "Mulai Rp 260.000", 
        benefit: "Brightly Series" 
      },
      { 
        name: "Skintific", 
        img: skintificBright, 
        link: "https://shopee.co.id/search?keyword=skintific%20msh%20niacinamide%20set", 
        price: "Mulai Rp 319.000", 
        benefit: "MSH Niacinamide Set" 
      },
      { 
        name: "Wardah", 
        img: wardahBright, 
        link: "https://shopee.co.id/search?keyword=wardah%20lightening%20series%20paket", 
        price: "Mulai Rp 165.000", 
        benefit: "Lightening Series (5in1)" 
      }
    ]
  },

  barrier: {
    title: "Skin Barrier Repair Kit",
    desc: "Rangkaian produk gentle untuk memperbaiki pelindung kulit yang rusak & sensitif.",
    brands: [
      { 
        name: "SKIN1004", 
        img: centellaBarrier, 
        link: "https://shopee.co.id/search?keyword=skin1004%20probio-cica%20set", 
        price: "Mulai Rp 290.000", 
        benefit: "Probio-Cica Set" 
      },
      { 
        name: "Glad2Glow", 
        img: glad2glowBarrier, 
        link: "https://shopee.co.id/search?keyword=glad2glow%20blueberry%20ceramide%20set", 
        price: "Mulai Rp 99.000", 
        benefit: "Barrier Repair Set" 
      },
      { 
        name: "Scarlett", 
        img: scarlettBarrier, 
        link: "https://shopee.co.id/search?keyword=scarlett%20phyto%20biotics%20kit", 
        price: "Mulai Rp 250.000", 
        benefit: "Age Delay/Barrier" 
      },
      { 
        name: "Skintific", 
        img: skintificBarrier, 
        link: "https://shopee.co.id/search?keyword=skintific%205x%20ceramide%20set", 
        price: "Mulai Rp 139.000", // Travel Kit Price (Sangat menarik user!)
        benefit: "5X Ceramide Set" 
      },
      { 
        name: "Wardah", 
        img: wardahBarrier, 
        link: "https://shopee.co.id/search?keyword=wardah%20hydra%20rose%20paket", 
        price: "Mulai Rp 195.000", 
        benefit: "Hydra Rose Series" 
      }
    ]
  },

  acne: {
    title: "Acne Fighter Kit",
    desc: "Solusi lengkap melawan jerawat aktif, minyak berlebih, dan bruntusan.",
    brands: [
      { 
        name: "SKIN1004", 
        img: centellaAcne, 
        link: "https://shopee.co.id/search?keyword=skin1004%20tea-trica%20set", 
        price: "Mulai Rp 310.000", 
        benefit: "Tea-Trica Acne Set" 
      },
      { 
        name: "Glad2Glow", 
        img: glad2glowAcne, 
        link: "https://shopee.co.id/search?keyword=glad2glow%20centella%20set", 
        price: "Mulai Rp 105.000", 
        benefit: "Acne/Calming Set" 
      },
      { 
        name: "Scarlett", 
        img: scarlettAcne, 
        link: "https://shopee.co.id/search?keyword=scarlett%20acne%20series%20paket", 
        price: "Mulai Rp 260.000", 
        benefit: "Acne Series Full" 
      },
      { 
        name: "Skintific", 
        img: skintificAcne, 
        link: "https://shopee.co.id/search?keyword=skintific%20acne%20set", 
        price: "Mulai Rp 289.000", 
        benefit: "Acne Panthenol Set" 
      },
      { 
        name: "Wardah", 
        img: wardahAcne, 
        link: "https://shopee.co.id/search?keyword=wardah%20acnederm%20paket", 
        price: "Mulai Rp 125.000", 
        benefit: "Acnederm Complete" 
      }
    ]
  },
};

export default skincareSets;