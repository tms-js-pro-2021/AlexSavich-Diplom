import React from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { TextField, Button, Box, FormControl } from '@material-ui/core';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const OrderForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: object({
      name: string().required(),
      phone: string().matches(phoneRegExp, 'Phone number is not valid'),
      address: string().required(),
    }),
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <FormControl fullWidth sx={{ m: 1 }}>
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
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            required
            type="tel"
            label="Phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && !!formik.errors.phone}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            required
            label="Address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && !!formik.errors.address}
            helperText={formik.touched.address && formik.errors.address}
          />
        </FormControl>

        <Button variant="contained" type="submit" size="large">
          Make Order
        </Button>
      </form>
    </Box>
  );
};
