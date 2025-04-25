// src/components/ui/Button.jsx
export default function Button({ children, onClick, type = "button", className = "" }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`bg-gradient-to-r from-[#6296FF] to-[#90B8FF] text-white font-medium rounded-xl px-6 py-2 hover:opacity-90 transition-all ${className}`}
      >
        {children}
      </button>
    );
  }
  