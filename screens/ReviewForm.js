import { View, TextInput, Button } from "react-native";
import { Formik } from "formik";

import { globalStyles } from "../styles/global";

function ReviewForm({ addReview }) {
  return (
    <View style={ globalStyles.container }>
      <Formik
        initialValues={ { title: '', body: '', rating: '' } }
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
              onChangeText={ fProps.handleChange("title") }
              value={ fProps.values.title }
            />
            <TextInput
              style={ globalStyles.input }
              multiline
              placeholder="Review body"
              onChangeText={ fProps.handleChange("body") }
              value={ fProps.values.body }
            />
            <TextInput
              style={ globalStyles.input }
              keyboardType="numeric"
              placeholder="Rating (1-5)"
              onChangeText={ fProps.handleChange("rating") }
              value={ fProps.values.rating }
            />

            <Button
              title="submit"
              color="maroon"
              onPress={ fProps.handleSubmit }
            />
          </View>
        ) }
      </Formik>
    </View>
  );
}

export default ReviewForm;