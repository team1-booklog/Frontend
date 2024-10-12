import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getReview, editReview, makeReview } from '../services/ReviewService';
import BookReportHeader from "../components/Editor/BookReportHeader"
import TextFiled from "../components/Editor/TextFiled"
import Footer from "../components/Editor/Footer"

export default function Editor() {
  const [context, setContext] = useState<string>('');
  const [title, setTitle] = useState<string>(''); 
  const [thumbnail, setThumbnail] = useState<File | undefined>(undefined); // 폼데이터 파일로
  const [bookIsbn, setBookIsbn] = useState<string>('');
  const [isPostOk, setIsPostOk] = useState<boolean>(false);
  const [isFirst, setIsFirst] = useState<boolean>(true); // 첫 게시글인시 수정인지
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const articleId = searchParams.get('articleId');

  useEffect(() => {
    if (!articleId) {
      setIsFirst(true);
      console.log('first');
      return;
    }
    if (articleId) {
      const fetchArticle = async () => {
        const response = await getReview(Number(articleId));
        if ('code' in response && 'message' in response) {
          // ErrorResponse 타입일 경우
          console.log('게시글 정보를 가져오는 중 오류가 발생했습니다.');
        } else {
          // ReviewDetailResponse 타입일 경우
          setTitle(response.title);
          setContext(response.content);
          setBookIsbn(response.id.toString());
          setIsPostOk(true);
        }
      }
      fetchArticle();
      console.log('fetch article');
      setIsFirst(false);
    }
  }, [articleId]);


  const onPost = () => {
    if (isPostOk && isFirst) {
      const postArticle = async () => {
        const request = {
          title: title,
          content: context,
          bookId: Number(bookIsbn),
        };
        const response = await makeReview({
          file: thumbnail,
          request: request,
        });
        if ('code' in response && 'message' in response) {
          console.log('게시글 작성 중 오류가 발생했습니다.');
        } else {
          navigate(-1);
        }
      }
      postArticle();
      console.log('post');
    } else if (isPostOk && !isFirst) {
      // edit
      console.log('edit');
    }
  }

  const onCancel = () => {
    navigate(-1);
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
    <div className='min-h-screen'>
      <main className='pb-[80px]'>
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
      </main>
      <Footer 
        isPostOk={isPostOk}
        onPost={onPost}
        onCancel={onCancel}
      />
    </div>
  )
};