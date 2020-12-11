import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../helper/FetchData";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from "@material-ui/core/styles";
import { Container, CircularProgress } from "@material-ui/core";
import { formatDateFunc } from "../helper/FormatDate";
import Typography from "@material-ui/core/Typography";
import { format as formatDate, parseISO } from 'date-fns';



const stylesFunc = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '2rem',
    height: "calc(100vh - 19.0625rem)",
    backgroundColor: theme.palette.action.selected,
    width: '95%',
    maxWidth: 850,
    margin: 'auto',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',

  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '80%',
    maxWidth: 600,
    height: '100%',
  },
  circular: {
    margin: "auto",
  },
}));

function UserDetail() {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState();
  const mainStyles = stylesFunc();
  const styles = stylesFunc();

  useEffect(() => {
    // console.log(fetchData(`/user/${id}`))
    fetchData(`/user/${id}`)
      .then((res) => setUserDetail(res))
      .catch((err) => console.log(err))
      .finally();
  }, [id]);
  // id her değiştiğinde useEffect çalışacak
  return (
    <Card className={mainStyles.root}>
    <div className={mainStyles.details}>
      <CardContent className={mainStyles.content}>
        {!userDetail ? (
          <CircularProgress />
        ) : (
            <>
              <Typography component="h5" variant="h5">{userDetail?.firstName} {userDetail?.lastName}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {userDetail?.location?.country}, {userDetail?.location?.city}</Typography>
              <Typography variant="subtitle1" color="textSecondary">{userDetail?.phone}</Typography>
              {userDetail?.registerDate && (
                <Typography variant="subtitle1" color="textSecondary">
                  {formatDateFunc(userDetail.registerDate)}
                </Typography>
              )}
            </>
          )}
      </CardContent>
    </div>
    <CardMedia
      className={mainStyles.cover}
      image={userDetail?.picture}
      title={userDetail?.firstName}
    />
  </Card>
  );
}

export default UserDetail;

// "id":"0F8JIqi4zwvb77FGz6Wt","phone":"0700-3090279","lastName":"Fiedler","firstName":"Heinz-Georg","location":{"state":"Rheinland-Pfalz","street":"4118, Schulstraße","city":"Fellbach","timezone":"-7:00","country":"Germany"},"email":"heinz-georg.fiedler@example.com","gender":"male","title":"mr","registerDate":"2020-03-07T00:42:32.221Z","picture":"https://randomuser.me/api/portraits/men/81.jpg","dateOfBirth":"1974-03-12T21:15:08.878Z"
