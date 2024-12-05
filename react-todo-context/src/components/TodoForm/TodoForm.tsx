import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TodoForm = () => {
  return (
    <div className="flex gap-2 mb-2">
      <Input placeholder="Please enter todo" />
      <Button className="add">Add</Button>
    </div>
  );
};

export default TodoForm;
