/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './Hero.module.scss'
import CN from 'classnames'
import { Button, Blob1 } from 'components/atoms'
import Image from 'next/image'
import Link from 'next/link'
import { useViewport } from 'hooks/useViewport'

export const Hero = ({ className, children, ...restProps }) => {
  const { width, height, isMobile, isTablet, isDesktop } = useViewport()

  return (
    <div
      className={CN(
        styles['hero'],
        'lg:pt-[100px] pb-[100px] lg:pb-[160px] lg:flex',
        className
      )}
      {...restProps}>
      {/* <Blob1 /> */}

      {!isDesktop && (
        <div className='flex justify-center w-full pb-[40px] pt-[20px]'>
          <Image
            unoptimized
            // src='/muffin-tech-image-001.png'
            src='/heroimage.png'
            alt='hero'
            width={370}
            height={370}
          />
        </div>
      )}

      <div className='container relative z-[200]'>
        <div className='hero__left lg:max-w-[460px]'>
          <h1 className='mb-[40px] text-center lg:text-left'>
            Building Web 3.0
          </h1>

          <p className='mb-[60px] lg:mb-[80px] lg:pr-[60px] lg:text-md text-center max-w-[400px] lg:max-w-none mx-auto lg:mx-0 lg:text-left'>
Blockchain is changing the future as we speak—but where do you start? <br/><br/>Adopt the technology with real-world applications from the expertise in distributed technologies.
          </p>

          <div className='hero__cta md:flex md:justify-center lg:justify-start'>
            <Link href='#services' passHref>
              <Button
                mode='filled'
                appearance='primary'
                className='w-full md:w-auto lg:mr-[20px] mb-[20px] lg:mb-0'>
                Explore Services
              </Button>
            </Link>

            {/* <Link href='https://calendly.com/amithw' passHref>
              <Button appearance='ghost' className='w-full md:w-auto'>
                Schedule a Call
              </Button>
            </Link> */}
          </div>
        </div>

        {isDesktop && (
          <div className='absolute top-0 bottom-0 right-[-120px] my-auto hero__right w-[700px] h-[700px]'>
            <Image
              unoptimized
              // src='/muffin-tech-image-001.png'
              src='/heroimage.png'
              alt='hero'
              width={700}
              height={700}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
