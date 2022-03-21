import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-ionicons";

const ProfileScreen = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        }}
        resizeMode="cover"
        style={styles.backgroundImg}
      >
        <Image
          style={styles.profileImg}
          source={{
            uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
          }}
        />
        {/* <TouchableOpacity style={styles.settings}>
          <Icon name="more" size={30} color="black" />
        </TouchableOpacity> */}
      </ImageBackground>

      <Text style={styles.name}>meliketkn</Text>
      <Text style={styles.bio}>
        My name is Melike, I live in İzmir. I love watching movies and Teen wolf
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 5,
          marginHorizontal: 100,
        }}
      >
        <View>
          <TouchableOpacity>
            <Text style={styles.followNo}>10</Text>
            <Text style={styles.follow}>followers</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.followNo}>0</Text>
            <Text style={styles.follow}>followings</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View
          style={styles.card}
        >
          <Text style={styles.favoritesTxt}>FAVORITE MOVIES</Text>
          <Text style={styles.favoritesNo}>12</Text>
        </View>
        <View
          style={styles.card}
        >
          <Text style={styles.favoritesTxt}>WATCHLIST</Text>
          <Text style={styles.favoritesNo}>8</Text>
        </View>
      </View>
       
        <View style={styles.container2}>
      <Pressable
        style={styles.button}
        onPress={() => console.log('pressed')}
        android_ripple={{color: 'green'}}>
        <Text style={styles.buttonText}>Button</Text>
      </Pressable>

    </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: 'cyan',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  container: {
    flex: 1,
  },
  backgroundImg: {
    width: "100%",
    height: 150,
  },
  profileImg: {
    alignSelf: "center",
    position: "absolute",
    bottom: -60,
    width: 120,
    height: 120,
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 40,
  },
  name: {
    alignSelf: "center",
    fontSize: 20,
    marginTop: 65,
    fontWeight: "bold",
  },
  bio: {
    alignSelf: "center",
    textAlign: "center",
    padding: 5,
    paddingHorizontal: 50,
    fontSize: 14,

    color: "#7e7b8c",
  },
  follow: {
    fontSize: 12,
    color: "#7e7b8c",
  },
  followNo: {
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#7e7b8c",
  },
  settings: {
    position: "absolute",
    bottom: -125,
    left: "88%",
    width: 120,
    height: 120,
  },
  favoritesTxt: {
    fontSize: 15,
    color: "black",
    alignSelf: "center",
  },
  favoritesNo: {
    fontSize: 27,
    alignSelf: "center",
    fontWeight: "bold",
    color: "black",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 10,
    width: "45%",
    marginVertical: 10,
    elevation:10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});
export default ProfileScreen;