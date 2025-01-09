import { setProduct } from "@/redux/features/productReducer";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

const ProductRow = ({ srNo, setOpenPopup, setUpdateTable, product }) => {
  const dispatch = useAppDispatch();

  const onEdit = () => {
    dispatch(setProduct(product));
    setOpenPopup(true);
  };

  const onDelete = () => {
    // do later
  };
  return (
    <tr>
      <td>
        <div>{srNo}</div>
      </td>
      <td>
        <div>{product?.name}</div>
      </td>
      <td>$ {product?.price}</td>
      <td className="py-2">
        <Image
          src={product?.imgSrc}
          width={40}
          height={40}
          alt="Product-Image"
        />
      </td>
      <td>
        <div className="text-2xl flex items-center gap-2 text-gray-600">
          <CiEdit
            className="cursor-pointer hover:text-black"
            onClick={onEdit}
          />
          <RiDeleteBin5Line
            className="text-[20px] cursor-pointer hover:text-red-600"
            onClick={onDelete}
          />
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
