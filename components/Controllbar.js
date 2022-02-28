import { motion } from "framer-motion";

export default function Controllbar(props) {
  return (
    <div className="bottom-row">
      <motion.button onClick={props.resetTime} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="clear" >Clear</motion.button>
      <motion.button onClick={props.addTime} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} >Time</motion.button>
    </div>
  )
}