import { View, TextInput, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import FlatButton from "../components/FlatButton";

import { globalStyles } from "../styles/global";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup.string().required().test(
    "is-1-5",
    "Rating must be a number 1 - 5",
    val => parseInt(val) <= 5 && parseInt(val) >= 1
  )
});

function ReviewForm({ addReview }) {
  return (
    <View style={ globalStyles.container }>
      <Formik
        initialValues={ { title: '', body: '', rating: '' } }
        validationSchema={ reviewSchema }
        onSubmit={ (values, actions) => {
          actions.resetForm();
          addReview(values);
        } }
      >
        { fProps => (
          <View>
            <TextInput
              style={ globalStyles.input }
              placeholder="Review title"
              value={ fProps.values.title }
              onChangeText={ fProps.handleChange("title") }
              onBlur={ fProps.handleBlur("title") }
            />
            <Text style={ globalStyles.errorText }>{ fProps.touched.title && fProps.errors.title }</Text>

            <TextInput
              style={ globalStyles.input }
              multiline
              placeholder="Review body"
              value={ fProps.values.body }
              onChangeText={ fProps.handleChange("body") }
              onBlur={ fProps.handleBlur("body") }
            />
            <Text style={ globalStyles.errorText }>{ fProps.touched.body && fProps.errors.body }</Text>

            <TextInput
              style={ globalStyles.input }
              keyboardType="numeric"
              placeholder="Rating (1-5)"
              value={ fProps.values.rating }
              onChangeText={ fProps.handleChange("rating") }
              onBlur={ fProps.handleBlur("rating") }
            />
            <Text style={ globalStyles.errorText }>{ fProps.touched.rating && fProps.errors.rating }</Text>

            <FlatButton
              text="submit"
              behaviour={ fProps.handleSubmit }
            />
          </View>
        ) }
      </Formik>
    </View>
  );
}

export default ReviewForm;