import { useState } from 'react';
import { motion } from 'framer-motion';

export const Test = () => {
  const [show, setShow] = useState(false);

  const variants = {
    visible: (i) => ({
      //^I WAS NOT HERE BEFORE
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.3 }, //?OR DELAY:i * 0.3
    }),
    hidden: { opacity: 0 },
  };

  const items = ['item 1', 'item 2', 'item 3', 'item 4'];

  return (
    <div className="course">
      {/* <motion.div
        className="box"
        variants={variants}
        initial="hidden"
        animate="visible"
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, scale: 2 }}
        animate={show ? 'visible' : 'hidden'}
      ></motion.div>
      <button onClick={() => setShow((prev) => !prev)}>Click</button> */}
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
