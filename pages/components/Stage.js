import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import { Element } from "react-scroll/modules";

import styles from "../../styles/Home.module.css";

const Stage = () => {
  const scrollToTop = function () {
    scroll.scrollToTop();
  };
  const scrollToBottom = function () {
    scroll.scrollToBottom();
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigate}>
        <span onClick={() => scrollToTop()}>To Top</span>
        <span onClick={() => scrollToBottom()}>To Bottom</span>

        <span
          onClick={() =>
            scroller.scrollTo("content", {
              duration: 1500,
              delay: 100,
              smooth: true,
            })
          }
        >
          To Content
        </span>
      </div>
      <div
        id="header1"
        className={styles.context}
        styles={{ backgroundColor: "red" }}
      >
        Header
      </div>
      <div
        id="content1"
        className={styles.context}
        styles={{ backgroundColor: "blue" }}
        name="content"
      >
        Content
      </div>
      <div
        id="footer1"
        styles={{ backgroundColor: "coral" }}
        className={styles.context}
      >
        Footer
      </div>
    </div>
  );
};

export default Stage;
