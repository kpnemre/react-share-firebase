import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    marginTop: "2rem",
    maxWidth: 300,
    margin: "auto",
    //marginRight:'10px',
    marginBottom: "30px",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.5)",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "0 20px 70px -13px rgba(0,0,0,0.5)",
    },
  },
  media: {
    height: 300,
    width: "auto",
    resizeMode: "contain",
  },

});

export default function MediaCard({ id, userImage, userName, userEmail }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => history.push(`/user/${id}`)}>
        <CardMedia className={classes.media} image={userImage} />
        <CardContent>
        <Typography noWrap gutterBottom variant="h6" component="h2">
            {userName}
          </Typography>
          <Typography noWrap variant="body2" color="textSecondary" component="p">
            {userEmail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button
          onClick={() => history.push(`/user/${id}`)}
          size="small"
          color="primary"
        >
          View Full Profile
        </Button>
        <Button
          onClick={() => history.push(`/user/${id}/post`)}
          size="small"
          color="primary"
        >
          View Posts
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  id: PropTypes.string.isRequired,
  userImage: PropTypes.string,
  userName: PropTypes.string,
  userEmail: PropTypes.string,
};
