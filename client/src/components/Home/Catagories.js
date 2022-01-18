import React from "react";
import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { categories } from "../../contants/data";
import { Link } from "react-router-dom";
const useStyle = makeStyles({
  create: {
    margin: 20,
    background: "#6495ed",
    color: "#fff",
    width: "86%",
  },
  table: {
    border: "1px solid rgba(224,224,224,1)",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Catagories = () => {
  const classes = useStyle();
  return (
    <>
      <Link to={"/create"} className={classes.link}>
        <Button variant="contained" className={classes.create}>
          Create Blog
        </Button>
      </Link>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to={`/`} className={classes.link}>
                All Catagories
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category, id) => (
            <TableRow key={id}>
              <TableCell>
                <Link to={`/?category${category}`} className={classes.link}>
                  {category}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Catagories;
