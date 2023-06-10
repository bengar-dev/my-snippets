import { Toaster } from "react-hot-toast";

export const ToasterNotif = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: "bg-gray-100 shadow-lg text-slate-950 font-medium text-sm",
        success: {
          className: "bg-emerald-500 font-medium text-sm text-slate-50",
        },
        error: {
          className: "bg-red-500 font-medium text-sm text-slate-50",
        },
      }}
    />
  );
};
