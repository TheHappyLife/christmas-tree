"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

const Leaves = ({ children, color = "text-[#0f0]" }) => {
  return <span className={clsx("inline-block", color)}>{children}</span>;
};

const generateTreeData = () => {
  const treeData = [];
  for (let i = 0; i < 14; i++) {
    const branchData = [];
    for (let j = 0; j < i * 2 + 1; j++) {
      console.log((Math.random() * 1000).toFixed(0) % 100);
      const randomValue = (Math.random() * 1000).toFixed(0) % 100;
      if (randomValue < 70) {
        branchData.push(<Leaves>*</Leaves>);
        continue;
      }
      if (randomValue >= 70 && randomValue < 80) {
        branchData.push(<Leaves color='text-[#f00]'>*</Leaves>);
        continue;
      }
      if (randomValue >= 80 && randomValue < 90) {
        branchData.push(<Leaves color='text-[#00f]'>*</Leaves>);
        continue;
      }
      if (randomValue >=90) {
        branchData.push(<Leaves color='text-[#ff0]'>*</Leaves>);
        continue;
      }
    }
    treeData.push(branchData);
  }
  return treeData;
};

export default function Home() {
  const [tree, setTree] = useState([]);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    setTree(generateTreeData());
    setInterval(() => {
      setTree(generateTreeData());
    }, 500);
    setInterval(() => {
      setToggle(prev => !prev);
    }, 1000);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#333] border">
      {tree.map((e, index) => (
        <div className="leading-[1.2]" key={index}>
          {e}
        </div>
      ))}
      <Leaves color={"text-[#dc5200]"}>mwm</Leaves>
      <Leaves color={"text-[#dc5200]"}>mwm</Leaves>
      <h1 className={'text-[#f00]'}>Merry Christmas!</h1>
      <h1 className={'text-[#ff0]'}>**24-12-2023**</h1>
      <h1 className={'text-[#0f0]'}>***Made by Nguyen Handsome***</h1>
    </main>
  );
}
