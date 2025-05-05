import HeroSection from '@/widgets/HeroSection/HeroSectin'
import Section from '@/shared/ui/Section'
import Image from 'next/image'
import { H } from '@/shared/ui/Htag'
import Marquee from "react-fast-marquee";
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { join } from 'path';
const HomePage = () => {
  return (
    <>
  <HeroSection/>
    <Section className="overflow-visible">
      <div className="grid grid-cols-4 gap-4 w-full">
        {/* 1 рядок, 3 стовпці об'єднані в 1 блок */}
        <div className="col-span-2 row-span-3  relative justify-items-center">
         {/* <Image src='/assets/myphoto.jpg' alt='myphoto' width={500} height={1000} className='  object-contain absolute -top-5 -left-5 -z-10'/>
         <Image src='/assets/myphoto.jpg' alt='myphoto' width={500} height={1000} className='  object-contain absolute top-10 left-10 -z-10'/> */}
         <Image src='/assets/myphoto.jpg' alt='myphoto' width={500} height={1000} className='h-auto  object-contain  z-10'/>
        </div>
        <div className="col-span-2  p-4   ">
         <H h='h2'>About me</H>
         <p>
         Розробник з 4-річним досвідом створення високопродуктивних веб-рішень.
         
         </p>
         <p>
         Спеціалізуюсь на розробці реактивних інтерфейсів з використанням React.js, Next.js і TypeScript, що забезпечують відмінний користувацький досвід.
         </p>
         <p>Ключова цінність моєї роботи – поєднання технічної майстерності з розумінням бізнес-цілей, що дозволяє створювати не просто красиві, але й функціональні рішення, які підвищують конверсію та залученість користувачів.</p>
        </div>
       
        
        {/* 2 рядок, 1 стовпець (об'єднаний з 3 рядком, 1 стовпець) */}
        
        
        {/* 2 рядок, 2 стовпець (окремий) */}
        <div className=" p-4   ">
         <H h='h3'>Hobbi</H>
         <ul className='space-y-2 pt-5'>
          <li>play game</li>
          <li>runs</li>
          <li>походи</li>
          <li>силова атлетика</li>
         </ul>
        </div>
        
        {/* 2 рядок, 3 стовпець (об'єднаний з 3 рядком, 3 стовпець) */}
        <div className="row-span-2  p-4   ">
         <H h='h3'>Переваги співпраці зі мною</H>
         <ul className='space-y-3 pt-5'>
          <li>Технічна експертиза</li>
          <li>Швидка адаптація </li>
          <li>Комплексні рішення </li>
          <li>Орієнтація на результат </li>
          <li>Комунікація </li>
         </ul>
        </div>
        
        {/* 3 рядок, 2 стовпець */}
        <div className=" p-4 ">
          <H h='h3'>МОЄ Резуме</H>
          <div className='flex justify-center pt-5'>
          <Button className='p-5 items-center '>скачати</Button>
             </div>
        </div>
      </div>
    </Section>
    
      <MarqueeSkills/>
    <Contacts/>
    </>
  )
}


const Contacts =()=>{
  return(
    <Section className='my-10'>
<H h='h2'>
Звязатись зі мною

</H>
<p className="text-white-200 md:mt-10 my-5 text-center">Let's connect and explore how I can help you build high-quality, responsive, and scalable web solutions.</p>
<Link href='/contact'>
<Button>Написати</Button>
</Link>
    </Section>
  )
}


const MarqueeSkills=()=>{
return(
  <Section className='py-10 '>
  <Marquee>
<div></div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>

  </Marquee>
  </Section>
)
} 

export default HomePage