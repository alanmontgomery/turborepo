"use client";
import { useState } from "react";
import { Button, Card, Input, Label, TestCard } from "ui";

const Home = () => {

  const [name, setName] = useState("");

  return (
    <div className="m-44">
      <Label />
      <Input value={name} onChange={e => setName(e.target.value)} />
      <Button passedName={name}>Test</Button>
      <TestCard />
      <Card />
    </div>
  );
}

export default Home;