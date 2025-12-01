import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "IPA Horizonte Cítrico",
    price: 6,
    description:
      "Experimenta el poder y la elegancia con nuestra IPA Horizonte Cítrico: captura sabores intensos con su sistema dual de lúpulos, disfruta de un rendimiento excepcional en amargor y sumérgete en un brillante color ámbar. ¡Descubre un mundo de posibilidades en cada sorbo!",
    image:
      "https://cdn.prod.website-files.com/60f5860d9d28a74704631bf3/64f1ec9e78c28f5bdb824e3d_BRLO_Naked.png",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Birra",
    price: 9,
    description:
      "Adéntrate en la eficiencia y sofisticación con la Stout Noche Irlandesa: un diseño ligero se encuentra con un poder oscuro y cremoso, su impresionante color ébano trae tu experiencia cervecera a la vida, y su sabor duradero te mantiene disfrutando dondequiera que vayas. Eleva tu experiencia cervecera con esta stout.",
    image:
      "https://centro-italia.de/wp-content/uploads/2019/02/4019-bier-nastro-azzuro-600x600.png",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "APA Pionera",
    price: 7,
    description:
      "Libera tu creatividad y productividad con la APA Pionera: potencia lupulada, impresionante color dorado brillante y sabor que dura todo el encuentro hacen de esta APA la herramienta perfecta para trabajo y diversión. Transforma tus momentos en realidad con la APA Pionera.",
    image:
      "https://bier-berlin.com/cdn/shop/products/53199_innis_gunn_lager_2020.gif?v=1680782429&width=480",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Weissbier",
    price: 3,
    description:
      "Mantente conectado y saludable con la Weissbier Sabia Bavara: rastrea tus sabores, monitorea tu bienestar y mantente en contacto con las tradiciones que más te importan. Experimenta el futuro del placer cervecero con esta weissbier clásica.",
    image:
      "https://www.maximilians-berlin.de/fileadmin/images2021/biersorten/hopf-dunkle-weisse.png",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "Pilsner Cristalina",
    price: 249,
    description:
      "Sumérgete en el sonido de los campos con la Pilsner Cristalina: cancelación de sabores pesados, modo transparencia y equilibrio personalizable hacen de esta pilsner el compañero perfecto para comidas, celebraciones y todo lo demás. Eleva tu experiencia cervecera ligera con la Pilsner Cristalina.",
    image:
      "https://dth50iqs19w2y.cloudfront.net/09/36fd5cf3684e4284e34316c545ae9d/Brauerei-Lemke-Spree-Coast-IPA.png",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "Saison Granjera",
    price: 9,
    description:
      "Eleva tu experiencia cervecera artesanal con la Saison Granjera: sabores complejos, carácter inteligente y especiatura equilibrada hacen de esta saison la adición perfecta a tu colección. Disfruta un mundo de especias, tradición y más con la Saison Granjera.",
    image:
      "https://www.maximilians-berlin.de/fileadmin/images2021/biersorten/naturradler-alkoholfrei.png",
    categoryId: 6,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
