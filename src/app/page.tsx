import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-cario">
      {/* hero Section  */}
      <div className="bg-[url('/bg-2.png')] w-full bg-cover bg-center">
        <div className="bg-[url('/Bg.png')] w-full bg-cover bg-center">
          <header className="flex items-center justify-between max-w-7xl mx-auto py-4 sm:py-7 px-4">
            <Link href={"/"} className="w-24 [@media(min-width:490px)]:w-auto">
              <Image src="/Logo.svg" alt="brand" width={121.71} height={48} />
            </Link>
            <div>
              <ul className="flex items-center gap-4 sm:gap-8">
                <li>
                  <Link href="/" className="text-base leading-normal sm:text-lg sm:leading-6 text-black">
                    حساب جديد
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sign-up"
                    className="text-base leading-normal sm:text-lg sm:leading-6 text-black bg-white/80 border border-[#29292E4D] py-2 sm:py-3.5 px-4 sm:px-6 rounded-lg"
                  >
                    تسجيل الدخول
                  </Link>
                </li>
              </ul>
            </div>
          </header>
          <div className="relative pt-14 pb-16 md:pt-20 md:pb-24">
            <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-0 md:pt-20 md:pb-24 max-w-7xl mx-auto px-4">
              <div className="md:w-1/2 lg:w-full lg:max-w-[519px]">
                <div className="flex flex-col gap-7">
                  <h1 className="text-4xl leading-normal lg:text-5xl lg:leading-[62.91px] font-semibold text-black text-center md:text-right">
                    نجاح علامتك التجارية يبدأ بالاستماع إلى عملائك
                  </h1>
                  <p className="text-xl leading-normal lg:text-2xl lg:leading-9 font-medium text-black text-center md:text-right">
                    مع أداة الذكاء الصناعي للتحليل، ابنِ وطوّر علامتك التجارية بناءً على رغباتهم، واكسب ولاءهم لزيادة
                    مبيعاتك.
                  </p>
                </div>
              </div>
              <div className="md:absolute md:left-0 md:h-full md:w-full">
                <div className="flex items-center justify-end h-full w-full max-w-[1520px] mx-auto">
                  <div className="md:w-[50%] [@media(min-width:1390px)]:w-[50%]">
                    <Image src="/hero-sec-img-2.png" alt="hero" width={710} height={531} className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End hero Section  */}

      {/* Explanation Section One  */}
      <section className="bg-Sec2bg bg-cover bg-center">
        <div className="flex flex-col md:items-center md:flex-row pt-10 md:pt-20 pb-16 md:pb-24 gap-10 md:gap-16 max-w-7xl mx-auto px-4">
          <div className="md:w-1/2 lg:w-full lg:max-w-[519px]">
            <div className="flex flex-col items-center text-center md:text-right md:items-start gap-4 lg:gap-7">
              <h1 className="text-4xl leading-normal lg:text-5xl lg:leading-[62.91px] font-semibold text-black">
                إدارة التعليقات من مكان واحد
              </h1>
              <p className="text-xl leading-normal lg:text-2xl lg:leading-9 font-medium text-black">
                مراقبة جميع تعليقات عملائك والرد عليها بسهولة، دون التشتت بين المنصات مبيعاتك.
              </p>
              <p className="text-xl leading-normal lg:text-2xl lg:leading-9 font-medium text-black">
                اكتشف الجوانب التي أحبها عملاؤك وركز عليها، واعرف ما يحتاج إلى تحسين
              </p>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-auto relative">
            <Image src="/section-one.png" alt="hero" width={665} height={481} className="w-full" />
          </div>
        </div>
      </section>
      {/* End Explanation Section One  */}

      {/* Explanation Section Two  */}
      <section className="bg-Sec3bg bg-cover bg-center overflow-hidden">
        <div className="pt-10 sm:pt-16 md:pt-24 lg:pt-32 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl leading-normal lg:text-5xl lg:leading-[62.91px] font-semibold text-black text-center">
            مساعدك الذكي يعمل لأجلك
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 md:mt-14 mb-16 md:mb-24">
            <div className="col-span-1">
              <div className="bg-white/30 flex flex-col gap-4 items-center justify-center shadow-card backdrop-blur-md py-14 px-6 rounded-[48px] h-full">
                <div className="w-[75px] h-[81px]">
                  <Image src="/pencil.png" alt="card-four" width={75} height={81} className="w-full" />
                </div>
                <p className="text-lg md:text-[22px] leading-normal md:leading-[28.83px] text-center">
                  كتابة الردود عنك بمحاكاة أسلوبك المعتاد
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-white/30 flex flex-col gap-4 items-center justify-center shadow-card backdrop-blur-md py-14 px-6 rounded-[48px] h-full">
                <div className="w-[72px] h-[87px]">
                  <Image src="/pie-chart-card.png" alt="card-three" width={72} height={87} className="w-full" />
                </div>
                <p className="text-lg md:text-[22px] leading-normal md:leading-[28.83px] text-center">
                  تصحيح وتحسين نص ردك لعملائك
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-white/30 flex flex-col gap-4 items-center justify-center shadow-card backdrop-blur-md py-14 px-6 rounded-[48px] h-full">
                <div className="w-[94px] h-[87px]">
                  <Image src="/calendar.png" alt="card-two" width={94} height={87} />
                </div>
                <p className="text-lg md:text-[22px] leading-normal md:leading-[28.83px] text-center">
                  تحليل نصي شامل ومختصر مع توصيات للتحسين
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-white/30 flex flex-col gap-4 items-center justify-center shadow-card backdrop-blur-md py-14 px-6 rounded-[48px] h-full">
                <div className="w-[147px] h-[87px]">
                  <Image src="/plane.png" alt="card-one" width={147} height={87} />
                </div>
                <p className="text-lg md:text-[22px] leading-normal md:leading-[28.83px] text-center">
                  أفكار مبتكرة ومجددة للتطوير المستمر
                </p>
              </div>
            </div>
          </div>
          <div className="relative isolate">
            <div className="pt-24 lg:pt-36 pb-10">
              <div className="flex-col flex items-center gap-4 relative max-w-5xl mx-auto pt-8 pb-20">
                <h1 className="text-4xl leading-normal lg:text-5xl lg:leading-[62.91px] font-semibold text-black">
                  <span className="relative inline-block w-[7rem] lg:w-[9rem]">
                    <Image
                      src="/line.png"
                      alt="line"
                      className="absolute -top-3 lg:left-3 left-4 w-full"
                      width={150}
                      height={83}
                    />
                    تحليل
                  </span>
                  المنافسين
                </h1>
                <p className="text-xl leading-normal lg:text-2xl lg:leading-9 font-medium text-black max-w-[598px] mx-auto text-center">
                  احصل على رؤية شاملة لأداء منافسيك وآراء عملائهم، وابنِ استراتيجيتك التي تركز على الإيجابيات وتجنب
                  السلبيات أو تحسينها لجذب المزيد من العملاء
                </p>
                <div className="absolute -top-16 sm:top-0 left-0">
                  <Image src={"/icon-1.png"} alt="icon-1" width={100} height={100} />
                </div>
                <div className="absolute -top-16 sm:top-0 right-0">
                  <Image src={"/icon-2.png"} alt="icon-2" width={100} height={100} />
                </div>
                <div className="absolute -bottom-4 sm:bottom-0 left-4 sm:left-20">
                  <Image src={"/icon-3.png"} alt="icon-3" width={100} height={100} />
                </div>
                <div className="absolute -bottom-4 sm:bottom-0 right-4 sm:right-16">
                  <Image src={"/icon-4.png"} alt="icon-4" width={100} height={100} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center absolute top-0 w-full">
              <div className="w-[650px] h-[650px] sm:w-[750px] sm:h-[750px] md:w-[950px] md:h-[950px] lg:w-[1249px] lg:h-[1180px] bg-white/30 rounded-full flex items-center justify-center absolute top-0 z-[-1]">
                <div className="w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] md:w-[700px] md:h-[700px] lg:w-[880px] lg:h-[831px] bg-white/40 rounded-full flex items-center justify-center">
                  <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[480px] md:h-[480px] lg:w-[568px] lg:h-[536px] bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Explanation Section Two  */}

      {/* Explanation Section Three  */}
      <section className="bg-Sec2bg bg-cover bg-center">
        <div className="flex flex-col md:items-center md:flex-row py-20 md:py-28 gap-10 md:gap-16 max-w-7xl mx-auto px-4">
          <div className="md:w-1/2 lg:w-full lg:max-w-[600px]">
            <div className="flex flex-col items-center text-center md:text-right md:items-start gap-4 lg:gap-7">
              <Image src="/bell.png" alt="bell" width={166} height={163} />
              <h1 className="text-4xl leading-normal lg:text-5xl lg:leading-[62.91px] font-semibold text-black">
                تنبيهات فورية
              </h1>
              <p className="text-xl leading-normal lg:text-2xl lg:leading-9 font-medium text-black">
                استقبل تنبيهات مباشرة للتعليقات السلبية لتتمكن من تدارك الوضع فورًا قبل فقدان العملاء.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-auto relative isolate">
            <Image src="/section-two.png" alt="hero" width={565} height={392} className="w-full" />
            <div className="absolute top-1/2 left-1/2 w-full h-full z-[-1] rounded-full blur-3xl bg-[#A3B5D466] backdrop-blur-xl -translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </section>
      {/* End Explanation Section Three  */}

      {/* Footer Section */}
      <footer className="bg-Footerbg bg-cover bg-center">
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row md:items-center pt-16 pb-12 md:pb-10 md:pt-28 lg:gap-28 max-w-7xl mx-auto px-4">
          <div className="md:w-1/2 lg:w-full lg:max-w-[519px]">
            <div className="flex flex-col items-center text-center md:text-right md:items-start gap-4 lg:gap-7">
              <h1 className="text-4xl leading-normal lg:text-5xl lg:leading-[62.91px] font-semibold text-black">
                راقب سمعتك في السوق
              </h1>
              <p className="text-xl leading-normal lg:text-2xl lg:leading-9 font-medium text-black">
                راقب سمعتك في السوق <br />
                نقوم بجمع الآراء والإشارات والهاشتاقات حول علامتك <br /> لتكوين نظرة شاملة عن تقييمك.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-auto relative isolate">
            <Image src="/footer-img-2.png" alt="hero" width={605} height={481} className="w-full" />
            <div className="absolute top-1/2 left-1/2 w-full h-full z-[-1] rounded-full blur-3xl bg-[#A3B5D466] backdrop-blur-xl -translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-white/80 backdrop-blur-[20px] py-6 px-4">
          <p className="text-center">جميع الحقوق محفوظة InsightMinds 2024 text-black</p>
        </div>
      </footer>
      {/* End Footer Section */}
    </main>
  );
}
