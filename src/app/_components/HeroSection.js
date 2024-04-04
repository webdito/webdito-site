import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-20 lg:gap-3 py-10 lg:py-36">
      <h1 className="flex flex-col text-content-gray text-base md:text-lg lg:text-2xl xl:text-3xl gap-3 lg:gap-6 text-justify">
        <span>سلام :)</span>
        <span>
          اینجا
          <span className="px-2 font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            وبدیتو
          </span>
          ، ما به کیفیت بالا اعتقاد داریم.
        </span>
        <span>طراحی سایت اختصاصی و وردپرسی تخصص ماست.</span>
        <span>بریم در ادامه با ما بیشتر اشنا شید.</span>
      </h1>
      <div className="bg-gradient-to-r from-pink-500 to-yellow-500 p-2 rounded-full">
        <Image
          width={100}
          height={100}
          src="/profile-logo.png"
          alt="WebDito Logo for HeroSection"
          className="size-44 md:size-60 lg:size-80 rounded-full"
        />
      </div>
    </section>
  );
};
