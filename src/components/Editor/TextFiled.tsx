import cn from '../../libs/cn';

interface TextFiledProps {
  context:string,
  setContext: (value: string) => void;
}

export default function TextFiled({context, setContext}: TextFiledProps) {
  return (
  <div className="flex justify-center items-center mt-8 px-8">
    <input 
      type="text"
      placeholder="내용을 입력하세요" 
      value={context} 
      onChange={(e) => setContext(e.target.value)}
      className={cn(
        "p-3 rounded-lg text-lg border border-gray-300 w-full max-w-4xl"
      )}
    /> 
   </div>
  )
};