import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../helper/FetchData";

import { makeStyles } from "@material-ui/core/styles";
import { Container, capitalize } from "@material-ui/core";
import MediaCard from "../components/MediaCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { format as formatDate, parseISO } from 'date-fns';

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "10rem",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center",
  },
}));

function UserDetail() {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState();
  const mainStyles = stylesFunc();

  useEffect(() => {
    // console.log(fetchData(`/user/${id}`))
    fetchData(`/user/${id}`)
      .then((res) => setUserDetail(res))
      .catch((err) => console.log(err))
      .finally();
  }, [id]);
  // id her değiştiğinde useEffect çalışacak
  return (
    <Container className={mainStyles.wrapper} maxWidth="sm">
      {/* {JSON.stringify(userDetail)} */}
      <img src={userDetail?.picture} alt="user" />
      <Typography variant="h4">{userDetail?.firstName}</Typography>
      <Typography variant="h4">{userDetail?.lastName}</Typography>
      {userDetail?.registerDate && (
        <Typography variant="h4">
          {
            //TODO: move to helper
          }
          {formatDate(parseISO(userDetail.registerDate), "MMM/dd/yy")}
        </Typography>
      )}
      <Typography variant="h4">{userDetail?.phone}</Typography>

    </Container>
  );
}

export default UserDetail;

// "id":"0F8JIqi4zwvb77FGz6Wt","phone":"0700-3090279","lastName":"Fiedler","firstName":"Heinz-Georg","location":{"state":"Rheinland-Pfalz","street":"4118, Schulstraße","city":"Fellbach","timezone":"-7:00","country":"Germany"},"email":"heinz-georg.fiedler@example.com","gender":"male","title":"mr","registerDate":"2020-03-07T00:42:32.221Z","picture":"https://randomuser.me/api/portraits/men/81.jpg","dateOfBirth":"1974-03-12T21:15:08.878Z"
