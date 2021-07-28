import React, { useEffect, useState, useRef } from 'react';
import * as Haptics from 'expo-haptics';
import {
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  View
} from 'react-native';
import {
  PresenceTransition,
  Image,
  Row,
  Box,
  Text,
  Stagger,
  Center,
  Button,
  Shadow,
  Pressable,
  NativeBaseProvider
} from 'native-base';
import { CooperText } from './StyledText';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  letter: {
    fontSize: 45,
    opacity: 0
    // transform: [{ translateY: 5000 }]
  }
});
const height = Dimensions.get('window').height;
const letters = 'Saunter'.split();

const AnimatedLogo = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const { navigation } = props;
  useEffect(() => {
    setIsOpen(true);
  });

  return (
    <View style={{ flexDirection: 'column', flex: 1, width: '100%' }}>
      <View style={{ flex: 1 }} />
      <View
        style={{
          flex: 1,
          delay: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <PresenceTransition
          visible={isOpen}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 250
            }
          }}
        >
          <Stagger
            visible={isOpen}
            initial={{
              opacity: 0,
              scale: 0,
              translateY: 100
            }}
            animate={{
              translateY: 0,
              scale: 1,
              opacity: 1,
              transition: {
                type: 'spring',
                mass: 0.4,
                clamp: 0.4,
                stagger: {
                  offset: 300
                }
              }
            }}
            exit={{
              translateY: -100,
              scale: 0.5,
              opacity: 0,
              transition: {
                type: 'spring',
                mass: 0.8,
                stagger: {
                  offset: 30
                },
                delay: 7 * 300
              }
            }}
          >
            <Row>
              <Center horizontal style={{ flexDirection: 'row', width: '100%' }}>
                <Stagger
                  style={{
                    display: 'flex',
                    flexDirection: 'row'
                  }}
                  visible={isOpen}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    translateY: 100
                  }}
                  animate={{
                    translateY: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      mass: 0.4,
                      clamp: 0.4,
                      // friction: 0.3,
                      // tension: 0.4,
                      stagger: {
                        offset: 30
                      },
                      delay: 7 * 30
                    }
                  }}
                  exit={{
                    translateY: -height / 2,
                    scale: 0.5,
                    opacity: 0,
                    transition: {
                      type: 'spring',
                      mass: 0.8,
                      stagger: {
                        offset: 0.5
                      }
                    }
                  }}
                >
                  <CooperText
                    style={{
                      fontSize: 60,
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    S
                  </CooperText>
                  <CooperText
                    style={{
                      fontSize: 60,
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    A
                  </CooperText>
                  <CooperText
                    style={{
                      fontSize: 60,
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    U
                  </CooperText>
                  <CooperText
                    style={{
                      fontSize: 60,
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    N
                  </CooperText>
                  <CooperText
                    style={{
                      fontSize: 60,
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    T
                  </CooperText>
                  <CooperText
                    style={{
                      fontSize: 60,
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    E
                  </CooperText>
                  <CooperText
                    style={{
                      fontSize: 60,
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    R
                  </CooperText>
                </Stagger>
              </Center>
            </Row>

            <Center style={{ width: '100%' }}>
              <Stagger
                style={{
                  alignItems: 'space-between',
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%'
                }}
                visible={isOpen}
                initial={{
                  opacity: 0,
                  scale: 0,
                  translateY: height
                }}
                animate={{
                  translateY: 0,
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    mass: 0.4,
                    clamp: 0.4,
                    stagger: {
                      offset: 300
                    },
                    delay: 7 * 30
                  }
                }}
                exit={{
                  translateY: -height,
                  scale: 0,
                  opacity: 0,
                  transition: {
                    type: 'spring',
                    mass: 0.5,
                    bounce: 0.3,
                    stagger: {
                      offset: 30
                    },
                    delay: 7 * 30
                  }
                }}
              >
                <Center style={{ width: '100%' }}>
                  <Pressable
                    style={{ width: '100%' }}
                    onPress={() => {
                      Haptics.impactAsync('Light');
                      setIsOpen(false);
                      setTimeout(() => {
                        navigation.navigate('WelcomeScreen', {
                          welcomeScreens: [{}, {}, {}],
                          activeIndex: 0
                        });
                      }, 7 * 50);
                    }}
                    style={{
                      width: width - 100,
                      borderWidth: 2,
                      borderColor: 'white',
                      backgroundColor: 'transparent'
                    }}
                  >
                    <Text style={{ textAlign: 'center', padding: 15, color: 'white' }}>
                      Create An Account
                    </Text>
                  </Pressable>
                </Center>
                <Center style={{ width: '100%', marginBottom: 20, marginTop: 15 }}>
                  <Pressable
                    style={{
                      width: '100%'
                    }}
                    onPress={() => {
                      setIsOpen(false);
                      props.navigation.navigate('SignInScreen');
                    }}
                  >
                    <Center
                      style={{
                        width: '100%'
                      }}
                    >
                      <Text
                        style={{
                          color: 'white'
                        }}
                      >
                        Sign In
                      </Text>
                    </Center>
                  </Pressable>
                </Center>
              </Stagger>
            </Center>
          </Stagger>
        </PresenceTransition>
      </View>
    </View>
  );
};

export default AnimatedLogo;
