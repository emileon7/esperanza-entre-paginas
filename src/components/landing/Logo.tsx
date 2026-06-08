import { PaperPlane } from "./Decorations";
import logo from "../../assets/logo.png";

export function Logo({ size = "lg" }: { size?: "sm" | "lg" }) {
  const big = size === "lg";
  return (
    <div className={`relative inline-block ${big ? "px-10 py-6" : "px-2"}`}>
      {big && (
        <>
          <PaperPlane className="absolute -left-6 top-6 w-10 h-10 text-slate-500 animate-float" />
          <PaperPlane className="absolute -right-4 -top-2 w-8 h-8 text-slate-400 animate-float" style={{ animationDelay: "1.2s" }} />
          <PaperPlane className="absolute right-8 bottom-0 w-7 h-7 text-slate-400 animate-float" style={{ animationDelay: "2.4s" }} />
        </>
      )}
      <div className=" text-center">
        <img src={logo}
        alt="Esperanza entre Páginas"
        className={big ? "w-64 h-auto" : "w-24 h-auto"}
         />
      </div>
    </div>
  );
}