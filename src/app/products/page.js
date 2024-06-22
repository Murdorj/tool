"use client";

import { Tool } from "@/components/Tool";
import Link from "next/link";



export const data = [
  {
      id: 1,
      name: 'НЕРЖ ХООЛОЙ',
      image: "nerj.png",
      slug: 'nerj',
      toolData: [{price: "hi lalar"}]
  },
  {
      id: 2,
      name: 'НЕРЖ ХОЛБОХ ХЭРЭГСЭЛ',
      image: "holbox.png",
      slug: 'nerj-holboh'
  },
  {
      id: 3,
      name: 'БАГАЖ ХЭРЭГСЭЛ',
      image: "bagaj.jpg",
      slug: 'bagaj'
  },
  {
      id: 4,
      name: 'УС ЦЭВЭРШҮҮЛЭГЧ',
      image: "us.jpg",
      slug: 'us-tsevershuulegch'
  },
  {
      id: 5,
      name: 'АЛЧУУР ХАТААГЧ',
      image: "alchuur.jpeg",
      slug: 'alchuur-hataagch'
  },
]
export default function Products() {
  return <div className="w-full bg-pink-300"> {data.map((e)=>{return(<Link href={`${e.id}`} key={e.title}><Tool name={e.name} image={e.image} onClick={()=>{}}/></Link>)})}</div>;
}
