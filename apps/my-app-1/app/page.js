"use client";
import { useState } from "react";
import { Button, Input, Label } from "ui";

const Home = () => {

  const [name, setName] = useState("");

  return (
    <div className="m-44">
      <Label />
      <Input value={name} onChange={e => setName(e.target.value)} />
      <Button passedName={name}>Test</Button>
    </div>
  );
}

export default Home;