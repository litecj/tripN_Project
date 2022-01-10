import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../home/home.module.css';

const MBTIHome = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}>
                    </div>
                    <div className={styles.middle}>
                        <h2 className={styles.header}>당신에게 가장 어울리는 여행을 찾아 떠나보세요!</h2>
                        <p>곧 멋진 여행을 떠날 당신, <p/>
                        꼭 맞는 여행을 추천해드리기 위한 몇 가지 질문을 준비했어요 :)</p>
                    </div>
                    <div className={styles.bottom}>
                        <Link to="/mbti/test" className={styles.start__button}>
                            테스트 하기
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MBTIHome;
