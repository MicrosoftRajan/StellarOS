import WindowWrapper from '@/hoc/WindowWrapper';
import useWindowStore from '@/store/window';
import React from 'react';
import WindowControls from '@/components/WindowControls'; // <- add or adjust this import path

const TextFile = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data; // safer optional chaining

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header" className="flex items-center gap-3">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 space-y-6 bg-white">
        {image ? (
          <div className="w-full">
            <img src={image} alt={name || 'image'} className="w-full h-auto rounded" />
          </div>
        ) : null}

        {subtitle ? <h3 className="text-lg font-semibold">{subtitle}</h3> : null}

        {/* handle either array or single string */}
        {Array.isArray(description) && description.length > 0 ? (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : typeof description === 'string' && description.trim() !== '' ? (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            <p>{description}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(TextFile, 'txtfile');

export default TextWindow;
