import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputTextConfig = (newProduct) => [
  {
    id: "0",
    name: "title",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
    value: newProduct.title,
    type: "text",
  },
  {
    id: "1",
    name: "imageSource",
    placeholder: "Lien URL d'une image (ex: https://super-burger.png)",
    Icon: <BsFillCameraFill />,
    value: newProduct.imageSource,
    type: "text",
  },
  {
    id: "2",
    name: "price",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
    value: newProduct.price,
    type: "text",
  },
];
