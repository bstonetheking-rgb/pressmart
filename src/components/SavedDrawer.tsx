import React from 'react';
import { Property } from '../types';
import { X, Trash2, ArrowUpRight, Bed, Bath, Maximize2 } from 'lucide-react';

interface SavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProperties: Property[];
  onRemove: (id: string) => void;
  onSelectProperty: (property: Property) => void;
}

export const SavedDrawer: React.FC<SavedDrawerProps> = ({
  isOpen,
  onClose,
  savedProperties,
  onRemove,
  onSelectProperty
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between">
        {/* Header */}
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-neutral-950">Saved Residences</h2>
            <p className="text-xs text-neutral-500">{savedProperties.length} properties bookmarked</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-950 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 flex-1 space-y-4">
          {savedProperties.length === 0 ? (
            <div className="text-center py-16 text-neutral-400 space-y-2">
              <p className="text-sm font-semibold text-neutral-600">No properties saved yet</p>
              <p className="text-xs">Click the heart icon on any listing to save it here for quick access.</p>
            </div>
          ) : (
            savedProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-neutral-50 rounded-2xl p-3 border border-neutral-200/80 flex gap-3 items-center justify-between group"
              >
                <img
                  src={prop.image}
                  alt={prop.title}
                  referrerPolicy="no-referrer"
                  className="w-18 h-18 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-neutral-900 truncate">{prop.title}</h4>
                  <p className="text-xs text-neutral-500 truncate">{prop.location}</p>
                  <div className="text-xs font-extrabold text-neutral-950 mt-1">
                    {prop.priceFormatted}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <button
                    onClick={() => onRemove(prop.id)}
                    className="p-1.5 text-neutral-400 hover:text-rose-500 transition-colors cursor-pointer"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onSelectProperty(prop);
                      onClose();
                    }}
                    className="p-1.5 bg-neutral-950 text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
                    title="View details"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-neutral-100 bg-neutral-50">
          <button
            onClick={onClose}
            className="w-full py-3 bg-neutral-950 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};
