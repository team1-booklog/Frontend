import { useEffect, useState } from 'react';
import BookReportHeader from "../components/Editor/BookReportHeader"
import TextFiled from "../components/Editor/TextFiled"
import Footer from "../components/Editor/Footer"

export default function Editor() {
  const [context, setContext] = useState<string>('');
  const [title, setTitle] = useState<string>(''); 
  const [thumbnail, setThumbnail] = useState<string>('');
  const [bookIsbn, setBookIsbn] = useState<string>('');
  const [isPostOk, setIsPostOk] = useState<boolean>(false);

  const onPost = () => {
    // 게시하기 버튼 클릭 시 처리
  }

  const onCancel = () => {
    // 작성취소 버튼 클릭 시 처리
  }

  useEffect(() => {
    if (title && context && bookIsbn) {
      setIsPostOk(true);
    } else {
      setIsPostOk(false);
    }
  }
  , [title, context, bookIsbn]);

  return (
    <div>
      <BookReportHeader 
        title={title}
        setTitle={setTitle}
        thumbnail={thumbnail}
        setThumbnail={setThumbnail}
        bookIsbn={bookIsbn}
        setBookIsbn={setBookIsbn}
      />
      <TextFiled 
        context={context}
        setContext={setContext}
      />
      <Footer 
        isPostOk={isPostOk}
        onPost={onPost}
        onCancel={onCancel}
      />
    </div>
  )
};