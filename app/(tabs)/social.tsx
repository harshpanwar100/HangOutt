import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SocialScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Social</Text>
          <Text style={styles.subtitle}>Connect with the community</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <View style={styles.activityList}>
              <View style={styles.activityItem}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>JD</Text>
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.username}>John Doe</Text>
                  <Text style={styles.activityText}>Completed a new project</Text>
                  <Text style={styles.time}>2 hours ago</Text>
                </View>
              </View>

              <View style={styles.activityItem}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>AS</Text>
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.username}>Alice Smith</Text>
                  <Text style={styles.activityText}>Achieved a new milestone</Text>
                  <Text style={styles.time}>5 hours ago</Text>
                </View>
              </View>

              <View style={styles.activityItem}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>BJ</Text>
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.username}>Bob Johnson</Text>
                  <Text style={styles.activityText}>Shared an interesting article</Text>
                  <Text style={styles.time}>1 day ago</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667eea',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
  },
  activityList: {
    gap: 16,
  },
  activityItem: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 16,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  activityContent: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  activityText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
  },
});
