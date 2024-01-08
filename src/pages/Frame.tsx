import { FunctionComponent, useCallback } from "react";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  const onLinkTWITTERClick = useCallback(() => {
    window.open("twitter.com/aifjs");
  }, []);

  const onLinkLINKEDINClick = useCallback(() => {
    window.open("linkedin.com/in/sofiaale");
  }, []);

  const onLinkLastfmClick = useCallback(() => {
    window.location.href = "last.fm/users/s_fia";
  }, []);

  return (
    <div className={styles.componentParent}>
      <div className={styles.justinaInspiredWebsiteParent}>
        <div className={styles.justinaInspiredWebsite}>
          <div className={styles.justinaInspiredWebsite1}>
            <div className={styles.justinaInspiredWebsite2}>
              <div className={styles.frame}>
                <i className={styles.hiImSofia}>Hi! I'm Sofia.</i>
                <i
                  className={styles.imAnOperations}
                >{`I'm an operations lead at a Series A fintech company in NYC. I studied public policy & computer science at Duke University, and since then I’ve worked on voter technology, weather modification, and climate finance. `}</i>
              </div>
              <div className={styles.frame1}>
                <div
                  className={styles.linkTwitter}
                  onClick={onLinkTWITTERClick}
                >{`TWITTER `}</div>
                <div className={styles.link}>✧</div>
                <div
                  className={styles.linkTwitter}
                  onClick={onLinkLINKEDINClick}
                >{`LINKEDIN `}</div>
                <div className={styles.link}>✧</div>
                <div className={styles.linkTwitter} onClick={onLinkLastfmClick}>
                  LAST.FM
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame2}>
          <img
            className={styles.adobestock623006607Preview1Icon}
            alt=""
            src="/adobestock-623006607-preview-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Frame;
