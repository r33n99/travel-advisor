import React from "react";
import {
  Box,
  Typhography,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  CardActions,
  Button,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

function PlaceDetails({ place, selected, refProp }) {
  const classes = useStyles();

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://upload.wikimedia.org/wikipedia/commons/9/9a/%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%82%D0%BE.png"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            оценка от {place.num_reviews} {place.num_reviews > 1 ? "поситителей" : "поситителя"}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box my={1} display="flex" justifyContent="space-between">
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.adress && (
          <Typography
            gutterBottom
            varinat="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.adress}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            varinat="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon />
            {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            onClick={() => window.open(place.web_url, "_blank")}
            size="small"
            color="primary"
          >
            Trip Advisor
          </Button>
          <Button
            onClick={() => window.open(place.website, "_blank")}
            size="small"
            color="primary"
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default PlaceDetails;
