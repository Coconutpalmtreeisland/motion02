import React, { useState, useRef } from 'react'
import useMouse from './util/useMouse'
import { motion } from 'framer-motion';

const App = () => {
  const [isHoverd, setIsHoverd] = useState(false);
  const size = isHoverd ? 500 : 50;
  const section2Ref = useRef(null);
  const { x, y } = useMouse(section2Ref);

  return (
    <main>
      <section id='section1'>
        <h1>Gallery Hover Animation</h1>
      </section>

      <section id='section2' ref={section2Ref}>
        <div className='project__wrap'>
          <motion.div
            className='project__mask'
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${size}px`
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          >
            <p
              onMouseEnter={() => { setIsHoverd(true) }}
              onMouseLeave={() => { setIsHoverd(false) }}
            >나는 가을의 서늘한 공기를 마시며 길을 걷고, 떨어지는 단풍잎들을 구경하며 평온함을 느꼈습니다.</p>
          </motion.div>
          <div className='project__text'>
            <p>I walked <span>along the road</span>, savoring the cool autumn air and admiring the falling leaves, feeling a sense of tranquility.</p>
          </div>
        </div>
      </section>

      <section id='section3'></section>
    </main>
  )
}

export default App