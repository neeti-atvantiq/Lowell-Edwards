'use client';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface Props {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  searchable?: boolean;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = 'Select…',
  disabled = false,
  required = false,
  className = '',
  name,
  searchable = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  const filteredOptions = useMemo(() => {
    if (!searchable || !search.trim()) return options;
    const q = search.toLowerCase();
    return options.filter((o) => o.label.toLowerCase().includes(q));
  }, [options, search, searchable]);

  const close = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
    setSearch('');
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, close]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, close]);

  // Scroll focused item into view
  useEffect(() => {
    if (focusedIndex >= 0 && listRef.current) {
      const item = listRef.current.children[focusedIndex] as HTMLElement;
      item?.scrollIntoView({ block: 'nearest' });
    }
  }, [focusedIndex]);

  // Auto-focus search input when opened
  useEffect(() => {
    if (isOpen && searchable && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen, searchable]);

  const toggle = () => {
    if (disabled) return;
    if (!isOpen) {
      setIsOpen(true);
      const idx = filteredOptions.findIndex((o) => o.value === value);
      setFocusedIndex(idx >= 0 ? idx : 0);
    } else {
      close();
    }
  };

  const select = (opt: SelectOption) => {
    if (opt.disabled) return;
    onChange(opt.value);
    close();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          const opt = filteredOptions[focusedIndex];
          if (opt && !opt.disabled) select(opt);
        } else {
          toggle();
        }
        break;
      case ' ':
        if (!searchable || !isOpen) {
          e.preventDefault();
          if (isOpen && focusedIndex >= 0) {
            const opt = filteredOptions[focusedIndex];
            if (opt && !opt.disabled) select(opt);
          } else {
            toggle();
          }
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          const idx = filteredOptions.findIndex((o) => o.value === value);
          setFocusedIndex(idx >= 0 ? idx : 0);
        } else {
          setFocusedIndex((prev) => {
            let next = prev + 1;
            while (next < filteredOptions.length && filteredOptions[next].disabled) next++;
            return next < filteredOptions.length ? next : prev;
          });
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex((prev) => {
            let next = prev - 1;
            while (next >= 0 && filteredOptions[next].disabled) next--;
            return next >= 0 ? next : prev;
          });
        }
        break;
      case 'Tab':
        if (isOpen) close();
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`cs-wrap ${className} ${isOpen ? 'cs-open' : ''} ${disabled ? 'cs-disabled' : ''}`}
    >
      {/* Hidden native select for form submission/validation */}
      {name && (
        <select
          name={name}
          value={value}
          required={required}
          tabIndex={-1}
          aria-hidden="true"
          style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }}
          onChange={() => {}}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      )}

      <button
        type="button"
        className="cs-trigger"
        onClick={toggle}
        onKeyDown={!searchable || !isOpen ? onKeyDown : undefined}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        disabled={disabled}
        tabIndex={0}
      >
        <span className={`cs-value ${!selectedOption ? 'cs-placeholder' : ''}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg className="cs-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="cs-dropdown">
          {searchable && (
            <div className="cs-search-wrap">
              <svg className="cs-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchRef}
                type="text"
                className="cs-search"
                placeholder="Search…"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setFocusedIndex(0); }}
                onKeyDown={onKeyDown}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
          <ul
            ref={listRef}
            className="cs-list"
            role="listbox"
            aria-activedescendant={focusedIndex >= 0 ? `cs-opt-${focusedIndex}` : undefined}
          >
            {filteredOptions.length === 0 ? (
              <li className="cs-no-results">No results found</li>
            ) : (
              filteredOptions.map((opt, i) => (
                <li
                  key={opt.value}
                  id={`cs-opt-${i}`}
                  role="option"
                  aria-selected={opt.value === value}
                  className={`cs-option ${opt.value === value ? 'cs-selected' : ''} ${i === focusedIndex ? 'cs-focused' : ''} ${opt.disabled ? 'cs-option-disabled' : ''}`}
                  onClick={() => select(opt)}
                  onMouseEnter={() => setFocusedIndex(i)}
                >
                  {opt.label}
                  {opt.value === value && (
                    <svg className="cs-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
