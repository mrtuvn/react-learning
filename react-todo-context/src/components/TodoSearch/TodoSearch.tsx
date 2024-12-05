import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TodoSearch = () => {
  return (
    <div className="flex gap-2 mb-2">
      <Input placeholder="Please enter todo" />
      <Button className="add">Search</Button>
    </div>
  );
};

export default TodoSearch;
