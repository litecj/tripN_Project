
import { Footer, Header, Sidebar } from "..";
import styles from "features/common/style/MyLayout.module.scss";
import { ChatBotTripN } from "features/chatbot";

const MyLayout = (props) => {
  return (
    <>
      <div className={styles.trip_wrapper}>
        <div className={styles.trip_container}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.content}>{props.children}</div>
          <div className={styles.chatbot}>
            <ChatBotTripN/>
          </div>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyLayout;
