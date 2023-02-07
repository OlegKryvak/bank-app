import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { FC, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import Loader from "../../ui/Loader";
import Field from "../../ui/Field";

interface IData {
  email: string;
  password: string;
}

const Auth: FC = () => {
  const [isReg, setIsReg] = useState(false);
  const [data, setData] = useState<IData>({} as IData);
  const { isLoading } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.headline}>{isReg ? "Sign Up" : "Sign in"}</Text>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Field
              value={data.email}
              placeholder="Email"
              onChange={(val) => setData({ ...data, email: val })}
            />
            <Field
              value={data.password}
              placeholder="Password"
              onChange={(val) => setData({ ...data, password: val })}
              isSecure={true}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  form: {
    width: Dimensions.get("screen").width * 0.75,
  },
  headline: {
    fontSize: 20,
    fontWeight: "800",
    color: "blue",
    textAlign: "center",
  },
});

export default Auth;
