import normal from "../assets/normal.png";
import kering from "../assets/kering.png";
import berminyak from "../assets/berminyak.png";
import kombinasi from "../assets/kombinasi.png";
import sensitif from "../assets/sensitif.png";
import jerawat from "../assets/jerawat.png";

const skinTypes = [
    { 
    id: 1, 
    type: "Normal", 
    desc: "Kulit sehat, pori-pori samar, kadar air & minyak seimbang. Lucky you!", 
    image: normal 
  },
  { 
    id: 2, 
    type: "Kering", 
    desc: "Terasa kaku/ketarik setelah cuci muka, kadang bersisik atau kusam.", 
    image: kering 
  },
  { 
    id: 3, 
    type: "Berminyak", 
    desc: "Pori-pori besar terlihat, wajah cepat mengkilap terutama di siang hari.", 
    image: berminyak 
  },
  { 
    id: 4, 
    type: "Kombinasi", 
    desc: "Berminyak di T-Zone (Dahi & Hidung), tapi kering di bagian pipi.", 
    image: kombinasi 
  },
  { 
    id: 5, 
    type: "Sensitif", 
    desc: "Mudah kemerahan, gatal, atau perih jika kena produk yang kurang cocok.", 
    image: sensitif 
  },
  { 
    id: 6, 
    type: "Jerawat", 
    desc: "Sedang struggle dengan jerawat aktif, bruntusan, atau bekas jerawat.", 
    image: jerawat 
  }
];

export default skinTypes;