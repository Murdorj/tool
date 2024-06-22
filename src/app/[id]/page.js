"use client"

import { useParams } from "next/navigation";
import { data } from "../products/page";
import { Tool } from "@/components/Tool";


export default function ToolPage() {
    const { id } = useParams();
    const oneTool = data.filter((e) => e.id == id)
    
    return (<div><div> lalara </div> <div>{data.filter((e) => e.id == id).map((e) => {return(<Tool name={e.name} image={e.image}/>)})
    }</div></div>)
}