import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { firstName, lastName } = props;
  return (
    <View>
      <Text>
        Hola {firstName} {lastName}
      </Text>
    </View>
  );
}

// Saludar.defaultProps = {
//   firstName: "Gregson",
//   lastName: "Murcia Castro",
// };

// PropTypes help to a new programmer which values are required
Saludar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
