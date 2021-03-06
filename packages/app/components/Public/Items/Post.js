import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import {
  MEDIA_BACKEND,
  URL_EXTENTION_POSTS,
} from "../../../config/constants.js";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { formulateMediaUrl } from "../../../lib/utils.js";
import { Card } from "@courselit/components-library";

const useStyles = (featuredImage) =>
  makeStyles((theme) => ({
    container: {
      overflow: "hidden",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
      marginBottom: theme.spacing(4),
      display: "block",
    },
    featuredImage: {
      height: 240,
      width: "100%",
      background: `url('${formulateMediaUrl(
        MEDIA_BACKEND,
        featuredImage
      )}') no-repeat center center`,
      backgroundSize: "cover",
    },
    title: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(0.5),
    },
  }));

const Post = (props) => {
  const classes = useStyles(props.featuredImage)();

  return (
    <Grid item xs={12} md={6}>
      <Link
        href={`/${URL_EXTENTION_POSTS}/[id]/[slug]`}
        as={`/${URL_EXTENTION_POSTS}/${props.courseId}/${props.slug}`}
      >
        <a className={classes.link}>
          <Card>
            <Grid
              item
              container
              direction="column"
              component="article"
              className={classes.container}
            >
              {props.featuredImage && (
                <Grid item className={classes.featuredImage} />
              )}
              <Grid item className={classes.title}>
                <Typography variant="h5">{props.title}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" color="textSecondary">
                  {props.description}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </a>
      </Link>
    </Grid>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
  creatorName: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  featuredImage: PropTypes.string,
  courseId: PropTypes.number.isRequired,
};

export default Post;
