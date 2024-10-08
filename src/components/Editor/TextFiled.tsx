import cn from '../../libs/cn';
import { useRef, useEffect } from 'react';

interface TextFiledProps {
  context: string;
  setContext: (value: string) => void;
}

export default function TextFiled({ context, setContext }: TextFiledProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 텍스트 입력 시 높이를 자동으로 조정하는 함수
  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [context]);

  return (
    <div className="flex justify-center items-center mt-8 px-8">
      <textarea
        ref={textareaRef}
        placeholder="내용을 입력하세요"
        value={context}
        onChange={(e) => {
          setContext(e.target.value);
          adjustHeight(); // 입력 내용 변경 시마다 높이 조정
        }}
        className={cn(
          "p-3 rounded-lg text-lg w-full max-w-4xl min-h-32",
          "resize-none overflow-hidden focus:outline-none"
        )}
        rows={12}
      />
    </div>
  );
}
