import Image from 'next/image'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <main className=' bg-primary'>
      <header className='SEO'></header>
      <section className=' container w-full h-screen w flex flex-col items-center justify-center mt-[225px]'>
      <div className=" w-[1440px] h-[1112.27px] px-[88px] py-[104px]  flex-col justify-start items-start gap-1 inline-flex">
        <div className="h-[215px] flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch h-[215px] flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-gray-900 text-base  uppercase leading-normal tracking-tight">Tagline</div>
            <div className="self-stretch text-gray-900 text-5xl  leading-[56px]">Shorter headers are punchy</div>
            <div className="self-stretch text-gray-900 text-lg  leading-[28.80px]">The body text should clarify your main intention. Why should people care about your product? Use this space to clarify your product offering. </div>
          </div>
        </div>
        <div className="w-[1264px] justify-start items-start gap-20 inline-flex">
          <div className="grow shrink basis-0 self-stretch rounded-md flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-[368.38px] h-[373.27px] rounded-[10.93px] flex-col justify-center items-center flex">
              <Image className="w-[370.17px] h-[373.93px]" src="/370x374.png" width={370} height={370} alt="placeholder" />
            </div>
            <div className="self-stretch h-[175px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-stone-800 text-base  uppercase leading-normal tracking-tight">Category</div>
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="px-6 py-2 bg-white rounded-md border border-gray-900 justify-start items-center gap-3 flex">
                  <div className="text-gray-900 text-xs  leading-[18px] tracking-tight">TAGLINE</div>
                </div>
                <div className="border-b border-black justify-start items-center gap-3 flex">
                  <div className="text-gray-900 text-base  leading-normal">1 Minute Read</div>
                </div>
              </div>
              <div className="self-stretch text-stone-800 text-[32px]  leading-10">Title For CMS Item</div>
              <div className="self-stretch text-stone-800 text-lg  leading-[28.80px]">Est in dolor ut at sed quis sagittis</div>
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch rounded-md flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-[368.38px] h-[373.27px] rounded-[10.93px] flex-col justify-center items-center flex">
              <Image className="w-[369.55px] h-[373.64px]" src="/370x374.png" width={370} height={370} alt="placeholder" />
            </div>
            <div className="self-stretch h-[204px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-stone-800 text-base  uppercase leading-normal tracking-tight">Category</div>
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="px-6 py-2 bg-white rounded-md border border-gray-900 justify-start items-center gap-3 flex">
                  <div className="text-gray-900 text-xs  leading-[18px] tracking-tight">TAGLINE</div>
                </div>
                <div className="border-b border-black justify-start items-center gap-3 flex">
                  <div className="text-gray-900 text-base  leading-normal">1 Minute Read</div>
                </div>
              </div>
              <div className="self-stretch text-stone-800 text-[32px]  leading-10">Title For CMS Item</div>
              <div className="self-stretch text-stone-800 text-lg  leading-[28.80px]">Morbi facilisi mi metus cursus amet. At amet convallis neque a velit aliquam elit.</div>
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch rounded-md flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-[368.38px] h-[373.27px] rounded-[10.93px] flex-col justify-center items-center flex">
              <Image className="w-[369.55px] h-[373.64px]" src="/370x374.png" width={370} height={370} alt="placeholder" />
            </div>
            <div className="self-stretch h-[204px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-stone-800 text-base  uppercase leading-normal tracking-tight">Category</div>
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="px-6 py-2 bg-white rounded-md border border-gray-900 justify-start items-center gap-3 flex">
                  <div className="text-gray-900 text-xs  leading-[18px] tracking-tight">TAGLINE</div>
                </div>
                <div className="border-b border-black justify-start items-center gap-3 flex">
                  <div className="text-gray-900 text-base  leading-normal">1 Minute Read</div>
                </div>
              </div>
              <div className="self-stretch text-stone-800 text-[32px]  leading-10">Title For CMS Item</div>
              <div className="self-stretch text-stone-800 text-lg  leading-[28.80px]">Viverra sit habitasse integer enim integer elit eu amet. </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </main>  
  )
}

export default About