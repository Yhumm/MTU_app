import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutStack from './AboutStack'
import CustomDrawer from "./CustomDrawer";
const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={AboutStack}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
