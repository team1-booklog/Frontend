import cn from '../../libs/cn';

interface FooterProps {
  isPostOk: boolean;
  onPost: () => void;
  onCancel: () => void;
}

export default function Footer({isPostOk, onPost, onCancel}: FooterProps) {
  
  const handlePostButton = () => {
    if (isPostOk) {
      onPost();
    } else {
      alert('제목과 내용을 입력해주세요.');
    }
  };

  return (
    <footer className="bg-[#2B5877] flex justify-between">
      <button onClick={onCancel}>
        작성취소
      </button>
      <button 
        onClick={handlePostButton}
        className={cn(
          "bg-white border rounded-lg p-2",
          `${isPostOk ? 'text-[#EC6B53] border-[#EC6B53]' : 'text-gray-400 border-gray-400'}`
        )}
      >
        게시하기
      </button>
    </footer>
  );
}