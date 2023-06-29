"use client";
import {useState} from "react";

export const Button = ({children, passedName}) => {

  const [name, setName] = useState("Bob");

  return (

    <div className="bg-blue-500 text-white rounded-lg shadow-md p-2 w-fit hover:bg-red-500">{passedName} {children}</div>
  )
}