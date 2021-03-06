import React, { PureComponent } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { PacmanIndicator } from "react-native-indicators";
import debounce from "lodash/debounce";
import { styles, menuColors } from "./../styles/Stylesheet";

class Home extends PureComponent {
  state = {};

  // -------------------- LIFECYCLE METHODS --------------------

  // on first render
  componentDidMount() {
    // bind necessary methods
    this.navigate = debounce(this.navigate, 500, {
      leading: true,
      trailing: false,
    });
    this.pop = debounce(this.pop, 500, {
      leading: true,
      trailing: false,
    });
    this.popToTop = debounce(this.popToTop, 500, {
      leading: true,
      trailing: false,
    });
  }

  // -------------------- NAVIGATION METHODS --------------------

  // method to navigate to new screen
  navigate = (route, params) => {
    this.props.playSelectFX();
    this.props.navigation.navigate(route, params);
  };

  // method to go back one screen
  pop = () => {
    this.props.navigation.pop();
  };

  // method to go to the home screen
  popToTop = () => {
    this.props.navigation.popToTop();
  };

  // -------------------- JSX SCREEN LAYOUT --------------------

  render() {
    return (
      <>
        {!this.props.fontLoaded && !this.props.soundsLoaded ? (
          <SafeAreaView style={styles.vertical}>
            <View style={styles.gameModeRow}>
              <Text style={styles.titleText}>Loading</Text>
            </View>

            <View style={styles.gameModeRow}>
              <PacmanIndicator
                size={100}
                animationDuration={500}
                color="white"
              />
            </View>
          </SafeAreaView>
        ) : (
          <>
            <SafeAreaView style={styles.topBar}>
              <Text
                style={{
                  ...styles.titleText,
                  fontFamily: this.props.fontLoaded
                    ? "Chelsea-Market"
                    : "System",
                }}
              >
                Circles
              </Text>
            </SafeAreaView>

            <View style={styles.vertical}>
              <View style={styles.gameModeRow}>
                <View style={styles.gameModeContainer}>
                  <TouchableOpacity
                    style={{
                      ...styles.gameMode,
                      backgroundColor: menuColors.teal,
                    }}
                    onPress={() =>
                      this.navigate("Game", {
                        mode: "Time",
                      })
                    }
                  >
                    <Image
                      style={styles.gameModeIcon}
                      source={require("./../assets/icons/timed.png")}
                    />
                  </TouchableOpacity>
                  <View style={styles.gameModeRow}>
                    <Text
                      style={{
                        ...styles.gameModeText,
                        fontFamily: this.props.fontLoaded
                          ? "Chelsea-Market"
                          : "System",
                      }}
                    >
                      Timed
                    </Text>
                  </View>
                </View>

                <View style={styles.gameModeContainer}>
                  <TouchableOpacity
                    style={{
                      ...styles.gameMode,
                      backgroundColor: menuColors.green,
                    }}
                    onPress={() =>
                      this.navigate("Game", {
                        mode: "Moves",
                      })
                    }
                  >
                    <Image
                      style={styles.gameModeIcon}
                      source={require("./../assets/icons/moves.png")}
                    />
                  </TouchableOpacity>
                  <View style={styles.gameModeRow}>
                    <Text
                      style={{
                        ...styles.gameModeText,
                        fontFamily: this.props.fontLoaded
                          ? "Chelsea-Market"
                          : "System",
                      }}
                    >
                      Moves
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.gameModeRow}>
                <View style={styles.gameModeContainer}>
                  <TouchableOpacity
                    style={{
                      ...styles.gameMode,
                      backgroundColor: menuColors.red,
                    }}
                    onPress={() =>
                      this.navigate("Game", {
                        mode: "Endless",
                      })
                    }
                  >
                    <Image
                      style={styles.gameModeIcon}
                      source={require("./../assets/icons/endless.png")}
                    />
                  </TouchableOpacity>
                  <View style={styles.gameModeRow}>
                    <Text
                      style={{
                        ...styles.gameModeText,
                        fontFamily: this.props.fontLoaded
                          ? "Chelsea-Market"
                          : "System",
                      }}
                    >
                      Endless
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.bottomBar}>
              <TouchableOpacity onPress={() => this.navigate("About")}>
                <Image
                  style={styles.smallIcon}
                  source={require("./../assets/icons/about.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.navigate("Leaderboard")}>
                <Image
                  style={styles.smallIcon}
                  source={require("./../assets/icons/leaderboard.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.navigate("Settings")}>
                <Image
                  style={styles.smallIcon}
                  source={require("./../assets/icons/settings.png")}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </>
    );
  }
}

export default Home;
