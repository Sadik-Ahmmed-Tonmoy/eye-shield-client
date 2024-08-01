import Image from "next/image";
import styles from "./CenterZoomParallax.module.scss";

const CenterZoomParallax = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <div className={styles.el}>
          <div className={styles.imageContainer}>
            {/* <Image src={img}
            fill
            alt="image"
            placeholder="blur"
            
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterZoomParallax;
