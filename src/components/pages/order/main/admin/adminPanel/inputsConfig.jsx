import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { LuPackage } from "react-icons/lu";
import { BiSolidMegaphone } from "react-icons/bi";

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

export const getInputSelectConfig = (newProduct) => [
  {
    id: "3",
    name: "isAvailable",
    value: newProduct.isAvailable,
    Icon: <LuPackage />,
    options: [
      { value: true, label: "En stock" },
      { value: false, label: "Indisponible" },
    ],
    className: "is-available",
  },
  {
    id: "4",
    name: "isAdvertised",
    value: newProduct.isAdvertised,
    Icon: <BiSolidMegaphone />,
    options: [
      { value: false, label: "Sans pub" },
      { value: true, label: "Avec pub" },
    ],
    className: "is-advertised",
  },
];
