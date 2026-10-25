"use client";
import PromptBox from "@/components/PromptBox";
import Accordion from "@/components/Accordion";
import StylesPicker from "@/components/StylesPicker";
export default function ControlPanel(props) {
  const {
    type,
    setType,
    prompt,
    setPrompt,
    submit,
    inputRef,
    error,
    loading,
    count,
    setCount,
    aspect,
    setAspect,
    model,
    setModel,
    styles,
    setStyles,
  } = props;
  return (
    <aside className="controls" aria-label="Generation controls">
      <div
        className="tabs"
        role="tablist"
        aria-label="Output type"
        data-active={type}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") setType("video");
          if (e.key === "ArrowLeft") setType("image");
        }}
      >
        <span className="tab-indicator" aria-hidden="true" />
        {["image", "video"].map((value) => (
          <button
            key={value}
            role="tab"
            aria-selected={type === value}
            tabIndex={type === value ? 0 : -1}
            className="tab"
            onClick={() => setType(value)}
          >
            {value[0].toUpperCase() + value.slice(1)}
          </button>
        ))}
      </div>
      <PromptBox
        {...{
          prompt,
          onChange: setPrompt,
          onSubmit: submit,
          inputRef,
          error,
          loading,
        }}
      />
      <div className="select-row">
        <label className="sr-only" htmlFor="count">
          Number of images
        </label>
        <select
          id="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        >
          <option value="4"># Images</option>
          <option value="1">1 image</option>
          <option value="2">2 images</option>
          <option value="4">4 images</option>
          <option value="6">6 images</option>
        </select>
        <label className="sr-only" htmlFor="aspect">
          Aspect ratio
        </label>
        <select
          id="aspect"
          value={aspect}
          onChange={(e) => setAspect(e.target.value)}
        >
          <option>1:1</option>
          <option>3:2</option>
          <option>16:9</option>
        </select>
        <label className="sr-only" htmlFor="model">
          Model
        </label>
        <select
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option>Model: Name</option>
          <option>Realistic</option>
          <option>Dream</option>
        </select>
      </div>
      <Accordion title="Advance">
        <label>
          Seed
          <input type="text" placeholder="Random" />
        </label>
        <label>
          Guidance
          <input type="range" min="1" max="20" defaultValue="7" />
        </label>
        <label>
          Negative prompt
          <input type="text" placeholder="Things to avoid" />
        </label>
      </Accordion>
      <Accordion title="Styles">
        <StylesPicker selected={styles} onChange={setStyles} />
      </Accordion>
    </aside>
  );
}
