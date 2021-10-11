import React, { useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import {
  TextField,
  Button,
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  TextareaAutosize,
  Card,
  CardMedia,
  CardActions,
} from '@material-ui/core';
import { useCategories } from '../../hooks/useCategories';
import './styles.scss';

const getAvalibleSizes = sizesBool => {
  const sizes = {
    s: sizesBool.sizeS,
    m: sizesBool.sizeM,
    l: sizesBool.sizeL,
    xl: sizesBool.sizeXL,
  };
  return Object.keys(sizes).filter(key => sizes[key]);
};

export const ProductForm = ({ onSubmit, initialValues }) => {
  const [file, setFile] = useState('');

  const formik = useFormik({
    initialValues: {
      ...initialValues,
      sizeS: initialValues.availableSizes?.includes('s'),
      sizeM: initialValues.availableSizes?.includes('m'),
      sizeL: initialValues.availableSizes?.includes('l'),
      sizeXL: initialValues.availableSizes?.includes('xl'),
    },
    enableReinitialize: true,
    onSubmit: async ({ sizeS, sizeM, sizeL, sizeXL, ...values }) => {
      await onSubmit(
        {
          ...values,
          availableSizes: getAvalibleSizes({ sizeS, sizeM, sizeL, sizeXL }),
        },
        file
      );
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: object({
      name: string().required(),
    }),
  });

  const { categories, loading } = useCategories();

  return (
    <Box>
      <form onSubmit={formik.handleSubmit} className="product-form">
        <FormControl sx={{ m: 1 }}>
          <TextField
            required
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && !!formik.errors.name}
            helperText={formik.touched.name && formik.errors.name}
          />
        </FormControl>
        <FormControl>
          <InputLabel id="categories">Category</InputLabel>
          <Select
            id="categories"
            loading={loading}
            value={formik.values.category}
            name="category"
            onChange={formik.handleChange}
            label="Category"
          >
            {categories.map(({ name, id }) => (
              <MenuItem value={id}>{name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1 }}>
          <TextField
            required
            label="Price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.price && !!formik.errors.price}
            helperText={formik.touched.price && formik.errors.price}
          />
        </FormControl>
        <div className="form-row">
          <FormGroup>
            <InputLabel id="size-checker">Available sizes</InputLabel>

            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.sizeS}
                  value={formik.values.sizeS}
                  defaultChecked={initialValues.availableSizes?.includes('s')}
                />
              }
              onChange={formik.handleChange}
              name="sizeS"
              label="S"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.sizeM}
                  value={formik.values.sizeM}
                  defaultChecked={initialValues.availableSizes?.includes('m')}
                />
              }
              name="sizeM"
              label="M"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.sizeL}
                  value={formik.values.sizeL}
                  defaultChecked={initialValues.availableSizes?.includes('l')}
                />
              }
              onChange={formik.handleChange}
              name="sizeL"
              label="L"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.sizeXL}
                  value={formik.values.sizeXL}
                  defaultChecked={initialValues.availableSizes?.includes('xl')}
                />
              }
              onChange={formik.handleChange}
              name="sizeXL"
              label="XL"
            />
          </FormGroup>

          <Card sx={{ width: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={
                file
                  ? URL.createObjectURL(file)
                  : (initialValues.imgUri && initialValues.imgUri[0]) || ''
              }
            />
            <CardActions>
              <Button variant="contained" component="label">
                Upload image
                <input
                  type="file"
                  hidden
                  onChange={e => {
                    setFile(e.target.files[0]);
                  }}
                />
              </Button>
            </CardActions>
          </Card>
        </div>

        <FormControl sx={{ m: 1 }}>
          <TextareaAutosize
            aria-label="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && !!formik.errors.description}
            helperText={formik.touched.description && formik.errors.description}
            minRows={5}
            placeholder="Few words about product..."
          />
        </FormControl>

        <Button variant="contained" type="submit" size="large">
          Done
        </Button>
      </form>
    </Box>
  );
};
