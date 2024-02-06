import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";

export const getInputTextConfig = (newProduct) => [
  {
    id: "0",
    name: "title",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
    value: newProduct.title,
    type: "text",
    className: "title",
  },
  {
    id: "1",
    name: "imageSource",
    placeholder: "Lien URL d'une image (ex: https://super-burger.png)",
    Icon: <BsFillCameraFill />,
    value: newProduct.imageSource,
    type: "text",
    className: "image-source",
  },
  {
    id: "2",
    name: "price",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
    value: newProduct.price,
    type: "text",
    className: "price",
  },
];

export const getInputSelectConfig = () => [
  {
    id: "3",
    name: "isAvailable",
    Icon: <FiPackage />,
    options: [
      { value: true, label: "Disponible" },
      { value: false, label: "Indisponible" },
    ],
    className: "is-available",
  },
  {
    id: "4",
    name: "isPublicised",
    Icon: <GoMegaphone />,
    options: [
      { value: true, label: "Sans pub" },
      { value: false, label: "Avec pub" },
    ],
    className: "is-publicised",
  },
];
