import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { list } from "features/user/reducer/userSlice";
import { AppAppBar } from "features/adminCommon";
import moment from "moment";
import { v4 as uuid } from "uuid";
import {
  Box,
  Card,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.usersState);
  const type = useSelector((state) => state.user.type); // 자바의 레포지토리의 타입
  const keyword = useSelector((state) => state.user.keyword); // 레포지토리의 키
  const [usersearch, setUsersearch] = useState({
    // type: type,
    // keyword: keyword, 
    // page: page,
    name: "NONE",
    birth: "NONE",
    phoneNumber: "NONE"
  });
  const {name, birth, phoneNumber} = usersearch;

  const page = 1;
  const handleChange = (event) => {
    console.log(event.target.name);
    setUsersearch({ ...usersearch, [event.target.id]: event.target.value });
    console.log(usersearch);
  };
  // useEffect(() => {
  //   const param = { type: type, keyword: keyword, page: page };
  //   dispatch(list(param));
  // }, []);
  useEffect(() => {
    dispatch(list(usersearch));
  }, []);

  console.log(JSON.stringify(users.userId));
  console.log(type);

  return (
    <>
      <AppAppBar />
      {/* <h1>User List</h1> */}
      <Card>
        <h1 align="center">User List</h1>
        {/* <CardHeader title="User List" align="center" /> */}
        <Divider />
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableCell>
                <label>
                  이름:
                  <input type="text" id="name" value={name} onChange={handleChange} />
                </label>
                <br />
                <br />
                <label>
                  생년월일:
                  <input type="text" id="birth" value={birth} onChange={handleChange} placeholder="No Hyphen" />
                </label>
                <br />
                <br />
                <label>
                  휴대폰번호:
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChange}
                    pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                    placeholder="No Hyphen"
                  />
                </label><br />
                  <button onClick={()=>{dispatch(list(usersearch));}}>search</button>
              </TableCell>
            </TableHead>
          </Table>
          <div style={{ width: "95%", margin: "10px auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>사용자번호</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>생년월일</TableCell>
                  <TableCell>전화번호</TableCell>
                  <TableCell>가입날짜</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((i, userId) => (
                  <TableRow key={userId}>
                    <TableCell>{i.userId}</TableCell>
                    <TableCell>{i.name}</TableCell>
                    <TableCell>{i.userName}</TableCell>
                    <TableCell>{i.birth}</TableCell>
                    <TableCell>{i.phoneNumber}</TableCell>
                    <TableCell>{i.regDate}</TableCell>
                    {/* <TableCell>
                      {moment(users.createdAt).format("DD/MM/YYYY")}
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Box>
      </Card>
    </>
  );
};

export default UserList;
