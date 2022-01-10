import { ChatBotTripN } from "features/chatbot";
import { Footer, Header } from "..";
import styles from "features/common/style/TripLayout.module.scss";

const TripLayout = (props) => {
  return (
    <>
      <div className={styles.trip_wrapper}>
        <div className={styles.trip_container}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.content}>{props.children}</div>
          <div className={styles.chatbot}>
            <ChatBotTripN />
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default TripLayout;
