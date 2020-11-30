import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container,capitalize } from "@material-ui/core";
import axios from "axios";
import MediaCard from "../components/MediaCard";
import Grid from "@material-ui/core/Grid";

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "10rem",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center",
  }
}));

const { REACT_APP_API_BASE_URL, REACT_APP_API_TOKEN } = process.env;
// console.log(REACT_APP_API_BASE_URL);

function Main(props) {
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
  console.log(userList);
  return (
    <Container className={mainStyles.wrapper} maxWidth="sm">
      <Grid container spacing={2}>
        {userList?.map((user) => {
          return (
             
              <Grid item xs={6} sm={4} key={user?.id} >
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
