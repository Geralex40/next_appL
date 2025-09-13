"use client"//is a lcient component
import { useState } from "react";

export default function Home() {
  console.log("logeado!");
  const [x,setX]=useState(null);

  return (
    <div><h1>home page</h1></div>
  );
}
