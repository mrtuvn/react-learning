"use client";

import { deleteQuestion } from "@/app/actions/actions";
import React from "react";

export default function QuestionDeleteButton({ id }: { id: number }) {
  return (
    <button className="ml-auto" onClick={() => deleteQuestion(id)}>
      ❌
    </button>
  );
}
