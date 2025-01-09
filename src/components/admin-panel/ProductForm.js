"use client";

import { setLoading } from "@/redux/features/loadingReducer";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const ProductForm = () => {
  const [payload, setPayload] = useState({
    imgSrc: null,
    fileKey: null,
    name: "",
    category: "",
    price: "",
  });

  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    axios
      .post("/api/add_product", payload)
      .then((res) => {
        makeToast("Product Added Successfully");
        setPayload({
          imgSrc: null,
          fileKey: null,
          name: "",
          category: "",
          price: "",
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Image
        className="max-h-[300px] w-auto object-contain rounded-md"
        src={payload?.imgSrc ? payload?.imgSrc : "/placeholder.jpg"}
        width={800}
        height={500}
        alt="Product-Image"
      />
    </form>
  );
};

export default ProductForm;
