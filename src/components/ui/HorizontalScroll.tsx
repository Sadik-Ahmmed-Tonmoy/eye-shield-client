// @ts-nocheck
'use client'
import { useEffect, useRef } from 'react'
import { animate, scroll, spring } from 'motion'
import { ReactLenis } from '@studio-freight/react-lenis'
import './HorizontalScroll.css'

export default function HorizontalScroll(): JSX.Element {
  const ulRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    const items = document.querySelectorAll('li')

    if (ulRef.current) {
      const controls = animate(
        ulRef.current,
        {
          // transform: ['none', `translateX(-${(items.length - 1) * 62.50}vw) `],
          transform: ['none', `translateX(-${items.length - 1}00vw)`],
        },
        { easing: spring() }
      )
      scroll(controls, { target: document.getElementById('trigger') })
    }
  }, [])

  return (
    <ReactLenis root>
      <main>
        <article>
          <div className="text-white relative  w-full bg-slate-950 grid place-content-center h-[80vh] slim-scroll2">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="text-6xl font-bold text-center tracking-tight">
              I know You Love to Scroll <br />
              So Scroll
            </h1>
          </div>
          {/* <section ref={ulRef} className="h-[300vh] relative slim-scroll2">
            <ul  className="flex justify-between sticky top-0  slim-scroll2">
              <li className="h-screen w-screen flex-shrink-0 bg-red-400">
                <h1>Item 1</h1>
              </li>
              <li className="h-screen w-screen flex-shrink-0 bg-green-400">
                <h1>Item 2</h1>
              </li>
              <li className="h-screen w-screen flex-shrink-0 bg-yellow-400">
                <h1>Item 3</h1>
              </li>
              <li className="h-screen w-screen flex-shrink-0 bg-red-400">
                <h1>Item 4</h1>
              </li>
              <li className="h-screen w-screen flex-shrink-0 bg-green-400">
                <h1>Item 5</h1>
              </li>
              <li className="h-screen w-screen flex-shrink-0 bg-blue-400">
                <h1>Item 6</h1>
              </li>
              
            </ul>
          </section> */}

          <div id='trigger' className="h-[200vh] relative ">
            <section className="sticky top-0">
              {/* <div className='h-20 w-20 bg-green-500'>2</div> */}
              <ul ref={ulRef}  className="   flex justify-between overflow-x-aut slim-scroll2">
                <li className="h-screen w-screen flex-shrink-0 bg-red-400">
                  <h1>Item 1</h1>
                </li>
                <li className="h-screen w-screen flex-shrink-0 bg-green-400">
                  <h1>Item 2</h1>
                </li>
                <li className="h-screen w-screen flex-shrink-0 bg-yellow-400">
                  <h1>Item 3</h1>
                </li>
                <li className="h-screen w-screen flex-shrink-0 bg-red-400">
                  <h1>Item 4</h1>
                </li>
                <li className="h-screen w-screen flex-shrink-0 bg-green-400">
                  <h1>Item 5</h1>
                </li>
                <li className="h-screen w-screen flex-shrink-0 bg-blue-400">
                  <h1>Item 6</h1>
                </li>
              </ul>
            </section>
          </div>
          <footer className="bg-red-600 text-white grid place-content-center h-[80vh]">
            <p>
              Created By{' '}
              <a target="_blank" href="https://twitter.com/mattgperry">
                Matt Perry
              </a>
            </p>
          </footer>
        </article>
        <div className="progress fixed left-0 right-0 h-2 rounded-full bg-red-600 bottom-[50px] scale-x-0"></div>
      </main>
    </ReactLenis>
  )
}
