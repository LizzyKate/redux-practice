"use client";
import Navbar from "@/components/Navbar";
import { store } from "@/features/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <h1>Hom</h1>
        <Navbar />
      </div>
    </Provider>
  );
}
