import styles from "./countries.module.css";
import { Link, useParams } from "react-router-dom";
import Countries from "../../api/mbtiResultApi";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { mbti } from "features/user/reducer/userSlice";

const MBTIResult = ({}) => {
  // const { countryName } = match.params;
  const { countryName } = useParams();
  const dispatch = useDispatch();

  const nation = Countries[countryName];

  // const user = useSelector((state) => state.user.userState);
  const user = JSON.parse(window.localStorage.getItem("sessionUser")); // window 전역

  const personMbti = {
    userId: user["userId"],
    mbti: nation.id,
    mbtiList: localStorage.getItem("mbti"),
  };

  console.log(personMbti);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    await dispatch(mbti(personMbti));
    alert(JSON.stringify(personMbti));

    // await dispatch(join(signup));
    // alert(JSON.stringify(nation.id) + "구나 너는!");
    // navigate("/login");
  };

  return (
    <>
      <div className={styles.wrapper} key={nation.id}>
        <div className={styles.container}>
          <div className={styles.result__type}>
            <h1 className={styles.result__head}>
              당신에게 가장 어울리는 여행을 추천해드릴게요!
            </h1>
            <br />
          </div>
          <div className={styles.reust__title}>
            <h2>{nation.id}의 여행특징은?</h2>
          </div>
          <ul className={styles.result__style__wrapper}>
            {nation.description.map((item) => {
              return (
                <li className={styles.result__style__detail} key={item.des}>
                  {item.des}
                </li>
              );
            })}
          </ul>
          <div className={styles.button__box}>
            {/* <Link to="/" className={styles.button}>
              여행을 떠나기!
            </Link> */}
            <Button
              component={Link}
              to="/"
              sx={{
                border: "4px solid currentColor",
                borderRadius: 0,
                height: "auto",
                py: 2,
                px: 5,
              }}
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              <Typography variant="h4" component="span">
                여행을 떠나기!
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MBTIResult;
