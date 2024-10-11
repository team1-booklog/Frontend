import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookData as fetchBookDetails } from '../services/BookService';
import DefaultThumbnail from '../assets/images/DefaultThubnail.png';
import axios from 'axios';

interface ArticleData {
  title: string;
  thumbnail?: string; // 타입을 string 또는 undefined로 변경
  context: string;
  bookIsbn: string;
  date: string;
}

interface ArticleBookData {
  title: string; // 책 이름
}

export default function Article() {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const [articleData, setArticleData] = useState<ArticleData | null>(null);
  const [bookData, setBookData] = useState<ArticleBookData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 게시글 데이터 가져오기
  useEffect(() => {
    console.log('articleSlug : ', articleSlug);
    if (articleSlug === 'test') {
      console.log('Using test data');
      setArticleData({
        title: '스벨트는 우주 최강 프레임워크인 것 같다.',
        context:
          '아무래도 리액트를 다 스벨트로 갈아엎어 버리고 싶다. 나는 스벨트를 할 줄 모른다.',
        bookIsbn: '9791193926161',
        date: '2021-01-01',
        thumbnail: undefined, // 테스트 데이터에서 thumbnail을 undefined로 설정
      });
      return;
    } else {
      const fetchArticleData = async () => {
        try {
          const response = await axios.get(`/api/article/${articleSlug}`);
          setArticleData(response.data);
        } catch (error) {
          console.error('Error fetching article data:', error);
          setError('게시글 데이터를 가져오는 중 오류가 발생했습니다.');
        }
      };

      fetchArticleData();
    }
  }, [articleSlug]);

  // 책 데이터 가져오기
  useEffect(() => {
    if (articleData?.bookIsbn) {
      const getBookDetails = async () => {
        try {
          const data = await fetchBookDetails(articleData.bookIsbn);
          setBookData(data);
        } catch (err) {
          console.error('Error fetching book data:', err);
          setError(
            err instanceof Error
              ? err.message
              : '책 정보를 가져오는 중 오류가 발생했습니다.'
          );
        }
      };

      getBookDetails();
    }
  }, [articleData?.bookIsbn]);

  if (error) {
    return <div>에러가 발생했습니다: {error}</div>;
  }

  if (!articleData || !bookData) {
    return <div>Loading...</div>;
  }

  const { title: articleTitle, context, thumbnail } = articleData;
  const { title: bookTitle } = bookData;

  return (
    <div>
      <img
        src={thumbnail || DefaultThumbnail}
        alt="게시글 썸네일"
      />
      <h1>{articleTitle}</h1>
      <h2>{`${bookTitle}을 읽고`}</h2>
      <p>{context}</p>
    </div>
  );
}
