const SectionHeading = ({ children }) => (
  <div className="flex items-center w-full justify-center gap-2">
    <div className="flex-1 h-px bg-base-content/30" />
    <div className="bg-base-content/10 px-4 py-1 rounded-md text-base-content font-semibold tracking-widest text-base select-none">
      {children}
    </div>
    <div className="flex-1 h-px bg-base-content/30" />
  </div>
);

export default SectionHeading;
