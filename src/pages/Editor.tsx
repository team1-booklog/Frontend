import { useState } from 'react';
import BookReportHeader from "../components/Editor/BookReportHeader"
import TextFiled from "../components/Editor/TextFiled"

export default function Editor() {
  const [context, setContext] = useState<string>('');

  return (
    <div>
      <BookReportHeader />
      <TextFiled context={context} setContext={setContext}/>
    </div>
  )
};