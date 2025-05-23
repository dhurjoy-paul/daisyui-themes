const ThemePreview = () => {
  return (
    <div className="p-6 flex flex-col gap-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">Theme Preview</h1>

      <div className="grid grid-cols-2 gap-4">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Input</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered" />
      </div>

      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Toggle me</span>
          <input type="checkbox" className="toggle toggle-primary" />
        </label>
      </div>

      <div className="alert alert-info">This is an info alert</div>
      <div className="alert alert-success">This is a success alert</div>
      <div className="alert alert-warning">This is a warning alert</div>
      <div className="alert alert-error">This is an error alert</div>
    </div>
  );
};

export default ThemePreview;
