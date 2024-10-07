export default function AuthHeader() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center bg-[#F1F1F1] z-0">
      <div className="text-center px-4 md:px-32 py-6">
        <div className="flex flex-col items-center gap-6 w-fit font-rockwell font-normal">
          <h1 className="w-fit text-4xl md:text-8xl text-[#2B5877]">
            Welcome to BookLog!
          </h1>
          <h2 className="w-fit text-2xl md:text-4xl text-[#918F8F]">
            Join our community and share your book reviews.
          </h2>
        </div>
      </div>
    </div>
  )
}
