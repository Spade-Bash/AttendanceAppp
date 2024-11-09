import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TeacherDashboard({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuItemPress = (item) => {
    setMenuVisible(false);
    navigation.navigate(item);
  };

  return (
    <View style={styles.container}>
      {/* Header with Hamburger Menu on the Right */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="menu-outline" size={32} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Placeholder for Main Content */}
      <View style={styles.content}>
        <Text style={styles.contentText}>Welcome to your dashboard</Text>
      </View>

      {/* Bottom Navbar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => {}}>
          <Ionicons name="eye-outline" size={28} color="#4b9dea" />
          <Text style={styles.navText}>View Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => {}}>
          <Ionicons name="school-outline" size={28} color="#4b9dea" />
          <Text style={styles.navText}>Manage Classrooms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.replace('UserSelection')}>
          <Ionicons name="log-out-outline" size={28} color="#d9534f" />
          <Text style={styles.navText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Hamburger Menu Modal */}
      <Modal visible={menuVisible} transparent={true} animationType="slide">
        <View style={styles.menuContainer}>
          <View style={styles.menu}>
            <FlatList
              data={['Profile', 'Settings', 'Help']}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleMenuItemPress(item)} style={styles.menuItem}>
                  <Text style={styles.menuItemText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
            <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Aligns the menu icon to the right
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 30,
    position: 'absolute',
    top: 0,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80, // Adjust for header height
  },
  contentText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#ffffff',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 18,
    color: '#333',
  },
  closeButton: {
    paddingVertical: 10,
    marginTop: 20,
    backgroundColor: '#d9534f',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
