import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  capitalize,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import MediaCard from "../components/MediaCard";

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    marginTop: "5rem",
    textAlign: "center",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
  circular: {
    margin: "auto",
  },
}));


function Main(props) {

  const { REACT_APP_API_BASE_URL, REACT_APP_API_TOKEN } = process.env;
  // console.log(REACT_APP_API_BASE_URL);
  
  const [userList, setUserList] = useState();
  const mainStyles = stylesFunc();

  const fetchData = async () => {
    const response = await axios.get(`${REACT_APP_API_BASE_URL}/user`, {
      headers: {
        "app-id": REACT_APP_API_TOKEN,
      },
    });
    setUserList(response?.data?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(userList);


  return (
    <Container className={mainStyles.wrapper} >
        {!userList ? (
        //TODO: center loading icon
        <CircularProgress className={mainStyles.circular}/>
      ) : (
      <Grid container spacing={1}>
        {userList?.map((user) => {
          return (
             
              <Grid item sm={4} xs={6}  key={user?.id} >
            <MediaCard
            //   key={user?.id}
              className={mainStyles.wrapper}
              userImage={user?.picture}

              userName={`${capitalize(user?.title)} ${user?.firstName} ${user?.lastName}` }
              userEmail={user?.email}
              id={user?.id}
            ></MediaCard>
            </Grid>
          );
        })}
      </Grid>
          )}
    </Container>
  );
}

export default Main;

// email: "heinz-georg.fiedler@example.com"
// firstName: "Heinz-Georg"
// id: "0F8JIqi4zwvb77FGz6Wt"
// lastName: "Fiedler"
// picture: "https://randomuser.me/api/portraits/men/81.jpg"
// title: "mr"
