import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../../layouts/Header";
// import CustomSnackbar from "../../components/CustomSnackbar";

const HomePageRoot = () => {
  return (
    <>
      {/* <CustomSnackbar /> */}
      <Box>
        <Header />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default HomePageRoot;
