import { useState, useRef, useEffect } from 'react';
import { TextInput } from '@mantine/core';

export default function AutoSizeTextInput() {
  const [inputValue, setInputValue] = useState('');
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.style.width = `${spanRef.current.scrollWidth}px`;
    }
  }, [inputValue]);

  return (
      <div style={{display: 'inline-block'}}>
      <span ref={spanRef} style={{visibility: 'hidden', whiteSpace: 'nowrap'}}>
        {inputValue}
      </span>
          <TextInput
              placeholder="Add"
              value={inputValue}
              onChange={(event) => setInputValue(event.currentTarget.value)}
              style={{
                  width: spanRef.current ? `${spanRef.current.scrollWidth}px` : 'auto',
                  minWidth: '150px',
                  height: 'auto'
              }}
              styles={{input: {backgroundColor: 'transparent', border: 'none', height: '100px'}}}
          />
      </div>
  );
}