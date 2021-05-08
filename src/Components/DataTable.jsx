import {
  Avatar,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import Logo1 from "../Assets/logo1.png";
import Logo2 from "../Assets/logo2.png";
import Logo3 from "../Assets/logo3.png";
import Logo4 from "../Assets/logo4.png";
import Logo5 from "../Assets/logo5.png";
import Logo6 from "../Assets/logo6.png";

const useStyles = makeStyles((theme) => ({
  main: {
    borderRadius: "20px",
    borderCollapse: "separate",
    borderSpacing: "0 1em",
    border: "none",
    width: "100%",
    padding: "0px 10px",
    "& th": {
      color: "white",
      fontSize: "12px",
      textAlign: "center",
      opacity: 0.45,
      border: "none",
      fontWeight: "bold",
    },
    "& td": {
      color: "white",
      fontSize: "12px",
      textAlign: "center",
      fontWeight: "bold",
      border: "none",
      padding: "6px 3px 6px 3px",
    },
    [theme.breakpoints.up("md")]: {
      borderRadius: "20px",
      borderCollapse: "separate",
      borderSpacing: "0 1em",
      border: "none",
      width: "100%",
      padding: "0px 10px",
      "& th": {
        color: "white",
        fontSize: "16px",
        textAlign: "center",
        opacity: 0.45,
        border: "none",
        fontWeight: "bold",
      },
      "& td": {
        color: "white",
        fontSize: "16px",
        textAlign: "center",
        fontWeight: "bold",
        border: "none",
        padding: "6px 3px 6px 3px",
      },
    },
    [theme.breakpoints.up("lg")]: {
      borderRadius: "20px",
      borderCollapse: "separate",
      borderSpacing: "0 1em",
      border: "none",
      width: "100%",
      padding: "0px 25px",
      "& th": {
        color: "white",
        fontSize: "24px",
        textAlign: "center",
        opacity: 0.45,
        border: "none",
        fontWeight: "bold",
      },
      "& td": {
        color: "white",
        fontSize: "24px",
        textAlign: "center",
        fontWeight: "bold",
        border: "none",
        padding: "0.75rem",
      },
    },
  },
  tableRow: {
    backgroundColor: "#2e3241",
    [theme.breakpoints.up("md")]: {
      backgroundColor: "#2e3241",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "#2e3241",
    },
  },
}));

const DataTable = () => {
  const classes = useStyles();
  const tableHeading = [
    "#",
    "Platform",
    "Last Traded Price",
    "Buy/Sell Price",
    "Difference",
    "Savings",
  ];

  const tabledata = [
    {
      platform: "WazirX",
      ltp: "₹ 44,89,555",
      buy: "₹ 45,785 / ₹ 47,87,111",
      diffrence: "8.25%",
      saving: "▲ ₹ 3,45,789",
      logo: Logo1,
    },
    {
      platform: "Bitbns",
      ltp: "₹ 44,92,093",
      buy: "₹ 44,92,031 / ₹ 44,92,093",
      diffrence: "8.59 %",
      saving: "▲ ₹ 3,55,358",
      logo: Logo2,
    },
    {
      platform: "Giotus",
      ltp: "₹ 43,64,000",
      buy: "₹ 43,64,001 / ₹ 44,49,890",
      diffrence: "5.49 %",
      saving: "▲ ₹ 2,27,264",
      logo: Logo3,
    },
    {
      platform: "Colodax",
      ltp: "₹ 25,83,138",
      buy: "₹ 25,75,167 / ₹ 26,08,984",
      diffrence: "-37.56 %",
      saving: "▼ ₹ 15,53,597",
      logo: Logo4,
    },
    {
      platform: "Zebpay",
      ltp: "₹ 44,60,012",
      buy: "₹ 44,65,000 / ₹ 44,60,105",
      diffrence: "7.81 %",
      saving: "▲ ₹ 3,23,276",
      logo: Logo5,
    },
    {
      platform: "CoinDCX",
      ltp: "₹ 44,91,168",
      buy: "₹ 44,78,358 / ₹ 44,91,529",
      diffrence: "8.57 %",
      saving: "▲ ₹ 3,54,433",
      logo: Logo6,
    },
  ];
  return (
    <TableContainer>
      <Table className={classes.main}>
        <TableHead>
          <TableRow>
            {tableHeading.map((item, index) => (
              <TableCell> {item} </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tabledata.map((item, index) => (
            <TableRow className={classes.tableRow}>
              <TableCell style={{ borderRadius: "10px 0 0 10px" }}>
                {index + 1}
              </TableCell>
              <TableCell
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <div>
                  <Avatar
                    src={item.logo}
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
                {item.platform}{" "}
              </TableCell>
              <TableCell> {item.ltp} </TableCell>
              <TableCell> {item.buy} </TableCell>
              <TableCell style={{ color: "#5dc7c2" }}>
                {" "}
                {item.diffrence}{" "}
              </TableCell>
              <TableCell
                style={{ color: "#5dc7c2", borderRadius: "0px 10px 10px 0px" }}
              >
                {item.saving}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
