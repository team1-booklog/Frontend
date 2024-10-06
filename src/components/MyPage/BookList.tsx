import BookCardComponent from "../common/BookCardComponent";

export default function BookList() {
  // 레이아웃을 위한 임시 데이터
  const tempData = {
    bookList: [
      {
        title: 'Doit! 점프 투 파이썬',
        imageUrl: 'https://image9.coupangcdn.com/image/vendor_inventory/9ade/a02d54da37050318e16a716ef452616fa0d747061b44b77602408184a384.jpg'
      },
      {
        title: '실전 스벨트 & 스벨트킷 입문',
        imageUrl: 'https://image.yes24.com/YES24ViewerDatas/Z1260_LT/A12594/B125932/125931860_L/15zjwcxrq2qdmcdx01.jpg'
      },
      {
        title: '누가 내 머리에 똥쌌어?',
        imageUrl: 'https://image.yes24.com/YES24ViewerDatas/Z1_LT/A1/B2/1315_L/z35llww4yi7bw722%EB%88%84%EA%B0%80.jpg'
      },
      {
        title: '구름빵',
        imageUrl: 'https://image.yes24.com/goods/1472361/XL'
      },
      {
        title: '운영체제',
        imageUrl: 'https://image.yes24.com/goods/89496122/XL'
      },
      {
        title: '알고리즘 문제 해결 전략',
        imageUrl: 'https://image.yes24.com/goods/8006522/XL'
      }
    ]
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
        
        {tempData.bookList.map((book, index) => (
          <BookCardComponent 
            key={index} 
            title={book.title} 
            imageUrl={book.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}