import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { fetchData } from "../helper/FetchData";
// import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function UserPostCard({
  userInitial,
  subheader,

  imgSrc,
  imgTitle,
  description,
  name,
  likes,

  id,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [comments, setComments] = useState();

  const handleExpandClick = (postId) => {
    if (!expanded) getComments(postId);
    setExpanded(!expanded);
  };
  const getComments = (postId) => {
    fetchData(`/post/${postId}/comment`)
      .then((res) => setComments(res?.data))
      .catch()
      .finally();
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {userInitial}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={subheader}
      />
      <CardMedia className={classes.media} image={imgSrc} title={imgTitle} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${likes} Likes`}
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          // onClick={handleExpandClick}
          onClick={() => handleExpandClick(id)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {!comments ? (
            <CircularProgress />
          ) : comments?.length ? (
            comments.map((comment) => {
              return (
                //   <Typography paragraph key={comment.id}>
                //   {JSON.stringify(comment.message)}
                // </Typography>
                <React.Fragment key={comment.id}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar} src= {comment.owner.picture}>
                        
                      </Avatar>
                    }
                
                    title={`${comment.owner.title} ${comment.owner.firstName} ${comment.owner.lastName}`}
                  />
                  {/* <Typography variant="body2">
                    {JSON.stringify(comment.owner.picture) }
                  </Typography> */}
                  <Typography paragraph>{comment.message}</Typography>
                  <hr />
                </React.Fragment>
              );
            })
          ) : (
            "No comment"
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}

// {"owner":{"id":"nye7EW8urdTCL9IhuIjL","title":"mr","lastName":"Rocha","email":"mem.rocha@example.com","firstName":"Mem","picture":"https://randomuser.me/api/portraits/men/59.jpg"},"id":"pXGcBWaaEZw3GyNEDovz","message":"😀😀🥰😁 Excellent image","publishDate":"2020-03-08T04:21:29.326Z"}