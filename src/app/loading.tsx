import { Loader } from "lucide-react";
import React from "react";

type Props = {};

export default function loading({}: Props) {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loader className="h-10 w-10 animate-spin text-gray-500" />
    </div>
  );
}
