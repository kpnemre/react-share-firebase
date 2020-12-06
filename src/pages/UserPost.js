import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../helper/FetchData";

import { makeStyles } from "@material-ui/core/styles";
import { Container, CircularProgress, Grid } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import { format as formatDate, parseISO } from "date-fns";
import UserPostCard from "../components/UserPostCard";
import { formatDateFunc } from "../helper/FormatDate";

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "10rem",
    minHeight: "calc(100vh - 19.0625rem)",
    textAlign: "center",
    maxWidth: "60rem",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
}));

function UserPost() {
  const { id } = useParams();
  const [userPost, setUserPost] = useState();
  console.log(userPost);
  const mainStyles = stylesFunc();

  // TODO: fill in catch finally
  useEffect(() => {
    // console.log(fetchData(`/user/${id}`))
    fetchData(`/user/${id}/post`)
      .then((res) => setUserPost(res.data))
      .catch((err) => console.log(err))
      .finally();
  }, [id]);
  // id her değiştiğinde useEffect çalışacak


  return (
    <Container className={mainStyles.wrapper} maxWidth="sm">
      {/* {JSON.stringify(UserPost)} */}
      {!userPost ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {/* {"owner":{
          "id":"1OuR3CWOEsfISTpFxsG7",
          "picture":"https://randomuser.me/api/portraits/men/66.jpg",
          "lastName":"Vasquez",
          "email":"dylan.vasquez@example.com",
          "title":"mr",
          "firstName":"Dylan"}
        ,"id":"rf9yJKSGRgKViYKMplOK",
        "image":"https://img.dummyapi.io/photo-1561130627-0456cca0bc4d.jpg",
        "publishDate":"2020-05-09T23:48:15.570Z",
        "text":"brown dog on seashore during daytimew",
        "tags":["dog","nature","ocean"],
        "link":"http://www.tom-hills.co.uk",
        "likes":80}, */}

          {/* {JSON.stringify(userPost)} */}

          {userPost.map((post) => {
            const { firstName, lastName, email } = post.owner;
            return (
              <Grid item sm={4} xs={6} key={userPost?.id}>
                <UserPostCard
                  id={post.id}
                  userInitial={firstName[0]}
                  name={firstName + lastName}
                  // title=
                  subheader={formatDateFunc(post.publishDate)}
                  imgSrc={post.image}
                  // imgTitle=
                  description={post.text}
                  likes={post.likes}
                  email={email}
                
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
}

export default UserPost;

// "id":"0F8JIqi4zwvb77FGz6Wt","phone":"0700-3090279","lastName":"Fiedler","firstName":"Heinz-Georg","location":{"state":"Rheinland-Pfalz","street":"4118, Schulstraße","city":"Fellbach","timezone":"-7:00","country":"Germany"},"email":"heinz-georg.fiedler@example.com","gender":"male","title":"mr","registerDate":"2020-03-07T00:42:32.221Z","picture":"https://randomuser.me/api/portraits/men/81.jpg","dateOfBirth":"1974-03-12T21:15:08.878Z"

// id=
// userInitial=
// title=
// subheader=
// imgSrc={post.image}
// imgTitle=
// description=
// likes=
