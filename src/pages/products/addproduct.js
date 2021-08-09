import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Input,
  IconButton,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import { useForm, Controller } from "react-hook-form";
import Select from "@material-ui/core/Select";

import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  field: {
    marginTop: 15,
    marginBottom: 15,
    display: "block",
  },
});

export default function AddProduct() {
  // const fileObj = [];
  // const fileArray = [];
  const classes = useStyles();
  let history = useHistory();
  // const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);
  const [dataValues, setdataValues] = useState([]);
  console.log("dv", dataValues);
  const fileobj = [];

  // const [files, setFiles] = useState([]);

  // const [myfile, setMyFIle] = useState(
  //   "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
  // );
  // const [myfl, setMyFl] = useState(
  //   "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
  // );
  const paperStyle = { padding: "30px 20px", width: 600, margin: "30px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 10 };
  const nums = [1, 2, 3, 4];
  useEffect(() => {
    axios
      .get("http://localhost:8000/category", {
        headers: { Authorization: "Basic " + localStorage.getItem("id_token") },
      })
      .then((response) => {
        setdataValues(response.data.data);
        console.log(response.data.data);
      });
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const token = localStorage.getItem("id_token");

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("image", data.image[0]);
    formData.append("image", data.image[1]);
    formData.append("image", data.image[2]);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);

    console.log(formData);
    console.log(formData.get("image"));
    console.log(formData.get("title"));

    axios
      .post(
        "http://localhost:8000/product",

        formData,

        {
          headers: { Authorization: `Basic ${token}` },
        },
      )
      .then((response) => {
        history.push("products");
        toast.success("Product Added");
        console.log(response);
        console.log("datas", response.data);
      });
  };

  return (
    <Grid>
      <Paper elevation={15} style={paperStyle}>
        <ToastContainer />

        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Add Product</h2>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className={classes.field}
                label="Name"
                value={value}
                fullWidth
                onChange={onChange}
                error={!!error}
                placeholder="Enter Product Name"
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Name required" }}
          />
          <Controller
            name="image"
            className={classes.field}
            control={control}
            defaultValue=""
            render={({ field: { onChange }, fieldState: { error } }) => (
              <input
                style={{ marginTop: 15, marginBottom: 15, display: "block" }}
                className={classes.field}
                fullWidth
                name="image"
                multiple
                onChange={(e) => {
                  console.log("pr", preview);
                  // setPreview((prevState) => ({ ...prevState }));

                  onChange(e.target.files);

                  let files = e.target.files;
                  fileobj.push(files);
                  let reader;

                  for (var i = 0; i < fileobj[0].length; i++) {
                    reader = new FileReader();
                    reader.readAsDataURL(fileobj[0][i]);
                    reader.onload = (e) => {
                      // setPreview([...preview]);
                      // preview.length = 0;
                      preview.push(e.target.result); // update the array instead of replacing the entire value of preview

                      setPreview([...preview]); // spread into a new array to trigger rerender
                      console.log("prs", preview);
                    };
                  }
                }}
                error={!!error}
                helperText={error ? error.message : null}
                type="file"
              />
            )}
            rules={{ required: "Image required" }}
          />

          {(preview || []).map((url, index) => (
            <img
              src={url}
              key={index}
              style={{ marginLeft: "10px" }}
              id="img"
              width={90}
              height={90}
            />
          ))}
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className={classes.field}
                label="Description"
                multiline
                rows={3}
                rowsMax={5}
                value={value}
                fullWidth
                onChange={onChange}
                error={!!error}
                placeholder="Enter your description"
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Description required" }}
          />
          <Controller
            name="category"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                select
                className={classes.field}
                label="Category"
                value={value}
                fullWidth
                onChange={onChange}
                error={!!error}
                placeholder="Enter Category"
                helperText={error ? error.message : null}
              >
                {dataValues.map((tags, index) => (
                  <MenuItem key={index} value={tags.title}>
                    {tags.title}
                  </MenuItem>
                ))}
                {/* <MenuItem key={"jani"} value={"jani"}>
                  {"jani"}
                </MenuItem> */}
              </TextField>
            )}
            rules={{ required: "Category required" }}
          />
          <Controller
            name="price"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className={classes.field}
                label="Price"
                value={value}
                fullWidth
                onChange={onChange}
                error={!!error}
                placeholder="Enter Price"
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Price required" }}
          />
          <Controller
            name="quantity"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className={classes.field}
                label="Quantity"
                value={value}
                fullWidth
                onChange={onChange}
                error={!!error}
                placeholder="Enter Quantity"
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Quantity required" }}
          />
          {/* <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          /> */}
          <Box display="flex" justifyContent="center">
            <Button
              style={marginTop}
              type="submit"
              variant="contained"
              color="primary"
            >
              Add Product
            </Button>
          </Box>
        </form>
      </Paper>
    </Grid>
  );
}
